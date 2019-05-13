const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .combine([
        'resources/js/jquery-3.3.1.js',
        'resources/js/parsley.min.js',
        'resources/js/scripts.js'
    ], 'public/js/app.js')
    .less('resources/less/app.less', 'public/css')
    .less('resources/less/font-faces.less', 'public/css')
    .less('resources/less/media.less', 'public/css')
    .less('resources/less/reset.less', 'public/css')
    .less('resources/less/normalize.less', 'public/css')
    .version(['public/css/app.css'])
    .version(['public/css/media.css'])
    .version(['public/js/app.js']);
