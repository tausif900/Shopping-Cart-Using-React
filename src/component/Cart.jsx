import React, { useContext } from 'react'
import { CartContext } from '../store/CartContext';
import { FaDeleteLeft } from "react-icons/fa6";

const Cart = () => {
  const { cart, removeItem } = useContext(CartContext);
  return (
    <div>
      <h2>Cart Items</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <p>Name : {item.name}</p>
          <p>Quantity : {item.quantity}</p>
          <button type='button' className='btn btn-danger'
            onClick={() => removeItem(item.id)}
          ><FaDeleteLeft /></button>
        </div>
      ))}
    </div>
  )
}

export default Cart
