var path = require('path');
var webpack = require('webpack');
var envFile = require('node-env-file');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

try {
  envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'));
}catch (e) {
}

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  resolve: {
    extensions: ['','.js','.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        CLIENT_ID: JSON.stringify(process.env.CLIENT_ID),
        OTHER_VALUE: JSON.stringify(process.env.OTHER_VALUE),
      }
    })
  ],
  devtool: process.env.NODE_ENV == 'production' ? undefined : 'cheap-module-eval-source-maps'
}
