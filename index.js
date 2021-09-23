const Discord = require('discord.js');
//import schedule from 'node-schedule';
require('dotenv').config();
const { prefix, channel } = require('./config.json');
const fs = require('fs');



const client = new Discord.Client();
client.commands = new Discord.Collection();

// Dynamicalled retrieve command files
// returns an array of all the files names
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// set a new item in the collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Ready!');
  /// message.send('test')
});

client.login(process.env.TOKEN)

//const members = guild.members
//console.log(members)

//client.user.setActivity('Cars 3', {type: 'WATCHING'});
client.on('message', message => {
    if(message.author.bot) return;
    console.log(message.channel.name,',', message.author.username,':', message.content);

    //console.log(message.author.bot)
    //message.channel.send('<@'+ user+ '> have you got the tattoo yet?')
    // Quick responses no need to be single commands
    if(message.webhookID) {
        message.channel.send('Suck my fat exhaust pipe')
    }
    
    if(message.channel.name != channel) return;
    //if (message.channel.name == 'the-serval-pit') {
        //console.log(message.content)
        messageLowerCase = message.content.toLowerCase()
        console.log(message.author.roles)
        if (message.content.toLowerCase().includes('lightning') || message.content.toLowerCase().includes('mcqueen')|| message.content.toLowerCase().includes('kachow')) {
            message.channel.send('I fucked your Mom Shitlips')
        }
        else if (message.content.toLowerCase().includes('speed')) {
            message.channel.send('I am Speed, Faster than Fast! Quicker than Quick')
        } 
        else if (message.content.toLowerCase().includes('float like a cadilac')) {
            message.channel.send('Sting like a Beemer!')
        } else if (message.content.toLowerCase().includes('are those stickers?')) {
            client.commands.get('lit').execute(message)
        } else if (message.content.toLowerCase().includes('wow')) {
            client.commands.get('wow').execute(message)
            client.commands.get('changePermission').execute(message)
        } else if (message.content.toLocaleLowerCase().includes('what is life?')) {
            client.commands.get('highway').execute(message)
        }
   

        //if (!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).split(/ +/);
        //console.log(args)
        const commandName = args.shift().toLowerCase();
        //console.log(commandName)
        const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));


        if (!command) return;

        //else if (!message.content.startsWith(prefix) || message.author.bot) return;
        
        try {
            command.execute(message, args);
        }
        catch(error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
        }
    //}
    
});

