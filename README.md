# **_Ling System_**
NPM: `[` https://www.npmjs.com/package/ling-system `]`
<br>
GitHub: `[` https://github.com/styele/LingSystem `]`
<br>
Discord Server Support: `[` Soon `]`
<br>
Dev Package: `6x.g`
<br>
<hr>

# **_Installation_**

```js
npm install ling-system
```

<br>

# _EmbedBuilder_

```js
...
const { Azkar, Colors, EmbedBuilder } = require("ling-system"); // npm i ling-system
...
try {
    const Embed = new EmbedBuilder()
        .setTitle(`Azkar`)
        .setDescription(`Arabic: ${Azkar.Arabic()} \nEnglish: ${Azkar.English()}`)
        .setColor(Colors.Automatic());

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
            Embed.setDescription(Azkar.Arabic())
                .setTimestamp()
                .setColor(Colors.Automatic()),
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
            Embed.setDescription(Azkar.English())
                .setTimestamp()
                .setColor(Colors.Automatic()),
        ],
    });
}, 50000);
...
```

# **_Database (`db`)_**

```js
...
const { Database } = require("ling-system"); // npm i ling-system
const db = new Database() // To define the Database to function properly

...
db.set('key','value'); // to set a data to database.
db.get('key'); // to get the data by key.
db.delete('key'); // to delete key from database.
db.has('key','value'); // return "true" or "false".

db.add('key', 10;); // to add a number to the key.
db.substract('key', 5); // to subtract a number from the key.
db.push('key', 10); // to set a data at the end.
db.math("key","+",5); // to math the numbers.

db.fetch(); // to fetch the data from database. 
db.fetchAll(); // to fetchAll data.
db.all(); // to get all data in database.

db.backup("Filename"); // to make a backup file.
db.reset(); // to delete all data and database.
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
<hr>

- **Discord Server Support: `[` Soon `]`**
- **Dev Package: `6x.g`**
<br>
<hr>
<center></center>
