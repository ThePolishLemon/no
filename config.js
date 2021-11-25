module.exports = {
    app: {
        px: '$',
        token: 'OTEwODc2MjgzNjYyMTIzMDA4.YZZNpQ.7OIsHxlPQdeIym7Ic6Qp2ej78Kg',
        playing: 'LoL BaD'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
