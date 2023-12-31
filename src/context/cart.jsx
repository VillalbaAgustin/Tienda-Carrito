import { createContext, useReducer } from "react";
import { cartInitialState, cartReducer } from "../reducers/cart";

// 1. Creamos el Contexto
export const CartContext = createContext();

// 2. Creamos el Provider, para proveer el contexto
export function CartProviders({ children }) {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

  const removeFromCart = (product) =>
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });

  const clearCart = (product) =>
    dispatch({
      type: "CLEAR_CART",
    });

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        clearCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
