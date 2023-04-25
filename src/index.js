<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/auth.context';
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import './styles/variable.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
>>>>>>> newBranch

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< HEAD
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
=======
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
)



>>>>>>> newBranch
