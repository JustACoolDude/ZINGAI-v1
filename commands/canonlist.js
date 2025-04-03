module.exports = {
    name: 'canonlist', 
    aliases:['cl'],
    description: 'Get a list of what\'s considered canon and what isn\'t.',
    cooldown: 30,
    args: false,
    execute(message, args) {
        
       return message.channel.send('Canon in Eve’s universe is defined as being part of some sort of storyline between Music Videos (MVs). \
       \n\n__**List of MVs with a 99.9% chance of being Canon:**__\
       \n- Literary Nonsense \n- Dramaturgy\n- As You Like It\n- Outsider\n- Tokyo Ghetto\
       \n- Last Dance\n- How To Devour Life\n\n\__**List of MVs with questionable Canonical Value:**__\
       \n- Demon Dance Tokyo\n- Ambivalent\
       \n- We\’re Still Underground\n- This World To You\n- Baumkuchen End\
       \n\n__**List of MVs that probably aren\’t Canon (sad but true):**__\n- The Secret About That Girl\n- Sister\
       \n- Dark Night (Yamiyo)\n- raison d\’etre\n- Heart Forecast\n- LEO\n- Snow\
       \n- Promise (Yakusoku)\n- Heart Sea (Shinkai)')
		
	},
};