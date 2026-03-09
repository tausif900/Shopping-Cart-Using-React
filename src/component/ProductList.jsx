import React, { useContext } from 'react'
import { IoIosCart } from "react-icons/io";
import { CartContext } from '../store/CartContext';

const ProductList = () => {
  const { addItem } = useContext(CartContext);
  const products = [{
    id: 1,
    name: 'Laptop',
    quantity: 2
  },
  {
    id: 2,
    name: 'Mobile',
    quantity: 4
  }]
  return (
    <div>
      <h2>Products</h2>
      <div className='d-flex gap-3'>
        {products.map((product) => (
          <div className='button' key={product.id}>
            <h3>{product.name}</h3>
            <button type="button"
              className="btn btn-info"
              onClick={() => addItem(product)}
            ><IoIosCart /></button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList
