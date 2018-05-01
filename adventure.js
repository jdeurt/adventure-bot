const Discord = require("discord.js");
const sql = require("sqlite3");
const config = require("./src/config.js");
const handler = require("./src/level-handler");
const embeds = require("./assets/rarity-embeds");
const info = require("./assets/item-info");

const bot = new Discord.Client();
const players = new sql.Database("./xp/playerinfo.sqlite");

bot.on("message", msg => {
    //this event listener is only for testing
    if(msg.author.bot) return;
    let embed = new Discord.RichEmbed(embeds(
        "Blue Gemsword",
        "A rare weapon. Use it wisely!",
        [{name: "Stats", value: "dmg +3\nspd +1"}]
    ).epic)
    .attachFile(info.swords.advanced.all.path)
    .setThumbnail("attachment://"+info.swords.advanced.all.path.split("/").pop());
    msg.channel.send(embed);
});

bot.login(config.TOKEN);
