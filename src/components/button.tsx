import * as React from 'react'

interface State {
  active: boolean
}

interface Props {
  name: string
  href: string
}

export default class Button extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {active: false}

    this.activate = this.activate.bind(this)
  }

  activate() {
    this.setState(prevState => (
      {active: !prevState.active}
    ))
  }

  render() {
    return(
      <button  onClick={this.activate} data-set={this.state.active}>{this.props.name}</button>
    )
  }

}