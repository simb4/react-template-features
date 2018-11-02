const ENV = {
  dev: {
    SERVER_URL: 'https://dev.example.kz/api/',
    SITE_URL: 'https://dev.example.kz/',
  },
  prod: {
    SERVER_URL: 'https://example.kz/api',
    SITE_URL: 'https://example.kz/',
  }
}

function getEnvVars(env = '') {
  if (env === null || env === undefined || env === '') return ENV.dev
  if (env.indexOf('dev') !== -1) return ENV.dev
  if (env.indexOf('prod') !== -1) return ENV.prod
  return ENV.dev;
}


export default getEnvVars(process.env.REACT_APP_ENV)
