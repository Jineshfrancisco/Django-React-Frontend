const mix = require('laravel-mix');

mix
	.react('resources/js/app.js', 'static/js/main.js')
	.sass('resources/sass/app.scss', 'static/css/style.css')
	.options({ processCssUrls: false });
