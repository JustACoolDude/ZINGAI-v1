module.exports = {
    name: 'taremove',
    aliases:['tare'],
	description: "Removes the ```Talented Artist``` role from the user. Can be used at any time.\nDoes not work if the user does not have the role.\nPlease note that this action is irreversible.",
	cooldown:5,
	execute(message, args) {
		const member = message.guild.members.cache.get(message.author.id);
               if (message.member.roles.cache.some(role => role.name === 'Talented Artists')) {
                let g = message.guild;
                var role = g.roles.cache.find(role => role.name === "Talented Artists");    
                member.roles.remove(role);
                message.reply("your `Talented Artists` role has been removed!")
                message.react('👍')
                }
                else{
                    message.reply("You already do not have the `Talented Artists` role!")
                    message.react('😓')
                }
	},
};