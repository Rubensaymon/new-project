// Imports
const mix = require('laravel-mix')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
require('@webrgp/laravel-mix-twig')
require('laravel-mix-criticalcss')

mix.disableSuccessNotifications()
mix.setPublicPath('public')
mix.version()
mix.extract(['lazysizes']);
mix.options({
  legacyNodePolyfills: true
});

mix.twig("src/templates", "public")

mix.ts("src/js/app.ts", "public/js")
mix.ts("src/js/utils/lazysizes-wrapper.ts", "public/js")

mix.postCss("src/css/app.css", "public/css")

mix.copyDirectory('src/img/**', 'public/img')

mix.criticalCss({
  enabled: false,
  paths: {
    base: 'https://localhost:3030',
    templates: './public/_criticalcss/',
    suffix: '_critical.min'
  },
  urls: [
    { url: '/', template: 'index' },
  ],
  options: {
    minify: true,
  },
});


if (!mix.inProduction()) {
  mix.sourceMaps();
  mix.webpackConfig(() => {
    return {
      plugins: [
        new BrowserSyncPlugin({
          host: 'localhost',
          port: 3030,
          watch: true,
          server: {
            baseDir: ['public'],
            serveStaticOptions: {
              extensions: ['html']
            }
          }
        })
      ]
    };
  });
}
