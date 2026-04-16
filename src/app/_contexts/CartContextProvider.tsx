"use client";
import { getLoggedInUserCart } from "@/actions/cart.action";
import React, { createContext, ReactNode, useEffect, useState } from "react";

export const cartContext = createContext({});

const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [numberOfCartItems, setNumberOfCartItems] = useState(0);
  const [cartData, setCartData] = useState({});

  async function getLoggedInCartData() {
    const data = await getLoggedInUserCart();
    console.log("dataaaaaa", data);

    if (data) {
      setNumberOfCartItems(data.numOfCartItems);
      setCartData(data.data);
    }
  }
  useEffect(() => {
    getLoggedInCartData();
  }, []);
  return (
    <cartContext.Provider
      value={{ numberOfCartItems, setNumberOfCartItems, cartData, setCartData }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
