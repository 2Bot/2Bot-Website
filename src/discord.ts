import * as hapi from 'hapi'
import { config } from './config'
import * as btoa from 'btoa'
import fetch, { Response } from 'node-fetch'
import * as path from 'path'

const redirect = encodeURIComponent('http://localhost:3001/api/login/callback')
const baseURL = 'https://discordapp.com/api/'
const creds = btoa(`${config.client_id}:${config.client_secret}`)

interface TokenResponse {
  access_token: string,
  token_type: string,
  expires_in: number,
  refresh_token: string,
  scope: string
}

interface GuildResponse {
  code: number,
  message: string
}

interface Guild {
  owner: boolean,
  permissions: number,
  icon: string,
  id: string,
  name: string
}

type Guilds = Guild[] | GuildResponse | null

const isGuildArray = (g: Guilds): g is Guild[] => {
  return (<Guild[]>g).length !== undefined && ((<Guild[]>g).length === 0 || (<Guild[]>g)[0].id !== undefined)
}

const isInvalidResponse = (g: Guilds): g is GuildResponse => {
  return (<GuildResponse>g).code !== undefined
}

export const rLogin = {
  path: '/api/login',
  method: 'GET',
  handler: async (req: hapi.Request, resp: hapi.ResponseToolkit) => {
    return resp.response().location(`${baseURL}oauth2/authorize?client_id=${config.client_id}&redirect_uri=${redirect}&response_type=code&scope=guilds%20identify`)
  }
}

export const rCallback = {
  path: '/api/login/callback',
  method: 'GET',
  handler: {
    file: 'callback.html'
  }
}

export const rCode = {
  path: '/api/login/code/{code}',
  method: 'GET',
  handler: async (req: hapi.Request, resp: hapi.ResponseToolkit) => {
    const queryParams = <hapi.RequestQuery>req.query
    let res = await fetch(`${baseURL}oauth2/token?grant_type=authorization_code&code=${req.params.code}&redirect_uri=${redirect}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${creds}`
        }
      }
    )

    const json: TokenResponse  = await res.json()
    
    res = await fetch(`${baseURL}users/@me/guilds`,
      {
        method: 'GET',
        headers: {
          Authorization: `${json.token_type} ${json.access_token}`
        } 
      }
    )

    const js: GuildResponse = await res.json()
    if (isGuildArray(js)) {
      return JSON.stringify(js)
    } else if (isInvalidResponse(js)) {
      return '2'
    }
    return 'guilds n message unset'
  }
}
