import * as hapi from 'hapi'
import { rCallback, rLogin } from './discord'

const server = new hapi.Server({
  port: 3001,
  host: 'localhost'
})

server.route([rCallback, rLogin])

server.route({
  path: '/',
  method: 'GET',
  handler: (req: hapi.Request, resp: any) => {
    return 'ok'
  }
})

const init = async () => {
  await server.start()
  console.log(`Server running at: ${server.info.uri}`);
}

init()