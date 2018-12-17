var Discord = require('discord.js')

exports.run = async (client, msg, args) => {

var hello = new Discord.RichEmbed()
.setTitle(`${message.author.tag} Hello Juga`)
.addField(`Jangan Lupa follow ig Dbd ya!`,`https://instagram.com/discordbots.dev`)
.setFooter("Have an Nice day")
msg.channel.send(hello)

}


exports.conf = {
aliases:"r!hello"
}
