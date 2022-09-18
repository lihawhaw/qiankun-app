const path = require('path')
// const webpack = require('webpack')
const { ESBuildMinifyPlugin } = require('esbuild-loader')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const TerserPlugin = require('terser-webpack-plugin')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
// const smp = new SpeedMeasurePlugin()
// smp.wrap()
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const port = 9001
const isProd = process.env.NODE_ENV === 'production'
const startAnalyzer = process.env.ANALYZER === 'true'
const devtool = isProd ? false : 'eval-cheap-module-source-map'
const minimizer = []
const basePlugin = []
const baseRules = []
const publicPath = isProd ? 'https://qiankun.cdn.lihaha.cn/' : '/'
let chunkFilename = 'main/static/[name].[chunkhash].chunk.js'
let filename = 'main/static/[name].[contenthash].bundle.js'

if (startAnalyzer) {
  basePlugin.push(new BundleAnalyzerPlugin())
}

if (isProd) {
  minimizer.push(
    new ESBuildMinifyPlugin({
      target: 'es2015',
      css: true,
      minifyWhitespace: true,
      minifyIdentifiers: true,
      minifySyntax: true,
    }),
    // new TerserPlugin({ parallel: true, minify: TerserPlugin.esbuildMinify }),
    // new CssMinimizerPlugin({
    //   minimizerOptions: {
    //     preset: [
    //       "default",
    //       {
    //         discardComments: { removeAll: true },
    //       },
    //     ],
    //   },
    // }),
  )
  baseRules.push({
    test: /\.tsx?$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'esbuild-loader',
      options: {
        loader: 'tsx',
        target: 'es2015',
        // tsconfigRaw: require('./tsconfig.json'),
      },
    },
  }, {
    test: /\.less$/i,
    use: [
      MiniCssExtractPlugin.loader,
      "css-loader",
      "less-loader",
    ],
  })
  basePlugin.push(new MiniCssExtractPlugin({
    filename: "main/static/[name].[contenthash].css",
    chunkFilename: "main/static/[id].[contenthash].css",
    ignoreOrder: false,
  }))
} else {
  baseRules.push({
    test: /\.tsx?$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'swc-loader',
      options: {
        sync: true,
        jsc: {
          parser: {
            syntax: 'typescript',
          },
        },
      },
    },
  }, {
      test: /\.less$/i,
      use: [
        "style-loader",
        "css-loader",
        "less-loader",
      ],
  })

  filename = '[name].js'
  chunkFilename = '[name].chunk.js'
}

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: process.env.NODE_ENV,
  devtool,
  entry: './src/index.tsx',
  output: {
    publicPath,
    path: path.resolve(__dirname, 'dist'),
    filename,
    chunkFilename,
    clean: true,
    // asyncChunks: true,
  },
  cache: {
    type: 'filesystem',
    allowCollectingMemory: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    plugins: [new TsconfigPathsPlugin()],
  },
  plugins: [
    ...basePlugin,
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
  ],
  module: {
    rules: [...baseRules],
  },
  performance: {
    hints: false,
    assetFilter: function(assetFilename) {
      return assetFilename.endsWith('.js');
    }
  },
  optimization: {
    runtimeChunk: 'single',
    moduleIds: 'deterministic',
    minimize: true,
    minimizer,
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        reactVendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'react',
          priority: -1,
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          priority: -99,
        },
      },
    },
  },
  devServer: {
    port,
    historyApiFallback: true,
    // http2: true,
  },
}
