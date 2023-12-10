import {resolve} from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const mode = 'development';
const entry = {
    homepage: './src/homepage.js'
};
const plugins = [
    new HtmlWebpackPlugin({
        title: 'Homepage',
    }),
];
const devtool = 'inline-source-map';
const devServer = {
    static: './dist',
};
const output = {
    filename: '[name].bundle.js',
    path: resolve('./dist'),
    clean: true,
};
const module = {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
    ],
};
const optimization = {
    optimization: 'single',
};

export default {mode, entry, plugins, devtool, devServer, output, module};