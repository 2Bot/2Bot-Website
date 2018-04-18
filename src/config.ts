import * as fs from 'fs'

interface Config {
  client_id: string
  client_secret: string
}

export let config: Config

try {
  config = JSON.parse(fs.readFileSync(__dirname+'/conf.json', 'utf-8'))
} catch(e) {
  console.log('error opening config', e)
  process.exit(1)
}