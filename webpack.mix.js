const mix = require('laravel-mix');
const webpack = require('webpack');
require('mix-tailwindcss');

mix.webpackConfig({
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                APP_ENV: JSON.stringify(process.env.APP_ENV),
            },
        })
    ],
});

// Mix settings
mix.disableNotifications();

if (mix.inProduction()) {
    mix.version();
}

mix.options({
    legacyNodePolyfills: false
})

// Web
mix.ts('./assets/typescript/iskr_maintenance.js', 'js/iskr_maintenance.js')
    .sourceMaps(false, 'source-map')
    .setPublicPath('assets/');

mix.sass('./assets/scss/iskr_maintenance.scss', 'css/iskr_maintenance.css', { processUrls: false })
    .setPublicPath('assets/')
    .tailwind();

//mix.copy('node_modules/@gov-design-system-ce/components/dist', 'assets/js/components');
//mix.copyDirectory('./node_modules/@gov-design-system-ce/fonts/lib/*', 'assets/fonts');
