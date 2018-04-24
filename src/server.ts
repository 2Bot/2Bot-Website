import * as hapi from 'hapi'
import { rLogin, rCallback, rCode } from './discord'
import { config } from './config'
import * as path from 'path'

const init = async () => {
  const server = new hapi.Server({
    port: 3001,
    host: 'localhost',
    routes: {
      files: {
        relativeTo: path.join(__dirname)
      }
    },
    debug: {
      request: ['error']
    }
  })
  
  await server.register([require('hapi-auth-cookie'), require('inert')])

  server.route([rLogin, rCallback, rCode])

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

  server.route({
    path: '/stuff',
    method: 'GET',
    handler: (req: hapi.Request, resp: hapi.ResponseToolkit) => {
      console.log('hi')
      return 'hi'
    }
  })

  await server.start()
  console.log(`Server running at: ${server.info.uri}`);
}

init()