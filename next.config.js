const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {

  if(phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      experimental: { esmExternals: true },
      build: {
        extend(config, {}) {
          config.node = {
            fs: 'empty'
          }
        }
      },
      env: {
        mongodb_username: 'andrew123',
        mongodb_password: 'andrew123',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'nextjs-blog-dev'
      }
    }
  }

  return {
    experimental: { esmExternals: true },
    build: {
      extend(config, {}) {
        config.node = {
          fs: 'empty'
        }
      }
    },
    env: {
      mongodb_username: 'andrew123',
      mongodb_password: 'andrew123',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'nextjs-blog'
    }
  }
}
