import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import './styles/variable.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { PopUpProvider } from "./context/popup"
import { AuthProvider } from './context/auth.context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PopUpProvider>
          <App />
        </PopUpProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode >
)



