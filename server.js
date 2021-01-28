const dbd = require("dbd.js")
var fs = require("fs")
 
const bot = new dbd.Bot({
token: "ODA0MjAwMzQxNDQ3OTAxMTg0.YBI37g.gTxGkBzllPvd9tBanFm4SCAIdLY",
prefix: "!"
})
 
bot.status({
  text: "Play Music In $serverCount Server!",
  type: "PLAYING",
  time: 12
})

bot.status({
  text: "My Prefix Is <!>",
  type: "PLAYING",
  time: 12
})
 
bot.onMessage()
  
 //commands handler
var reader = fs.readdirSync("./cmd/").filter (file => file.endsWith(".js"))
for(const file of reader) {
  const command = require(`./cmd/${file}`)
  bot.command({
name: command.name, 
code: command.code
  })
}

