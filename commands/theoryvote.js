const Discord = require('discord.js');
const client = new Discord.Client();
const env = require('dotenv');
module.exports = {
    name: 'theoryvote',
	description: 'Allows people to vote if a theory should be a part of !theories. If you think you\'ve got a good theory, use this command. \nRequires 12 👍 emojis to be sent for review.\nUpon getting 15 👍, TheMonkeyKing will be pinged to help peer review/put the theory in !vt.\nThis command has a 12 hour cooldown.',
	cooldown: 1,
	//43200 seconds = 12 hours
	aliases:['tv'],
	
	execute(message, args) {
	
	env.config();
	if (message.channel.id != 744383047276953680){
		message.react('😓');
		//message.react('711783461207146496')
		return message.channel.send('You cannot use this command in this channel!');
	}
	


	var i = 1;
	var link = "http://discordapp.com/channels/" + message.guild.id + "/" + message.channel.id + "/" + message.id;;


         
	
	},
}