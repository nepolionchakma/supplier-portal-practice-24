import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './Supabase/AuthContext.jsx'
import { LocalContextProvider } from './Supabase/localApiContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <LocalContextProvider>
        <App />
      </LocalContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
