import * as React from 'react'
import Button from './button'

export default class Invite extends React.Component {
  render() {
    return(
      <Button 
        name={'Invite'} 
        href={'https://discordapp.com/oauth2/authorize?client_id=301819949683572738&scope=bot&permissions=3533824'}
        active={false}
        external={true} 
      />
    )
  }
}