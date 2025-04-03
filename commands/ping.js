module.exports = {
	name: 'ping',
	description: 'Ping!',
	cooldown:60,
	execute(message, args) {
		message.channel.send('Pong.');
	},
};