const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
let mix = require('laravel-mix');

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

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css')
   .js('resources/assets/js/admin.js', 'public/js');

mix.webpackConfig(webpack => ({
      plugins: [
        new CaseSensitivePathsPlugin(),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /fr/)
      ]
  })
)


