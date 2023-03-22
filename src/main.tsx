import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/style/font.less'
import './assets/style/globe.less'
import './index.less'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
