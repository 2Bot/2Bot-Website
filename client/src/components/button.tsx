import * as React from 'react'

interface ButtonState {
  disabled: boolean
}

interface ButtonProps {
  id?: number
  name: string 
  href?: string
  active: boolean
  external: boolean
  onClick?(i: number): void
}

export default class Button extends React.Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props)

    this.state = {disabled: false}

    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    if (!this.props.external && this.props.onClick !== undefined) {
      this.props.onClick(this.props.id!)
    }
  }

  target(): string {
    if (!this.props.href) {
      return ''
    }
    if (this.props.href.charAt(0) !== '/' && this.props.href.charAt(0) !== '#') {
      return '_blank'
    }
    return ''
  }

  render() {
    return(
      <a href={this.props.href} target={this.target()}>
        <button onClick={this.onClick} data-set={this.props.active} disabled={this.state.disabled}>
          <cite>{this.props.name}</cite>
        </button>
      </a>
    )
  }
}