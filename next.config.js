module.exports = {
  // Prefer loding of ES Modules over Common JS
  experimental: { esmExternals: true },
  build: {
    extend(config, {}) {
      config.node = {
        fs: 'empty'
      }
    }
  }

}
