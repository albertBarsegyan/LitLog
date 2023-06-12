import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import './styles/variable.css'
import App from './App'
import { PopUpProvider } from './context/popup'
import { AuthProvider } from './context/auth.context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <PopUpProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </PopUpProvider>
  </React.StrictMode>
)
