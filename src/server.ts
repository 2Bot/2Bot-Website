import * as hapi from 'hapi'

const server = new hapi.Server({
  port: 3001,
  host: 'localhost'
})

server.route({
  path: '/',
  method: 'GET',
  handler: () => {
    return 'test'
  }
})

const init = async () => {
  await server.start()
  console.log(`Server running at: ${server.info.uri}`);
}

init()