 const Discord = require("discord.js");
 const client = new Discord.Client();
 const Bots = require("./bots.json")
 
 bot.on("Ready", () => {
  console.log(`${bot.user.name}, is online!`)
  bot.user.setActivity("Counting bots!!!!!")
 })
 
 bot.on("message", message => {
  message.channel.send("Coming soon!")
 })
 
 bot.login(process.evl.TOKEN)
 
