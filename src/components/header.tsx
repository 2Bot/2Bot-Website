import * as React from 'react'
import Button from './button'

interface HeaderState {
  items: boolean[]

  names: {
    [index: number]: string
  }
}

export default class Header extends React.Component<{}, HeaderState> {
  constructor() {
    super({})

    this.state = {
      items: [true, false], 
      names: {
        0: 'Invite',
        1: 'Login'
      }
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
    let state: HeaderState = {items: [], names: this.state.names}

    for (var j = 0; j < this.state.items.length; j++) {
      if (j === i) {
        state.items.push(true)
      } else {
        state.items.push(false)
      }
    }
    this.setState(state)
  }

  refresh() {
    return(
      <ul>
        {this.state.items.map((value: boolean, i: number) => {
          return <li key={i.toString()}><Button id={i} active={value} onChange={this.onChange} name={this.state.names[i]}/></li> 
        })}
      </ul>
    )
  }
}