const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pathJoin = (src) => {
    path.join(__dirname, src);
};

module.exports = {
    entry: pathJoin('./src/index.js'),
    target: 'web',
    output: {
        filename: '[name].js',
        path: `${__dirname}/dist`,
    },
    devServer: {},
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader', {
                        loader: 'postcss-loader',
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.vue/,
                use: 'vue-loader',
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
