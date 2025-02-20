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
    unstable_runtimeJS: false
  }