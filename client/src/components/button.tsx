import * as React from 'react'

interface ButtonState {
  disabled: boolean
}

interface ButtonProps {
  id?: number
  name: string 
  href: string
  active: boolean
  external: boolean
  onChange?(i: number): void
}

export default class Button extends React.Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props)

    this.state = {disabled: false}

    this.onChange = this.onChange.bind(this)
  }

  onChange() {
    if (!this.props.external && this.props.onChange !== undefined) {
      this.props.onChange(this.props.id!)
    }
  }

  target(): string {
    if (this.props.href.charAt(0) !== '/' && this.props.href.charAt(0) !== '#') {
      return '_blank'
    }
    return ''
  }

  render() {
    return(
      <a href={this.props.href} target={this.target()}>
        <button onClick={this.onChange} data-set={this.props.active} disabled={this.state.disabled}>
          <cite>{this.props.name}</cite>
        </button>
      </a>
    )
  }
}