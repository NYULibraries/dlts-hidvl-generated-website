flowplayer("player", "http://releases.flowplayer.org/swf/flowplayer-3.2.16.swf", {
    log: { level: 'debug', filter: 'org.flowplayer.captions.*' },
    clip: {
 
        url: 'mp4:vod/demo.flowplayervod/buffalo_soldiers.mp4',
 
        // this is the SubRib file with captions info
        captionUrl: 'http://hidvl.nyu.edu/subtitles/Anabelle.srt',
 
        // we want to use RTMP since this is a 1,5 hour long movie
        provider: 'rtmp',
 
        // do not distort widescreen image in fullscreen mode
        scaling: 'fit'
    },
    plugins:  {
 
        // the captions plugin
        captions: {
            url: "http://releases.flowplayer.org/swf/flowplayer.captions-3.2.9.swf",
 
            // pointer to a content plugin (see below)
            captionTarget: 'content'
        },
 
        // configure a content plugin so that it
        // looks good for showing subtitles
        content: {
            url: "http://releases.flowplayer.org/swf/flowplayer.content-3.2.8.swf",
            bottom: 25,
            height:40,
            backgroundColor: 'transparent',
            backgroundGradient: 'none',
            border: 0,
            textDecoration: 'outline',
            style: {
                body: {
                    fontSize: 14,
                    fontFamily: 'Arial',
                    textAlign: 'center',
                    color: '#ffffff'
                }
            }
        },
 
        // streaming plugin configuration
        rtmp: {
            url: "http://releases.flowplayer.org/swf/flowplayer.rtmp-3.2.12.swf",
            netConnectionUrl: 'rtmp://rtmp01.hddn.com/play'
        },
 
        // change default skin to "tube"
        controls: {
            url: "http://releases.flowplayer.org/swf/flowplayer.controls-tube-3.2.15.swf"
        }
 
    },
    canvas: {
        backgroundGradient: 'none'
    }
});

