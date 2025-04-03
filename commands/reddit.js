module.exports = {
	name: 'reddit',
	description: 'Provides links to unofficial Eve-related Subreddits.',
	cooldown:10,
	execute(message, args) {
		message.channel.send('Eve Subreddit - <https://www.reddit.com/r/E_ve/>\
		\nKara no Kioku Subreddit - <https://www.reddit.com/r/KaraNoKioku/>');
	},
};