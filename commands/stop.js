module.exports = {
	name: 'stop',
	description: "Racecars don't need headlights because the track is always lit",
	execute(message) {
		
        const voiceChannel = message.member.voice.channel;

        if (voiceChannel) {
                voiceChannel.leave();
        }
           
	}
};          