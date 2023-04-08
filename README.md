# **_LING SYSTEM_**

NPM: https://www.npmjs.com/package/ling-system
<br>
GitHub: https://github.com/styele/LingSystem
<br>
Discord Server Support: https://discord.gg/gdxnfwvpqr
<br>
Dev Package: 𝙻𝚂  | ᴹᴼᴴᴬᴹᴱᴰ ♛#6366
<br>
<hr>

# **_Installation_**

```js
npm install ling-system
```

# **_Azkar Arabic_**

```js
...
const { EmbedBuilder } = require("discord.js"); // npm i discord.js
const { Azkar, Colors } = require("ling-system"); // npm i ling-system
        
...
const Embed = new EmbedBuilder() // Create A New Embed

let Channel = client.channels.cache.get("Channel Id"); // Channel Id

if (!Channel) return console.log("[Error] Noting Channel Azkar..."); // Client Noting Channel For All Server Form Bot

setInterval(() => {
    Channel.send({ // Send Azkar For Channel 
        embeds: [
            Embed.setDescription(Azkar.Arabic())
                .setTimestamp()
                .setColor(Colors.Automatic()),
        ],
    });
}, 50000);
...
```

# **_Note About Azkar_**
- **`[Arabic]` يجب استخدام `()` بعد تحديد لغة الأذكار لتعمل بشكل صحيح**

# **_Azkar English_**

```js
...
const { EmbedBuilder } = require("discord.js"); // npm i discord.js
const { Azkar, Colors } = require("ling-system"); // npm i ling-system
        
...
const Embed = new EmbedBuilder() // Create A New Embed

let Channel = client.channels.cache.get("Channel Id"); // Channel Id

if (!Channel) return console.log("[Error] Noting Channel Azkar..."); // Client Noting Channel For All Server Form Bot

setInterval(() => {
    Channel.send({ // Send Azkar For Channel 
        embeds: [
            Embed.setDescription(Azkar.English())
                .setTimestamp()
                .setColor(Colors.Automatic()),
        ],
    });
}, 50000);
...
```

<br>

# **_Note About Azkar_**
- **`[English]` You must use `()` after specifying the Azkar language for it to work properly**

# **_Colors_**

```js
...
const { Colors } = require("ling-system"); // npm i ling-system

...
Colors.LuminousVividPink
Colors.DarkButNotBlack
Colors.NotQuiteBlack
Colors.DarkVividPink
Colors.DarkerGrey
Colors.DarkOrange
Colors.LightGrey
Colors.DarkPurple
Colors.Automatic()
Colors.DarkGreen
Colors.DarkAqua
Colors.DarkBlue
Colors.DarkGold
Colors.DarkGrey
Colors.DarkNavy
Colors.Blurple
Colors.DarkRed
Colors.Greyple
Colors.Default
Colors.Fuchsia
Colors.Yellow
Colors.Purple
Colors.Orange
Colors.Green
Colors.White
Colors.Aqua
Colors.Blue
Colors.Gold
Colors.Grey
Colors.Navy
Colors.Red
...
```
# **_A Note About Colors Automatuc_**
- **`[English]` You must use `()` after using `"Automatic"` colors for it to work properly**
<hr>

- **Discord Server Support: https://discord.gg/gdxnfwvpqr**
- **Dev Package: 𝙻𝚂  | ᴹᴼᴴᴬᴹᴱᴰ ♛#6366**
<br>
<hr>
<center><h1>

**End Package**</h1></center>