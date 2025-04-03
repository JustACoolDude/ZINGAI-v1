module.exports = {
    name: 'restart',
    aliases:['res'],
	description: 'A restart command. Can only be used by the owner of the bot.',
	cooldown: 1,
	execute(message, args) {
        if (message.author.id != process.env.ownerID) {return message.reply("this command can only be used by the bot owner!")};
        message.channel.send("Bot has been restarted!");
        client.destroy();
        client.login(process.env.token)
	},
};