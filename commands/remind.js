const { Message } = require("discord.js");
const { user, channel } = require('../config.json');

module.exports = {
    name: 'remind',
    description : 'function to remind someone daily of a task',
    execute(message) {

        //console.log(message.channel)
        if (message.channel.name == channel && message.channel.type === "text") {
            const textChannel = message.channel
            // message.guild.members.cahce.get()
            const members = textChannel.members.map(member => member);
            const userArray = Object(members)

            for (let i = 0; i < userArray.length; i++) {
                if (userArray[i].user.username == user) {
                    const aimee = userArray[i]
                    message.channel.send('<@' + aimee + '> have you got the tattoo yet?')
                }
            }
            
        }
        
    }
}