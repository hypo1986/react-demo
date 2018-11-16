const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtendedDefinePlugin = require('extended-define-webpack-plugin')
const HappyPack = require('happypack')
const webpack = require('webpack')
let os = require('os')
let px2rem = require('postcss-plugin-px2rem')

var happyThreadPool = HappyPack.ThreadPool({ size: 4 })

const { argv } = process
let env = 'development'
argv.forEach(v => {
  if (v === 'production') {
    env = 'production'
  }
})
/**
 * 公共插件
 */
const plugins = [
  new HtmlWebpackPlugin({
    template: `${__dirname}/src/index.html`,
    inject: 'body',
    filename: 'index.html',
    hash: true
  }),
  new MiniCssExtractPlugin({
    filename: '[name]-[hash].css',
    chunkFilename: '[id][hash].css'
  }),
  new HappyPack({
    id: 'babel',
    loaders: ['cache-loader', 'babel-loader?cacheDirectory'],
    threadPool: happyThreadPool,
    verboseWhenProfiling: true
  }),
  new webpack.LoaderOptionsPlugin({ options: {
    postcss: [px2rem({rootValue: 75})]
  }
  })
]
const configDev = {
  plugins: plugins.concat(
    new ExtendedDefinePlugin({
      __LOCAL__: true
    })
  )
}
const configPro = {
  plugins: plugins.concat(
    new UglifyJsPlugin({
      sourceMap: false,
      parallel: 4,
      cache: true,
      uglifyOptions: {
        output: {
          comments: false,
          beautify: false
        }
      },
      exclude: /(node_modules|bower_components)/
    }),
    new ExtendedDefinePlugin({
      __LOCAL__: false
    })
  )
}
const config = env === 'development' ? configDev : configPro

function getIp () {
  var interfaces = os.networkInterfaces()
  // var addresses = [];
  for (var k in interfaces) {
    for (var k2 in interfaces[k]) {
      var address = interfaces[k][k2]
      if (address.family === 'IPv4' && !address.internal) {
        return address.address
      }
    }
  }
  return '127.0.0.1'
}
module.exports = {
  mode: env,
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    compress: true,
    port: 9000,
    historyApiFallback: true,
    disableHostCheck: true,
    host: getIp(),
    proxy: {
      '/api/**': {
        target: 'http://beta.xxxxx.com',
        pathRewrite: {'^/api': ''},
        secure: false, // 接受 运行在 https 上的服务
        changeOrigin: true
      }
    }
  },
  devtool: env === 'development' ? 'cheap-eval-source-map' : 'source-map',
  performance: {
    maxEntrypointSize: 250000,
    maxAssetSize: 250000,
    hints: false
  },

  resolve: {
    alias: {
      pages: path.join(__dirname, './src/pages'),
      component: path.join(__dirname, 'src/component'),
      router: path.join(__dirname, './src/router'),
      actions: path.join(__dirname, './src/redux/actions'),
      reducers: path.join(__dirname, './src/redux/reducers')
    }
  },
  module: {
    noParse: /node_modules\/(moment\.js)/,
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              minimize: env === 'development',
              sourceMap: env === 'development'
            }
          }
        ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src'],
            minimize: env === 'development'
          }
        }
      },
      {
        test: /\.(png|jpg|gif|jpeg|ttf)$/,
        exclude: /(node_modules|bower_components)/,
        include: [path.resolve(__dirname, 'src')],
        use: [
          {
            loader: 'url-loader?limit=8024',
            options: {
              name: '[path][name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.styl/,
        exclude: /(node_modules|bower_components)/,
        include: [path.resolve(__dirname, 'src')],
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'stylus-loader' }
        ]
      },
      {
        test: /\.less/,
        use: [
          { loader: 'style-loader' },
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader'
          },
          { loader: 'less-loader' }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'],
            cacheDirectory: true
          }
        }]
      }
    ]
  },
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[id].[hash].js',
    chunkFilename: '[id][hash].js',
    publicPath: '/'
  },
  plugins: config.plugins
}
