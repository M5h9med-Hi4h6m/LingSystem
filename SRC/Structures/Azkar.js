'use strict';

const { CArabic } = require("../Data/Azkar/Arabic");
const { CEnglish } = require("../Data/Azkar/English");

/**
 * @typedef {Object} Azkar
 * @property {number} Arabic CArabic
 * @property {number} English CEnglish
 */

/**
 * @type {Azkar}
 * @ignore
 */

module.exports = {
  Arabic: CArabic,
  English: CEnglish,
};