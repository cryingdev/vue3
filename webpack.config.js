// import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { ViewLoaderPlugin, VueLoaderPlugin } = require('vue-loader')

// export
module.exports = {
    resolve: {
        extensions: ['.js', '.vue']
    },
    // 파일을 읽어들이기 시작하는 진입점 설정
    entry: './src/main.js',
    // 결과물(번들)을 반환하는 설정
    output: {
        // path: path.resolve(__dirname, 'public'),
        // filename: 'main.js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.s?css$/,
                use: [
                    'vue-style-loader',
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },
    // 번들링 후  결과물의 처 방식 등 다양한 플러그인들을 설정  
    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                {from: 'static'}
            ]
        }),
        new VueLoaderPlugin()
    ],

    devServer: {
        host: 'localhost',
        port: 8080,
        hot: true
    }
}