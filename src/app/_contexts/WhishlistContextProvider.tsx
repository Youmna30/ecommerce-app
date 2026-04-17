"use client";
import { getUserWishListData } from "@/actions/wishlist.action";
import { wishListType } from "@/types/wishlist.type";
import React, { useState, useEffect } from "react";

export const whishlistContext = React.createContext<{
  wishListData: wishListType | null | undefined;
  setWishListData: React.Dispatch<
    React.SetStateAction<wishListType | null | undefined>
  >;
  wishListProductList: string[] | null | undefined;
  setWishListProductList: React.Dispatch<
    React.SetStateAction<string[] | null | undefined>
  >;
  wishListCount: number;
  setWishListCount: React.Dispatch<React.SetStateAction<number>>;
} | null>(null);
const WhishlistContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // products array list
  const [wishListData, setWishListData] = useState<
    wishListType | null | undefined
  >();
  const [wishListProductList, setWishListProductList] = useState<
    string[] | null | undefined
  >([]);
  const [wishListCount, setWishListCount] = useState<number>(0);

  async function getLoggedInWishList() {
    const data = await getUserWishListData();
    if (data?.status == "success") {
      setWishListData(data);
      setWishListCount(data.count);
      setWishListProductList(data?.data.map((item) => item._id) || []);
    }
  }
  useEffect(() => {
    getLoggedInWishList();
  }, []);
  return (
    <whishlistContext.Provider
      value={{
        wishListData,
        setWishListData,
        wishListProductList,
        setWishListProductList,
        wishListCount,
        setWishListCount,
      }}
    >
      {children}
    </whishlistContext.Provider>
  );
};

export default WhishlistContextProvider;
