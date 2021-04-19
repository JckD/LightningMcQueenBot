module.exports = {
	name: 'lit',
	description: "Racecars don't need headlights because the track is always lit",
	execute(message) {
		if (message.content === 'are those stickers?') {

            const ytdl = require('ytdl-core');

            if (message.channel.type !== 'text') return;

            const voiceChannel = message.member.voice.channel;

            if (!voiceChannel) {
                return message.channel.send("Racecars don't need headlights because the track is always... lit :rolling_eyes:")
            }
            message.channel.send("Racecars don't need headlights because the track is always... lit :rolling_eyes:")
            voiceChannel.join().then(connection => {
                const stream = ytdl('https://www.youtube.com/watch?v=pazPUwFmnZs', { filter: 'audioonly' });
                const dispatcher = connection.play(stream, {volume : 0.05});

                dispatcher.on('end', () => voiceChannel.leave());
            });
        }
	},
};          