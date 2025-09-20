import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import {Toaster} from 'react-hot-toast'
import Footer from './Components/Footer'
import { useAppContext } from './Context/AppContext'
import Login from './Components/Login'
import AllProduct from './Pages/AllProduct'
import ProductCategory from './Pages/ProductCategory'
import ProductDetails from './Pages/ProductDetails'
import Cart from './Pages/Cart'
import AddAddress from './Pages/AddAddress'
import MyOrders from './Pages/MyOrders'
const App = () => {
  const isSellerPath = useLocation().pathname.includes("seller")

  const {showUserLogin} = useAppContext();
  return (
    <div>
   {isSellerPath ? null : <Navbar/>} 
   {showUserLogin ? <Login/> : null}

<Toaster/>
    <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"} ` }>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<AllProduct/>}></Route>
        <Route path='/products/:category' element={<ProductCategory/>}></Route>
        <Route path='/products/:category/:id' element={<ProductDetails/>}></Route>
        <Route path ='/cart' element={<Cart/>}></Route>
        <Route path ='/add-address' element={<AddAddress/>}></Route>
        <Route path ='/my-orders' element={<MyOrders/>}></Route>
      </Routes>
    </div>
 { !isSellerPath &&  <Footer/>}
    </div>
  )
}

export default App
