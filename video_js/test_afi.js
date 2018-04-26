var thePlayer = $f("player", "http://hidvl.nyu.edu/util/players/fp/standard/flowplayer.commercial.swf", {

    key: '#$623666ca2f667514416',

    clip: {
        provider: 'rtmp',
        scaling: 'fit',
        autoPlay: false,
        height: 100,
        url: 'mp4:00231_0098_520k_s.mp4' 
        //url: 'http://amsdev.library.nyu.edu/afi-ds/003710842_1032k_s.mp4'
    },

    canvas:  {
        // configure background properties
        backgroundColor: '#000000',

        // remove default canvas gradient
        backgroundGradient: 'none',
    },

    // streaming plugins are configured under the plugins node
    plugins: {
        controls: {
            backgroundColor: '#333333',
            timeColor: '#ffffff',
            buttonColor: '#a1a1a1',
            buttonOverColor: '#ffffff',
            durationColor: '#a1a1a1',
            tooltips: {
                buttons: 'true',
                fullscreen: 'Start video to enable Fullscreen'
            }
        },

        content: {
            url: 'http://dlib.nyu.edu/util/players/fp/standard/flowplayer.content.swf',
            opacity: 0
        },
        // here is our rtpm plugin configuration, configured for rtmp
        rtmp: {
            url: 'http://dlib.nyu.edu/util/players/fp/custom/flowplayer.rtmp.swf',

            // netConnectionUrl defines where the streams are found
            netConnectionUrl: 'rtmp://amsdev.library.nyu.edu/afi-ds'
        }

    },

    onError: function(errorCode, errorMessage) {
        // remove play button
        $f().getPlugin('play').css({ opacity: 0 });
        // show error message
        var contentPlugin = $f().getPlugin('content');
        contentPlugin.setHtml("<h1>There are problems loading this clip.</h1>");
        contentPlugin.css({ opacity: 1.0 });
    }

});

