module.exports = {
    name: 'mvlist',
	description: 'Get an alphabetically organized list of all of Eve\'s Music Videos, as well as abbreviations used in other commands such as !mvc.',
	aliases:['mvl'],
	execute(message, args) {
		message.channel.send('__**List of all Music Videos**__\n**Note:** The letters in parentheses are the abbreviations used for commands such as !mvc.\
		\n- Demon Dance Tokyo (DDT)\n- Nonsense Literature (NL)\n- The Secret About That Girl (AS)\n- Dramaturgy (D)\
		\n- As You Like it (ASYL)\n- Sister (S)\n- Outsider (O)\n- Ambivalent (A)\n- Tokyo Ghetto (TG)\
		\n- Last Dance (LD)\n- We\'re Still Underground (WSU)\n- This World To You (TWTY)\n- Dark Night (DN)\
		\n- Baumkuchen End (BE)\n- raison d\'etre (RD)\n- Heart Forecast (HF)\n- LEO (LEO)\n- Snow (Snow)\
		\n- How To Devour Life (HTDL)\n- Promise (P)\n- Heart Sea (HS)');
	},
};