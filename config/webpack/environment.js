const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

environment.plugins.append(
  'CommonsChunkVendor',
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: module => {
      return module.context && module.context.includes('node_modules')
    },
    chunks: ['application']
  })
)

environment.plugins.append(
  'CommonsChunkManifest',
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest',
    minChunks: Infinity,
    chunks: ['vendor']
  })
)

module.exports = environment
