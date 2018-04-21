import * as React from 'react'
import Button from './button'

export default class Server extends React.Component {
  render() {
    return(
      <Button 
        name={'Discord Server'} 
        href={'https://discord.gg/9T34Y6u'}
        active={false}
        external={true} 
      />
    )
  }
}
