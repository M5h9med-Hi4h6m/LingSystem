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
npm i ling-system
```

# **_Azkar_**

```js
const { EmbedBuilder } = require("discord.js"); // npm i discord.js@14
const { Colors, Azkar } = require("./index"); // npm i ling-system

...
const Embed = EmbedBuilder()

let ChannelAzkar = client.channels.cache.get("ChannelId"); // Channel Id

const { guild } = ChannelAzkar;

if (!ChannelAzkar) return console.log("[Error] Noting Channel Azkar..."); // Client Noting Channel For All Server Form Bot

setInterval(() => {
    ChannelAzkar.send({ // Send Azkar For Channel 
        embeds: [
            Embed.setFooter({ text: `${guild.name}`, iconURL: `${guild.iconURL({ size: 1024 })}`, })
                .setDescription(`${Azkar.Arabic}`)
                .setTimestamp()
                .setColor(Colors.Automatic),
        ],
    });
}, 3500);
...
```

# **_Colors_**

```js
const { EmbedBuilder } = require("discord.js"); // npm i discord.js@14
const { Colors } = require("ling-system"); // npm i ling-system
...
const Embed = new EmbedBuilder()

Channel.send({
    embeds: [
        Embed.setDescription(`Description`)
            .setTimestamp()
            .setColor(Colors.Automatic),
    ],
});
...
```
