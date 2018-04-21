import * as React from 'react'
import Button from './button'
import Invite from './invite'
import Server from './server'
import Login from './login'

interface HeaderState {
  items?: boolean[]
}

interface Resp {
  url: string
}
export default class Header extends React.Component<{}, HeaderState> {
  constructor() {
    super({})

    this.state = {
    }

    this.refresh = this.refresh.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  render() {
    return(
      <header>
        {this.refresh()}
      </header>
    )
  }

  onChange(i: number): void {
    let state: HeaderState = {}

    state[i] = true
    
    this.setState(state)
  }

  refresh() {
    return(
      <>
        <ul>
          <li><Button active={false} name="test" href="/" external={false}/></li>
        </ul>
        <ul> 
          <li><Login/></li>
          <li><Invite/></li>
          <li><Server/></li>
        </ul>
      </>
    )
  }
}