import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Main from './components/main'
import registerServiceWorker from './registerServiceWorker'
import 'yorha'
import './index.css'

ReactDOM.render(<Main/>, document.querySelector('body') as HTMLElement)

registerServiceWorker()
