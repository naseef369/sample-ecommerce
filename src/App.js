import React from 'react'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/home/Home'
import AboutUs from './pages/about/AboutUs'
import Products from './pages/products/Products'
import ContactUs from './pages/ContactUs'
import ProductDetail from './pages/ProductDetail'
import Footer from './components/footer/Footer'
import Cart from './pages/Cart'
export default function App() {
  return (
    <BrowserRouter>
     <Navbar/>
   
  <div style={{minHeight:"100vh"}} className='p-3'>
   <Routes>
     <Route path='/'element={<Home/>} />
      <Route path='/about'element={<AboutUs/>} />
      <Route path='/products' element={<Products/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
       <Route path='/product/:id' element={<ProductDetail/>}/>
        <Route path='/cart' element={<Cart/>}/>

     </Routes> 
     </div>
    <Footer/>
    </BrowserRouter>

  
      
  )
}

