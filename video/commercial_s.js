flowplayer("player", "http://dlib.nyu.edu/util/players/fp/standard/flowplayer.commercial.swf", {
	key: '#$623666ca2f667514416',
    clip: { 
		urlResolvers: 'bwcheck',
        provider: 'rtmp',
		autoPlay: false,
		connectionArgs: [ readCookie('iPlanetDirectoryPro') ],
		scaling: 'uniform',
 		bitrates: [
			{ url: "mp4:HI2003_001_300k_s.mp4", width: 448, height: 336, bitrate: 300, isDefault: true }, 
			{ url: "mp4:HI2003_001_800k_s.mp4", width: 640, height: 480, bitrate: 800 }
		]
    },
	plugins: {
        bwcheck: {
			url: 'http://dlib.nyu.edu/util/players/fp/standard/flowplayer.bwcheck.swf',
			serverType: 'fms', 
			netConnectionUrl: 'rtmp://fmsdev.library.nyu.edu/hidvl_s',
			dynamic: true
        },
		controls: {
			backgroundColor: '#333333',
			timeColor: '#ffffff',
			buttonColor: '#000000',
			tooltips: {
				buttons: 'true',
				fullscreen: 'Fullscreen'
			},
		},	
		content: {
			url: 'http://dlib.nyu.edu/util/players/fp/standard/flowplayer.content.swf',
			opacity: 0
		},
		rtmp: {
			url: 'http://dlib.nyu.edu/util/players/fp/standard/flowplayer.rtmp.swf',
			netConnectionUrl: 'rtmp://fmsdev.library.nyu.edu/hidvl_s'
		}
	},
	onError: function(errorCode, errorMessage) {
		$f().stop();
		// // change background image
		// $f().getPlugin('canvas').css({ backgroundImage: 'eye.png' });
		// remove play button
		$f().getPlugin('play').css({ opacity: 0 });
		// show error message
		var contentPlugin = $f().getPlugin('content');
		contentPlugin.setHtml("<h1>There are problems loading this clip please make sure you are logged in.<br />" + errorMessage + "</h1>"); 
		contentPlugin.css({ opacity: 1.0 });
	}
});