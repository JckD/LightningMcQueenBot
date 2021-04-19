module.exports = {
	name: 'wow',
	description: "wow",
	execute(message) {
		

            const ytdl = require('ytdl-core');

            if (message.channel.type !== 'text') return;

            const voiceChannel = message.member.voice.channel;

            if (!voiceChannel) {
                return message.channel.send("wow")
            }
            message.channel.send("wow")
            voiceChannel.join().then(connection => {
                const stream = ytdl('https://www.youtube.com/watch?v=mBr8mcLj9QY', { filter: 'audioonly' });
                const dispatcher = connection.play(stream, {volume : 0.05});

                dispatcher.on('end', () => voiceChannel.leave());
            });
        
	},
};          