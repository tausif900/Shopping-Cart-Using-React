import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './component/ProductList'
import Cart from './component/Cart'
import { ThemeContext } from './store/ThemeContext'
function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div className={theme === "light" ? "light-mode" : "dark-mode"}>
        <div className="d-flex justify-content-center mt-5">
          <div className="container" style={{ width: "600px" }}>
            <div className="d-flex align-items-center gap-3 mb-3">
              <h1>Shopping Cart</h1>
              <button
                type="button"
                className="btn btn-primary"
                onClick={toggleTheme}
              >
                Theme Mode
              </button>
            </div>
            <ProductList />
            <Cart />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
