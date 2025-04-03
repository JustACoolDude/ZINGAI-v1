const config = require('../config.json');
module.exports = {
	name: 'viewtheory',
    description: 'View a theory from !theories. Use the corresponding # as the second argument.',
    aliases: ['vt'],
    usage:['[abbreviation of MV] [Theory #]'],
    args: true,
	execute(message, args) {
       // var x = args[0].toLowerCase();
        var intro = '**__Theories for:';
       // var y = args[0] == x;
        var x = config.abbs_array;
        //console.log(Array.isArray(x), typeof(x), x)
        //var y = args[0].toLowerCase();
        var detect = x.includes(args[0]);
        var none = 'There are currently no theories on this MV available for listing.';
        var parsed = parseInt(args[1],10);
        
        var y = [];
        
        for (let i = 0;i < config.abbs_array.length;i++){
           y.push(config.abbs_array[i].toLowerCase());
        }

        var detect2 = y.includes(args[0]);

        //return message.channel.send(none+'\nPlease come back later.');

        //error detection
        if (args.length < 2){
            return message.reply('you have provided too few arguments!')
        }
        if (args.length > 2){
            return message.reply('you have provided too many arguments!')
        }
        if (!detect && !detect2) {return message.reply('that is not a valid MV name!')}

        if (!(Number.isInteger(parsed)) && args.length == 2){
            return message.reply('that page does not exist!');
        }
        
        return message.channel.send("This command is currently under construction. Please come back later.")

        //mv names
        if (args[0] === ('NL') || args[0] === ('nl')){
            return message.channel.send(intro+' Nonsense Literature__**\n'+none)
        }

        if (args[0] === ('S') || args[0] === ('s')){
            return message.channel.send(intro+' Sister__**\n'+none)
        }

        if (args[0] ===('HF') || args[0] === ('hf')){
            return message.channel.send(intro+' Heart Forecast__**\n- Akane\n- Yukie\n- Momo\n- Hitotsume');
        }

    



      

	},
};