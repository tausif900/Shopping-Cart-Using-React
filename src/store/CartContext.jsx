import React, { createContext, useReducer } from 'react'

export const CartContext = createContext();
// Reducer Function
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItem = state.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...state, { ...action.payload, quantity: 1 }];

    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload);
    case "UPDATE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item,
      );
    default:
      return state;
  }
};
// Provider Function
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const addItem = (product) => {
    dispatch({ type: 'ADD_ITEM', payload: product })
  }
  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }
  const updateQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } })
  }
  return (
    <CartContext.Provider value={{
      cart,
      addItem,
      removeItem,
      updateQuantity
    }}>
      {children}
    </CartContext.Provider>
  )
}

