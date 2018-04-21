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

  onClick() {
    fetch('/api/login', {method: 'GET', redirect: 'follow'})
      .then((resp: Response) => {
        alert(resp.json().then(function(value: any) {
          return value
        }))
      })
  }
}