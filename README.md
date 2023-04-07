# **_LING SYSTEM_**

NPM: https://www.npmjs.com/package/ling-system
<br>
GitHub: https://github.com/styele/LingSystem
<br>
Discord Support Server: https://discord.gg/gdxnfwvpqr
<br>
Dev Package: 𝙻𝚂  | ᴹᴼᴴᴬᴹᴱᴰ ♛#6366
<br>
**A Free Package Node.js Azkar And Colors....**
<hr>

# **_Installation_**

```js
npm install ling-system
```

# **_Azkar_**

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
            Embed.setDescription(`${Azkar.Arabic()}`)
                .setTimestamp()
                .setColor(Colors.Automatic()),
        ],
    });
}, 50000);
...
```

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
