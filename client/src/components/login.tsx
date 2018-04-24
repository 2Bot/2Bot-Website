import * as React from 'react'
import Button from './button'

export default class Login extends React.Component {
  constructor() {
    super({})
    this.onClick = this.onClick.bind(this)
  }

  render() {
    return(
      <Button
        name={'Login'}
        active={false}
        external={false}
        onClick={this.onClick}
      />
    )
  }

  async onClick() {
    let resp: Response = await fetch('/api/login', {method: 'GET'})
    window.open(resp.headers.get('location')!, '', 'width=600,height=600')
  }
}