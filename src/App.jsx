import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './component/ProductList'
import Cart from './component/Cart'
function App() {


  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <div className="container" style={{ width: "400px" }}>
          <h1>Shopping Cart</h1>
          <ProductList />
          <Cart />
        </div>
      </div>
    </>
  )
}

export default App
