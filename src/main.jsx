import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalContext from './GlobalContext.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalContext>
      <App></App>
    </GlobalContext>
  </React.StrictMode>
)
