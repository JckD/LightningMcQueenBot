module.exports = {
	name: 'highway',
	description: "Racecars don't need headlights because the track is always lit",
	execute(message) {
		if (message.content === 'what is life?') {

            const ytdl = require('ytdl-core');

            if (message.channel.type !== 'text') return;

            const voiceChannel = message.member.voice.channel;

            if (!voiceChannel) {
                return message.channel.send("LIFE IS A HIGHWAY :red_car::dash:")
            }
            message.channel.send("LIFE IS A HIGHWAY :red_car::dash:")
            voiceChannel.join().then(connection => {
                const stream = ytdl('https://www.youtube.com/watch?v=Zh-ZUrc-aLI', { filter: 'audioonly' });
                const dispatcher = connection.play(stream, {volume : 0.05});

                dispatcher.on('end', () => voiceChannel.leave());
            });
        }
	},
};          