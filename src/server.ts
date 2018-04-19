import * as hapi from 'hapi'
import { rLogin } from './discord'
import { config } from './config'
import * as path from 'path'

const init = async () => {
  const server = new hapi.Server({
    port: 3001,
    host: 'localhost',
    routes: {
      files: {
        relativeTo: path.join(__dirname, 'client')
      }
    }
  })
  
  await server.register([require('bell'), 
                        require('hapi-auth-cookie'), 
                        require('inert')])

  server.auth.strategy('session', 'cookie', {
    password: 'bababna_what_is_this???oogabooga',
    cookie: 'auth',
    isSecure: false,
  })

  server.auth.strategy('discord', 'bell', {
    password: 'bababna_what_is_this???oogabooga',
    provider: 'discord',
    clientId: config.client_id,
    clientSecret: config.client_secret, 
  })

  server.route([rLogin])

  server.route({
    path: '/{param*}',
    method: 'GET',
    handler: {
      directory: {
        path: `./`,
        listing: true,
      }
    }
  })

  await server.start()
  console.log(`Server running at: ${server.info.uri}`);
}

init()