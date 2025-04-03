module.exports = {
    name: 'dream',
    aliases:["yume"],
	description: 'So anyways...',
	cooldown:10,
	execute(message, args) {
		message.channel.send('*Dakedo, yume ni mezameta kimi wa nani wo miru no?\nAnyway, when you awaken to your dream, what will you see in your eyes?*');
	},
};