import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppContext from './context/Appcontext.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContext>
      <App />
    </AppContext>
  </StrictMode>,
)
