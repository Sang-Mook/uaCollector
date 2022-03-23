const env = process.env.NODE_ENV || 'development'

const devUrl = 'http://localhost:4000/'
const stgUrl = 'http://localhost:4000/'
const prdUrl = 'http://localhost:4000/'

const configs = {
  development: {
    baseUrl: devUrl,
    environment: 'development'
  },
  staging: {
    baseUrl: stgUrl,
    environment: 'staging'
  },
  production: {
    baseUrl: prdUrl,
    environment: 'production'
  }
}[env]

export default configs
