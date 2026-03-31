import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { NumberProvider } from './Context/ContextApi.jsx'

createRoot(document.getElementById('root')).render(
  <NumberProvider>
    <App />
  </NumberProvider>,
)
