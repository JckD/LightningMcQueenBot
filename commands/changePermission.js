const { Message } = require("discord.js");
const { user, channel } = require('../config.json');

module.exports = {
    name: 'changePermission',
    description : 'backdoor go brrr',
    execute(message) {

        
        if (message.channel.type === "text" && message.author.username === "JPAD") {
           
            const textChannel = message.channel
            // message.guild.members.cahce.get()
            const members = textChannel.members.map(member => member);
            const userArray = Object(members)
            //console.log(userArray)
            for (let i = 0; i < userArray.length; i++) {
                if (userArray[i].user.username == 'Viper_265A') {
                    const victim = userArray[i]
                    //victim.roles
                    
                    //console.log(victim)
                    //message.channel.send('<@' + aimee + '> have you got the tattoo yet?')
                }
            }
            
        }
        
    }
}