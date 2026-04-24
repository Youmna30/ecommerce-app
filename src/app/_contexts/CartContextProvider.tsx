"use client";
import { getLoggedInUserCart } from "@/actions/cart.action";
import { CartDataType } from "@/types/cart.type";
import React, { createContext, ReactNode, useEffect, useState } from "react";

export const cartContext = createContext<{
  cartData: CartDataType | null | undefined;
  numberOfCartItems: number;
  setCartData: React.Dispatch<
    React.SetStateAction<CartDataType | null | undefined>
  >;
  setNumberOfCartItems: React.Dispatch<React.SetStateAction<number>>;
} | null>(null);

const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [numberOfCartItems, setNumberOfCartItems] = useState(0);
  const [cartData, setCartData] = useState<CartDataType | null>();

  async function getLoggedInCartData() {
    const data = await getLoggedInUserCart();
    if (data?.status == "success") {
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
