import * as hapi from 'hapi'

const redirect = encodeURIComponent('http://localhost:3000/discord')
const baseURL = 'https://discordapp.com/api/'

export const rLogin = {
  path: '/login',
  method: 'GET',
  options: {
    auth: 'discord',
    handler: (req: hapi.Request, resp: hapi.ResponseToolkit) => {
      console.log('hi')
      return req.auth.credentials
    }
  }
}