const Discord = require('discord.js');
const config = require('../config.json'); 
const client = new Discord.Client;
module.exports = {
	name: 'headpat',
	description: 'Kinda self-explanatory',
    cooldown:10,
    aliases:["hp"],
    usage:["[mention a user]"],
    args:true,
	execute(message, args) {
        user = message.author;
        if (!args){return message.reply("You have entered no arguments!");}
        if (args.length > 1) {return message.reply("You have entered too many arguments!")}
        if (!message.mentions.members.first()) {return message.reply("That is an invalid user!")}


        blank = " "
        space = message.member.displayName.length;

        //console.log(("<@"+user.nickname+">").length)
        console.log(message.member.displayName.length)
        message.channel.send("<@"+user.id+">\n"+blank.repeat(space+1)+"<:headpat:707372490648846358>\n"+blank.repeat(space+10)+args[0])
		
	},
};