"use client";
import React, { useContext } from "react";
import BreadCrumb from "../_components/BreadCrumb/BreadCrumb";
import WishListHeader from "../_components/Wishlist/WishListHeader";
import WishListCart from "../_components/Wishlist/WishListCart";
import WishListCartHeader from "../_components/Wishlist/wishListCartHeader";
import WishListFooter from "../_components/Wishlist/WishListFooter";
import { whishlistContext } from "../_contexts/WhishlistContextProvider";
import { cartContext } from "../_contexts/CartContextProvider";
import { useSession } from "next-auth/react";
import { IoMdHeartEmpty } from "react-icons/io";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

const page = () => {
  const { wishListData, wishListCount } = useContext(whishlistContext)!;
  const { cartData } = useContext(cartContext)!;
  const session = useSession();

  const cartProductsIds =
    cartData?.products.map((item) => item.product._id) || [];

  return (
    <>
      {wishListData?.data && wishListData?.data.length == 0 && session.data && (
        <div>
          <div className="flex  justify-center py-20 h-screen">
            <div className="max-w-md text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 rounded-xl bg-gray-100 flex items-center justify-center mx-auto">
                  <IoMdHeartEmpty className="text-4xl text-gray-500" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Your wishlist is empty
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Browse products and save your favorites here.
              </p>
              <Link
                className="inline-flex items-center gap-2 bg-[#16a34a] text-white py-3.5 px-20 rounded-xl font-semibold hover:bg-[#15803d] transition-all shadow-lg active:scale-[0.98]"
                href="/"
              >
                <FaArrowLeftLong />
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      )}
      {!session.data && (
        <div>
          <div className="flex  justify-center py-20 h-screen">
            <div className="max-w-md text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 rounded-xl bg-gray-100 flex items-center justify-center mx-auto">
                  <IoMdHeartEmpty className="text-4xl text-gray-500" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Your wishlist is empty
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Browse products and save your favorites here. Sign in to sync
                your wishlist across devices.
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  className="inline-flex items-center justify-center gap-2 bg-[#16a34a] text-white py-3.5 px-6 rounded-xl font-semibold hover:bg-[#15803d] transition-all shadow-lg active:scale-[0.98]"
                  href="/"
                >
                  <FaArrowLeftLong />
                  Browse Products
                </Link>
                <Link
                  className="inline-flex items-center justify-center gap-2 border border-gray-200 bg-white text-gray-700 py-3.5 px-6 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-lg active:scale-[0.98]"
                  href="/login"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      {wishListData?.data && wishListData?.data.length > 0 && (
        <div className="bg-gray-50/50 min-h-screen">
          <div className="bg-white border-b border-gray-100 ">
            <div className="container mx-auto px-4 py-8">
              <BreadCrumb pageName="WishList" />
              <WishListHeader count={wishListCount} />
            </div>
          </div>
          <div className="container mx-auto px-4 py-8">
            <div className="bg-white border border-[#F3F4F6] rounded-2xl overflow-hidden">
              <WishListCartHeader />
              {wishListData?.data.map((item, key) => {
                return (
                  <WishListCart
                    key={key}
                    wishListData={item}
                    cartProductsIds={cartProductsIds}
                  />
                );
              })}
            </div>
            <WishListFooter />
          </div>
        </div>
      )}
    </>
  );
};

export default page;
