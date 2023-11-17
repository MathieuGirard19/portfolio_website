const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point of your React application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory for bundled files
    filename: 'bundle.js', // Name of the output bundle
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    '@babel/plugin-proposal-private-property-in-object',
    new CleanWebpackPlugin(), // Cleans the 'dist' directory before each build
    new HtmlWebpackPlugin({
      template: './public/index.html', // HTML template file
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: './dist', // Serve content from the 'dist' directory
    port: 3000, // Port for development server
  },
};
