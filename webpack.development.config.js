const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

const js = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.scss' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 8080
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'BitEncoder',
    filename: path.resolve(__dirname, 'dist/index.html'),
    template: path.resolve(__dirname, 'public/index.html')
  })]
}

const css = {
  entry: './src/styles/form.scss',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              // sassOptions: {
              //   fiber: false,
              // },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [ '.scss' ],
  },
  output: {
    filename: 'bit-encoder-style.css',
    path: path.resolve(__dirname, 'dist'),
  }
}

module.exports = css