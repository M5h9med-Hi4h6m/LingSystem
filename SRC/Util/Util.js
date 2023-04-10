'use strict';

const { Collection } = require('@discordjs/collection');
const Colors = require('../Structures/Colors');
const { Error: RangeError, TypeError, ErrorCodes } = require('../errors');
const isObject = d => typeof d === 'object' && d !== null;

/**
 * Flatten an object. Any properties that are collections will get converted to an array of keys.
 * @param {Object} obj The object to flatten.
 * @param {...Object<string, boolean|string>} [props] Specific properties to include/exclude.
 * @returns {Object}
 */
function flatten(obj, ...props) {
  if (!isObject(obj)) return obj;

  const objProps = Object.keys(obj)
    .filter(k => !k.startsWith('_'))
    .map(k => ({ [k]: true }));

  props = objProps.length ? Object.assign(...objProps, ...props) : Object.assign({}, ...props);

  const out = {};

  for (let [prop, newProp] of Object.entries(props)) {
    if (!newProp) continue;
    newProp = newProp === true ? prop : newProp;

    const element = obj[prop];
    const elemIsObj = isObject(element);
    const valueOf = elemIsObj && typeof element.valueOf === 'function' ? element.valueOf() : null;
    const hasToJSON = elemIsObj && typeof element.toJSON === 'function';

    // If it's a Collection, make the array of keys
    if (element instanceof Collection) out[newProp] = Array.from(element.keys());
    // If the valueOf is a Collection, use its array of keys
    else if (valueOf instanceof Collection) out[newProp] = Array.from(valueOf.keys());
    // If it's an array, call toJSON function on each element if present, otherwise flatten each element
    else if (Array.isArray(element)) out[newProp] = element.map(e => e.toJSON?.() ?? flatten(e));
    // If it's an object with a primitive `valueOf`, use that value
    else if (typeof valueOf !== 'object') out[newProp] = valueOf;
    // If it's an object with a toJSON function, use the return value of it
    else if (hasToJSON) out[newProp] = element.toJSON();
    // If element is an object, use the flattened version of it
    else if (typeof element === 'object') out[newProp] = flatten(element);
    // If it's a primitive
    else if (!elemIsObj) out[newProp] = element;
  }

  return out;
}

/**
 * Options used to escape markdown.
 * @typedef {Object} EscapeMarkdownOptions
 * @property {boolean} [codeBlock=true] Whether to escape code blocks or not
 * @property {boolean} [inlineCode=true] Whether to escape inline code or not
 * @property {boolean} [bold=true] Whether to escape bolds or not
 * @property {boolean} [italic=true] Whether to escape italics or not
 * @property {boolean} [underline=true] Whether to escape underlines or not
 * @property {boolean} [strikethrough=true] Whether to escape strikethroughs or not
 * @property {boolean} [spoiler=true] Whether to escape spoilers or not
 * @property {boolean} [codeBlockContent=true] Whether to escape text inside code blocks or not
 * @property {boolean} [inlineCodeContent=true] Whether to escape text inside inline code or not
 */

/**
 * Escapes any Discord-flavour markdown in a string.
 * @param {string} text Content to escape
 * @param {EscapeMarkdownOptions} [options={}] Options for escaping the markdown
 * @returns {string}
 */
function escapeMarkdown(
  text,
  {
    codeBlock = true,
    inlineCode = true,
    bold = true,
    italic = true,
    underline = true,
    strikethrough = true,
    spoiler = true,
    codeBlockContent = true,
    inlineCodeContent = true,
  } = {},
) {
  if (!codeBlockContent) {
    return text
      .split('```')
      .map((subString, index, array) => {
        if (index % 2 && index !== array.length - 1) return subString;
        return escapeMarkdown(subString, {
          inlineCode,
          bold,
          italic,
          underline,
          strikethrough,
          spoiler,
          inlineCodeContent,
        });
      })
      .join(codeBlock ? '\\`\\`\\`' : '```');
  }
  if (!inlineCodeContent) {
    return text
      .split(/(?<=^|[^`])`(?=[^`]|$)/g)
      .map((subString, index, array) => {
        if (index % 2 && index !== array.length - 1) return subString;
        return escapeMarkdown(subString, {
          codeBlock,
          bold,
          italic,
          underline,
          strikethrough,
          spoiler,
        });
      })
      .join(inlineCode ? '\\`' : '`');
  }
  if (inlineCode) text = escapeInlineCode(text);
  if (codeBlock) text = escapeCodeBlock(text);
  if (italic) text = escapeItalic(text);
  if (bold) text = escapeBold(text);
  if (underline) text = escapeUnderline(text);
  if (strikethrough) text = escapeStrikethrough(text);
  if (spoiler) text = escapeSpoiler(text);
  return text;
}


/**
 * Can be a number, hex string, an RGB array like:
 * ```js
 * [255, 0, 255] // purple
 * ```
 * or one of the following strings:
 * - `Default`
 * - `White`
 * - `Aqua`
 * - `Green`
 * - `Blue`
 * - `Yellow`
 * - `Purple`
 * - `LuminousVividPink`
 * - `Fuchsia`
 * - `Gold`
 * - `Orange`
 * - `Red`
 * - `Grey`
 * - `Navy`
 * - `DarkAqua`
 * - `DarkGreen`
 * - `DarkBlue`
 * - `DarkPurple`
 * - `DarkVividPink`
 * - `DarkGold`
 * - `DarkOrange`
 * - `DarkRed`
 * - `DarkGrey`
 * - `DarkerGrey`
 * - `LightGrey`
 * - `DarkNavy`
 * - `Blurple`
 * - `Greyple`
 * - `DarkButNotBlack`
 * - `NotQuiteBlack`
 * - `Random`
 * @typedef {string|number|number[]} ColorResolvable
 */

/**
 * Resolves a ColorResolvable into a color number.
 * @param {ColorResolvable} color Color to resolve
 * @returns {number} A color
 */
function resolveColor(color) {
  if (typeof color === 'string') {
    if (color === 'Random') return Math.floor(Math.random() * (0xffffff + 1));
    if (color === 'Default') return 0;
    color = Colors[color] ?? parseInt(color.replace('#', ''), 16);
  } else if (Array.isArray(color)) {
    color = (color[0] << 16) + (color[1] << 8) + color[2];
  }

  if (color < 0 || color > 0xffffff) throw new RangeError(ErrorCodes.ColorRange);
  else if (Number.isNaN(color)) throw new TypeError(ErrorCodes.ColorConvert);

  return color;
}



module.exports = { resolveColor };
