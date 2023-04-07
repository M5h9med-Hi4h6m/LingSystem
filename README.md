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
...
const discord = require("discord.js"); // npm i dsicord.js
const { Azkar, Colors } = require("ling-system"); // npm i ling-system

...
client.on('messageCreate', message => {

  if (message.content === 'Azkar') {

    const Embed = new discord.EmbedBuilder()
    .setDescription(Azkar.Arabic)
    .setColor(Colors.Automatic)
    .setTimestamp()

    message.reply({ embeds: [Embed] })
  }

})
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
