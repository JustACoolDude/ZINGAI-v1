module.exports = {
    name: 'zingai', 
    aliases:['z'],
    description: 'Get an alphabetically sorted list of all Zingai.\nZingais with a (?) at the end may in fact be human, but that is unconfirmed.\nDo not include the (?) when using commands such as !s.',
    cooldown: 1,
    execute(message, args) {
    var max = 4
    var intro = '__**Zingai List (Page '+args[0] +' of '+max+ ')**__\n';
    length = args.length;
    var parsed = parseInt(args[0],10);
    
    
    if (args.length > 1){
        return message.reply('that page does not exist!');
    }

    if (!(Number.isInteger(parsed)) && args.length == 1){
        return message.reply('that page does not exist!');
    }

    if (parsed>max){
        return message.reply('that page does not exist!');
    }

    if (parsed == 0){
        return message.reply('that page does not exist!');
    }
    
    if (args[0] === '2'){
        return message.channel.send(intro+'- Maruiro\n- Mocchi\n- Noppo\n- Oni\n- Oyashirazu\n- Pierott\n- Pylon (?)')
    }

    if (args[0] === '3'){
        return message.channel.send(intro+'- Salamander\n- Saru\n- Sebastian\n- Sensei\n- Tamago\n- Thazen\n- The Cat')
    }
    if (args[0] === '4'){
        return message.channel.send(intro+'- The Fairy\n- The Headless Dragon\n- Unagi\n- Unako\n- Usa')
    }
    else {
        return message.channel.send('__**Zingai List (Page 1 of '+max+')**__\n- Dorothy\n- Edogon\n- Hitotsume\n- Ibex Rabbit\n- Janitor\n- Kumataro\n- Kuroko');
    }

   
		
	},
};