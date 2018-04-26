flowplayer("player", "http://dlibtest.home.nyu.edu/hidvl_site/util/fp/subtitle_test/flash/flowplayer/flowplayer.swf", {

    clip: {
        urlResolvers: 'bwcheck',
        provider: 'rtmp',
        scaling: 'uniform',
        autoPlay: false,
        bitrates: [
            { url: 'mp4:003305734_300k_st.mp4', width: 448, height: 336, bitrate: 300, isDefault: true },
            { url: 'mp4:003305734_800k_st.mp4', width: 640, height: 480, bitrate: 800 }
        ],
        captionsTrackFilter: "trackid=2"
    },

    // streaming plugins are configured under the plugins node
    plugins: {
        // bandwidth check plugin
        bwcheck: {
            url: 'http://dlibtest.home.nyu.edu/hidvl_site/util/fp/subtitle_test/flash/flowplayer/flowplayer.bwcheck.swf',
            serverType: 'fms',
            // we use dynamic switching
            dynamic: true,
            // use this connection for bandwidth detection
            netConnectionUrl: 'rtmp://ams.library.nyu.edu/hidvl_r'
        },
        
        // the captions plugin
        captions: {
            url: "http://dlibtest.home.nyu.edu/hidvl_site/util/fp/subtitle_test/flash/flowplayer/flowplayer.captions.swf",
 
            // pointer to a content plugin (see below)
            captionTarget: 'content',
        },
 
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
            url: 'http://dlibtest.home.nyu.edu/hidvl_site/util/fp/subtitle_test/flash/flowplayer/flowplayer.content.swf',
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

        // here is our rtpm plugin configuration, configured for rtmp
        rtmp: {
            url: 'http://dlibtest.home.nyu.edu/hidvl_site/util/fp/subtitle_test/flash/flowplayer/flowplayer.rtmp.swf',

            // netConnectionUrl defines where the streams are found
            netConnectionUrl: 'rtmp://ams.library.nyu.edu/hidvl_r'
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

window.onload = function(){

// get all links that are inside div#choice_st; the subtitles
var links = document.getElementById("choice_st").getElementsByTagName("a");

// loop those links and alter their click behavior
for (var i = 0; i < links.length; i++) {
    links[i].onclick = function() {
         //grabbing track id from link id
           trackid = this.id;
        // display the subtitle specified by user
         $f().getClip().update({ captionsTrackFilter: 'trackid=' +trackid});

    }
}
}

