const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
   },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
	{
		test: /\.js/,
		use:['source-map-loader'],
	},
        ],
    },
	 plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        })
    ],
};
