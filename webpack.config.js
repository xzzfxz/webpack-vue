const CompressionPlugin = require('compression-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pathJoin = (src) => {
    path.join(__dirname, src);
};

const isDev = process.env.NODE_ENV === 'development';
const plugins = [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
        template: './public/index.html',
    }),
];
if (!isDev) {
    // 生产
    plugins.push(new CleanWebpackPlugin());
    plugins.push(new CompressionPlugin({
        test: /\.(js|ts|css)$/i,
        threshold: 1024 * 20,
    }));
}

module.exports = {
    entry: pathJoin('./src/index.js'),
    target: 'web',
    output: {
        filename: '[name].js',
        path: `${__dirname}/dist`,
    },
    devServer: {
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            '@': path.resolve(__dirname, '/src'),
        },
    },
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
    plugins,
};
