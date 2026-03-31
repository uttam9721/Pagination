import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShopContextProvider from './context/ShopContext'; // ✅ import provider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopContextProvider> 
      <App />
    </ShopContextProvider>
  </StrictMode>,
)