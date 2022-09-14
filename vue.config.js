const CopyWebpackPlugin = require( 'copy-webpack-plugin' )

module.exports = {
    pages: {
        index: {
            entry: 'src/index.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    devServer: {
        'port': 3000
      },
    chainWebpack: config => {
        config.module.rule( 'vue' ).use( 'vue-loader' ).tap( args => {
            args.compilerOptions.whitespace = 'preserve'
        } );
    },
    productionSourceMap: false,
    assetsDir: './assets/',
    configureWebpack: {
        plugins: [
            new CopyWebpackPlugin( {
                patterns: [
                {
                    from: 'src/assets/fonts',
                    to: 'assets/fonts',
                },
                {
                    from: 'src/assets/icons',
                    to: 'assets/icons',
                },
                {
                    from: 'src/assets/img',
                    to: 'assets/img',
                }
                ]
            }
            )
        ]
    }
}
