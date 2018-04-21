import * as hapi from 'hapi'

const redirect = encodeURIComponent('http://localhost:3000/api/login')
const baseURL = 'https://discordapp.com/api/'

export const rLogin = {
  path: '/api/login',
  method: 'GET',
  options: {
    auth: 'discord',
    handler: (req: hapi.Request, resp: hapi.ResponseToolkit) => {
      if (req.auth.isAuthenticated) {
        return '<pre>' + JSON.stringify(req.auth.credentials, null, 4) + '</pre>'
      }
      return 'could not auth with github'
    }
  }
}