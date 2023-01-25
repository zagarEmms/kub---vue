const path = require('path');

const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  // The entry point file described above
  entry: './src/main.js',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }, 
      {
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg)$/,
        use: [
            'file-loader',
        ],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  // Optional and for development only. This provides the ability to
  // map the built code back to the original source format when debugging.
  devtool: 'eval-source-map',
  // The location of the build folder described above in main.js
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};