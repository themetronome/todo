import React from 'react'
import ReactDOM from 'react-dom'

import { Sidebar } from './components/sidebar'

import './index.scss'

const App = () => {
  return (
    <div className='todo'>
      <Sidebar />
      <div className='todo__tasklist'></div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
