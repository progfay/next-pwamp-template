const withManifest = require('next-manifest')
const NextWorkboxWebpackPlugin = require('next-workbox-webpack-plugin')

module.exports = withManifest({
  webpack: (config, {isServer, dev, buildId, config: {distDir}}) => {
    if (!isServer && !dev) {
      config.plugins.push(new NextWorkboxWebpackPlugin({
        distDir,
        buildId
      }))
    }
    config.node = { fs: 'empty' }
    return config
  },
  exportPathMap: () => {
    return {
      '/': { page: '/' }
    }
  },
  manifest: {
    'name': 'next-pwa-template',
    'short_name': 'next-pwa-template',
    'description': 'template of PWA with next.js',
    'start_url': '/',
    'display': 'standalone',
    'orientation': 'any',
    'background_color': '#FFF',
    'theme_color': '#FFF',
    'icon': {
      'src': './icon/icon.png',
      'cache': true
    }
  }
})
