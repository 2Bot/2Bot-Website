import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Footer from './Test'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

ReactDOM.render(<Footer/>, document.getElementById('root') as HTMLElement)

registerServiceWorker()
