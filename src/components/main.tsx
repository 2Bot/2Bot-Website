import * as React from 'react'

import Button from './button'
import Footer from './footer'
import Header from './header'

export default class Main extends React.Component {
  render() {
    return(
      <>
        <Header/>
        <main>
          <p>hi</p>
        </main>
        <Footer/>
      </>
    )
  }
}