$f("player", "http://dlibtest.home.nyu.edu/hidvl_site/util/fp/subtitle_test/flash/flowplayer/flowplayer.swf", {
    clip: {
        url: 'http://stream.flowplayer.org/big_buck_bunny_with_captions.mp4',
        // we want to display English by default.
        // the English subtitle track index is 2. 0 is video, 1 is audio, 2 is English, 3 is German.
        // you can filter on whatever field of the track you want, usually, you filter on trackid
        captionsTrackFilter: "trackid=2"
    },
    plugins:  {
 
        captions: {
            url: "http://dlibtest.home.nyu.edu/hidvl_site/util/fp/subtitle_test/flash/flowplayer/flowplayer.captions.swf",
 
            // the content plugin we use to show the captions
            captionTarget: 'content'
        },
 
        // configure a content plugin to look good for our purpose
        content: {
            url: "http://dlibtest.home.nyu.edu/hidvl_site/util/fp/subtitle_test/flash/flowplayer/flowplayer.content.swf",
            top: 10,
            width: '80%',
            height:40,
            backgroundColor: 'transparent',
            backgroundGradient: 'none',
            border: 0,
 
            // an outline is useful so that the subtitles are more visible
            textDecoration: 'outline',
            style: {
                'body': {
                fontSize: '14',
                fontFamily: 'Arial',
                textAlign: 'center',
                color: '#ffffff'
                }
            }
        }
    }
});
