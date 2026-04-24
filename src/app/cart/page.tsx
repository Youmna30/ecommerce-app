"use client";
import React, { useContext } from "react";
import HeaderCart from "../_components/Cart/HeaderCart";
import CartCard from "../_components/Cart/CartCard";
import CartSummary from "../_components/Cart/CartSummary";
import { cartContext } from "../_contexts/CartContextProvider";
import { CartProduct } from "@/types/cart.type";
import CartCardFooter from "../_components/Cart/CartCardFooter";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaBoxOpen } from "react-icons/fa";
import { useSession } from "next-auth/react";
import BreadCrumb from "../_components/BreadCrumb/BreadCrumb";

const page = () => {
  const { cartData, numberOfCartItems } = useContext(cartContext)!;
  const session = useSession();

  return (
    <>
      {cartData?.products && cartData?.products.length == 0 && session.data && (
        <div>
          <div className="flex items-center justify-center py-8">
            <div className="max-w-md text-center">
              <div className="relative mb-8">
                <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
                  <FaBoxOpen className="text-8xl text-gray-500" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Your cart is empty
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">Go shopping</p>
              <Link
                className="inline-flex items-center gap-2 bg-[#16a34a] text-white py-3.5 px-8 rounded-xl font-semibold hover:bg-[#15803d] transition-all shadow-lg active:scale-[0.98]"
                href="/"
              >
                <FaArrowLeftLong />
                Start Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
      {!session.data && (
        <div className="flex items-center justify-center py-8">
          <div className="max-w-md text-center">
            <div className="relative mb-8">
              <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
                <FaBoxOpen className="text-8xl text-gray-500" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Login To Fill Your Cart
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Login to start shopping!
            </p>
            <Link
              className="inline-flex items-center gap-2 bg-[#16a34a] text-white py-3.5 px-8 rounded-xl font-semibold hover:bg-[#15803d] transition-all shadow-lg active:scale-[0.98]"
              href="/login"
            >
              <FaArrowLeftLong />
              Login First
            </Link>
          </div>
        </div>
      )}
      {cartData?.products && cartData?.products.length > 0 && (
        <div className="bg-gray-50 py-8">
          <div className="container mx-auto px-4">
            <BreadCrumb pageName="Shopping Cart" />
            <HeaderCart numberOfCartItems={numberOfCartItems} />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  {cartData?.products?.map((productCart, index) => (
                    <CartCard
                      product={productCart.product}
                      count={productCart.count}
                      price={productCart.price}
                      key={index}
                    />
                  ))}
                </div>
                <CartCardFooter />
              </div>
              <div className="lg:col-span-1">
                <CartSummary
                  numberOfCartItems={numberOfCartItems}
                  totalCartPrice={cartData?.totalCartPrice}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default page;
