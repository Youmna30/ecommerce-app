import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const HeaderCart = ({numberOfCartItems} : {numberOfCartItems : number}) => {
  return (
    <div className="mb-8">
      <h1 className="text-[#101828] font-bold text-3xl flex items-center gap-3">
        <span className="rounded-xl size-12 bg-linear-to-r from-[#16A34A] to-[#15803D] flex items-center justify-center">
          <FaCartShopping className="text-white" />
        </span>
        Shopping Cart
      </h1>
      <p className="text-[#6A7282] font-medium text-base mt-2">
        You have
        <span className="text-[#16A34A] font-semibold mx-1">
          {numberOfCartItems} items
        </span>
        in your cart
      </p>
    </div>
  );
};

export default HeaderCart;
