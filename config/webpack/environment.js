const { environment } = require('@rails/webpacker')

const WebpackAssetsManifest = require('webpack-assets-manifest');
// Enable the default config
environment.splitChunks()

module.exports = environment
