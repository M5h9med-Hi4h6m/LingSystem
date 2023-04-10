# **_`L`i`n`g `S`y`s`t`e`m_**
NPM: `[` https://www.npmjs.com/package/ling-system `]`
<br>
GitHub: `[` https://github.com/styele/LingSystem `]`
<br>
Discord Server Support: `[` https://discord.gg/gdxnfwvpqr `]`
<br>
Dev Package: `𝙻𝚂  | ᴹᴼᴴᴬᴹᴱᴰ ♛#6366`
<br>
<hr>

# **_Installation_**

```js
npm install ling-system
```

# _EmbedBuilder_

```js
...
const { EmbedBuilder } = require("ling-system"); // npm i ling-system
...
try {
    const Embed = new EmbedBuilder()
        .setTitle(`Azkar`)
        .setDescription(`Arabic: ${Azkar.Arabic} \nEnglish: ${Azkar.English}`)
        .setColor(Colors.Automatic);

    return interaction.reply({ embeds: [Embed], ephemeral: true });
} catch (error) {
    return;
}
...
```

# **_Azkar Arabic_**

```js
...
const { Azkar, Colors, EmbedBuilder } = require("ling-system"); // npm i ling-system
        
...
const Embed = new EmbedBuilder() // Create A New Embed

let Channel = client.channels.cache.get("Channel Id"); // Channel Id

if (!Channel) return console.log("[Error] Noting Channel Azkar..."); // Client Noting Channel For All Server Form Bot

setInterval(() => {
    Channel.send({ // Send Azkar For Channel 
        embeds: [
            Embed.setDescription(Azkar.Arabic)
                .setTimestamp()
                .setColor(Colors.Automatic),
        ],
    });
}, 50000);
...
```

# **_Azkar English_**

```js
...
const { Azkar, Colors, EmbedBuilder } = require("ling-system"); // npm i ling-system
        
...
const Embed = new EmbedBuilder() // Create A New Embed

let Channel = client.channels.cache.get("Channel Id"); // Channel Id

if (!Channel) return console.log("[Error] Noting Channel Azkar..."); // Client Noting Channel For All Server Form Bot

setInterval(() => {
    Channel.send({ // Send Azkar For Channel 
        embeds: [
            Embed.setDescription(Azkar.English)
                .setTimestamp()
                .setColor(Colors.Automatic),
        ],
    });
}, 50000);
...
```

<br>

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
Colors.Automatic
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
<hr>

- **Discord Server Support: `[` https://discord.gg/gdxnfwvpqr `]`**
- **Dev Package: `𝙻𝚂  | ᴹᴼᴴᴬᴹᴱᴰ ♛#6366`**
<br>
<hr>
<center></center>

# **_Updates `1.1.1`_**
- 1 - **You can now specify the Azkar language without the `()`**
- 2 - **You can use Color Automatic without the `()`**
- 3 - **EmbedBuilder has been added globally**