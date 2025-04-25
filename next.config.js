module.exports = {
    webpack: function(config) {
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      })
      return config
    },
    images: {
      unoptimized: true
    },
    output: 'export',
    trailingSlash: true,
    unstable_runtimeJS: false,
    // Exclude page patterns from static generation to avoid errors
    exportPathMap: async function() {
      return {
        '/': { page: '/' },
        '/works': { page: '/works' },
        '/concerts': { page: '/concerts' },
        '/about': { page: '/about' }
      }
    }
  }