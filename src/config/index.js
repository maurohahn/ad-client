require('dotenv').config({
    path: process.env.NODE_ENV.trim() === 'test' ? '.env.test' : '.env'
  })

module.exports = {

    port: process.env.SERVER_PORT || 3000,
    adCfg: {
        url: process.env.URL,
        timeout: process.env.TIMEOUT,
        connectTimeout: process.env.CONNECT_TIMEOUT,
        domain: process.env.DOMAIN
    }

}
