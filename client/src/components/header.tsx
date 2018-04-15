import * as React from 'react'
import Button from './button'

interface HeaderState {
  items: boolean[]
}

const names = [
  'Invite', 
  'Login', 
  'Discord Server',
]

const hrefs = [
  'https://discordapp.com/oauth2/authorize?client_id=301819949683572738&scope=bot&permissions=3533824', 
  '#login', 
  'https://discord.gg/9T34Y6u'
]

export default class Header extends React.Component<{}, HeaderState> {
  constructor() {
    super({})

    this.state = {
      items: Array(names.length).fill(false), 
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
    let state: HeaderState = {items: []}

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
      <>
        <ul>
          <li><Button active={false} name="test" href="/" external={false}/></li>
        </ul>
        <ul>
          {this.state.items.map((value: boolean, i: number) => {
            let external = false
            if (hrefs[i].startsWith('http')) {
              external = true
            }
            return <li key={i.toString()}><Button id={i} active={value} onChange={this.onChange} name={names[i]} href={hrefs[i]} external={external}/></li> 
          })}
        </ul>
      </>
    )
  }
}