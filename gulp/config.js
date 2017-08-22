'use strict';

const config = {

	browserPort: 3000,
	UIPort: 3001,

	sourceDir: './app/',
	buildDir: './build/',

	scripts: {
		src: './app/src/**/*.js',
		dest: './build/js/'
	},

	images: {
		src: './app/images/**/*.{jpeg,jpg,png,gif}',
		dest: './build/images/'
	},

	styles: {
		//src: ['./app/src/**/*.scss', '../node_modules/style-guide/scss/**/*.scss'],
		src: ['./app/src/**/*.scss'],
		dest: './build/css/'
	},

	audio: {
		src: ['./app/audio/**/*.mp3'],
		dest: './build/audio/'
	},

	testFiles: './__tests__/**/*.{js,jsx}',

	assetExtensions: [
		'js',
		'css',
		'png',
		'jpe?g',
		'gif',
		'svg',
		'eot',
		'otf',
		'ttc',
		'ttf',
		'woff2?',
		'mp3'
	]

};

export default config;