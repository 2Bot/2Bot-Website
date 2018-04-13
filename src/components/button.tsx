import * as React from 'react'

interface ButtonState {
  disabled: boolean
}

interface ButtonProps {
  id: number
  name?: string 
  href?: string
  active: boolean
  onChange(i: number): void
}

export default class Button extends React.Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props)
    this.state = {disabled: false}

    this.onChange = this.onChange.bind(this)
  }

  onChange() {
    this.props.onChange(this.props.id)
  }

  render() {
    return(
      <a href={this.props.href}>
        <button onClick={this.onChange} data-set={this.props.active} disabled={this.state.disabled}>
          <cite>{this.props.name}</cite>
        </button>
      </a>
    )
  }
}