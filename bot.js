const Discord = require('discord.js');
const client = new Discord.Client();
console.log("ٍSpam Bot By itzZa1D , VM#8866");

client.on("ready", () => {
let channel =     client.channels.get("512936885270609944")
setInterval(function() {
channel.send(`Venom is the Best`);
}, 25)
})
 
client.login(process.env.BOT_TOKEN);
