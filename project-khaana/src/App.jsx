import React from 'react';
import { StoreContextProvider } from './context/StoreContext';
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart';
import Placeorder from './pages/Placeorder/Placeorder';
import Home from './pages/Home/Home';


const App = () => {
  return (
    <StoreContextProvider>
        <div className='app'>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<Placeorder/>}/>
        </Routes>
        </div>
    </StoreContextProvider>

  )
}

export default App
