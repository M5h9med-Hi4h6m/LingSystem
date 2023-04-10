const { Azkar, Colors, version, EmbedBuilder, Database } = require("./index");

const db = new Database()

console.log(`Azkar Arabis: \"${Azkar.Arabic()}\"`);

console.log(`Azkar English: \"${Azkar.English()}\"`);

console.log(`Colors \"${Colors.Automatic()}\"`);

console.log(`Package Version: \"${version}\"`)

const Embeds = new EmbedBuilder()
    .setTitle(`Azkar`)
    .setDescription(`Arabic: ${Azkar.Arabic()} \nEnglish: ${Azkar.English()}`)
    .setColor(Colors.Automatic());

console.log(Embeds);

return db.set("key", 'Value')