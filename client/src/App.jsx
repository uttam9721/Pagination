import React from 'react'
import RegisterPage from './pages/RegisterPage';
import { BrowserRouter , Routes,Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HeroPage from './pages/HeroPage';
import Navbar from './components/Navbar';
import Product from './pages/Product';
const App = () => {
  return (
    <div>
      <BrowserRouter>


      <Routes>
        <Route path='/' element={<RegisterPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        {/* <Route path='/hero' element={<HeroPage/>} /> */}
        <Route path='/product' element={<Product/>} />
      </Routes>
      
      </BrowserRouter>

    </div>
  )
}

export default App
