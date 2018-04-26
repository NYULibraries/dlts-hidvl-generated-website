// install flowplayer into container
$f("webtv", "http://releases.flowplayer.org/swf/flowplayer-3.2.18.swf", {
    clip: {
        url: "manifest.f4m",
        //url: "http://amsdev.library.nyu.edu/hds-vod/afi-ds/231_0098_manifest.f4m",
        urlResolvers: ["f4m", "bwcheck"],
        provider: "httpstreaming",
 
        // base URL for manifest and media files
        //baseUrl: "http://itv08.digizuite.dk/tv2b/ngrp:ch1_all",
 
        // URL of M3U8 playlist for iOS
        ipadUrl: "http://amsdev.library.nyu.edu/hls-vod/afi-ds/231_0098_manifest.m3u8",
 
        scaling: "fit",
        live: true
    },
    plugins: {
        f4m: {
            url: "flowplayer.f4m-3.2.10.swf"
        },
        httpstreaming: {
            url: "flowplayer.httpstreaming-3.2.11.swf"
        },
 
        bwcheck: {
            url: "flowplayer.bwcheck_httpstreaming-3.2.13.swf",
            netConnectionUrl: "http://releases.flowplayer.org/swf/flowplayer-3.2.18.swf",
            dynamic: true,
 
            // bandwidth diagnostics - omitted in production
            onStreamSwitchBegin: function (newItem, currentItem) {
                this.getPlayer().getPlugin("content")
                    .setHtml("Will switch from " + currentItem.bitrate +
                             "kbps to " + newItem.bitrate + "kbps");
            },
            onStreamSwitch: function (newItem) {
                this.getPlayer().getPlugin("content")
                    .setHtml("Switched to " + newItem.bitrate + "kbps");
            }
        },
 
        // plugin to display bandwidth diagnostics, usually omitted in production
        content: {
            url: "flowplayer.content-3.2.9.swf",
            backgroundColor: "#000000",
            backgroundGradient: "none",
            height: 26,
            width: 275,
            bottom: 2
        },
        // a bit of controlbar styling
        controls: {
            scrubber: false,
            height: 30,
            borderRadius: 30,
            width: 290,
            bottom: 30
        }
    }
}).ipad(); // sets up the player on iOS


