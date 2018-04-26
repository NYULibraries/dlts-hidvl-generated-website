flowplayer('player', '../util/flowplayer.commercial.swf', {
	key: '#$623666ca2f667514416',
	clip: { 
		urlResolvers: 'bwcheck',
		provider: 'rtmp',
		scaling: 'uniform',
		autoPlay: false,
		bitrates: [
			{ url: "mp4:HI2003_001_300k_s.mp4", width: 448, height: 336, bitrate: 300, isDefault: true },
			{ url: "mp4:HI2003_001_800k_s.mp4", width: 640, height: 480, bitrate: 800 }
		]
	},
	plugins: {
		bwcheck: {  
			url: '../util/flowplayer.bwcheck-3.2.1.swf',
			serverType: 'fms',
			netConnectionUrl: 'rtmp://fmsdev.library.nyu.edu/hidvl_r',
			dynamic: true
			},
		controls: {
			backgroundColor: '#333333',
			timeColor: '#ffffff',
			buttonColor: '#a1a1a1',
			buttonOverColor: '#ffffff',
			durationColor: '#a1a1a1',
			tooltips: {
				buttons: 'false',
				fullscreen: 'Start video to enable Fullscreen'
				},
			},
		content: {
			url: '../util/flowplayer.content-3.2.0.swf',
			opacity: 0
			},
		rtmp: {
			url: '../util/flowplayer.rtmp-3.2.1.swf',
			netConnectionUrl: 'rtmp://fmsdev.library.nyu.edu/hidvl_r'
		}
	}
});