import React from "react";
import { FaShieldAlt, FaTruck } from "react-icons/fa";
import { FaTag, FaBagShopping, FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import { IoLockClosed } from "react-icons/io5";

const CartSummary = ({
  numberOfCartItems,
  totalCartPrice,
}: {
  numberOfCartItems: number;
  totalCartPrice: number;
}) => {
  return (
    <div className="bg-white border border-[#F3F4F6] rounded-2xl shadow-sm sticky top-24 overflow-hidden">
      <div className="bg-linear-to-r from-[#16A34A] to-[#15803D] py-4 px-8">
        <h2 className="flex items-center gap-2 text-white font-bold text-lg">
          <FaBagShopping />
          Order Summary
        </h2>
        <p className="mt-1 font-medium text-sm text-[#DCFCE7]">
          {numberOfCartItems} items in your cart
        </p>
      </div>
      <div className="p-6 space-y-5">
        <div className="bg-linear-to-r from-[#F0FDF4] to-[#ecfdf5] p-4 rounded-lg flex items-center gap-3">
          <div className="rounded-full bg-[#DCFCE7] size-10 flex items-center justify-center">
            <FaTruck className="text-[#00A63E]" />
          </div>
          <div>
            <p className="font-semibold text-base text-[#008236]">
              Free Shipping!
            </p>
            <p className="font-medium text-sm text-[#00A63E]">
              You qualify for free delivery
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-medium text-base text-[#4A5565]">
              Subtotal
            </span>
            <span className="text-[#101828] font-medium text-base">
              {totalCartPrice ? totalCartPrice : ""} EGP
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium text-base text-[#4A5565]">
              Shipping
            </span>
            <span className="text-[#00A63E] font-medium text-base">free</span>
          </div>
          <div className="flex items-center justify-between border-t border-dashed  border-[#E5E7EB] pt-3 ">
            <span className="font-semibold text-base text-[#101828]">
              Total
            </span>
            <div className="flex gap-2 items-end">
              <span className="text-[#101828] font-bold text-2xl">
                {totalCartPrice ? totalCartPrice : ""}
              </span>
              <span className="text-[#6A7282] font-medium text-sm">EGP</span>
            </div>
          </div>
        </div>
        <button className="w-full rounded-lg text-sm font-medium text-[#4A5565] items-center justify-center py-3 flex gap-2 border border-dashed border-[#D1D5DC]  hover:border-[#4ade80] hover:text-[#16a34a] hover:bg-[#f0fdf4]/50 transition-all cursor-pointer">
          <FaTag />
          Apply Promo Code
        </button>
        <Link
          href="/secure"
          className="flex items-center rounded-lg justify-center gap-3 py-4 px-8 bg-linear-to-r from-[#16A34A] to-[#15803D] text-white font-semibold text-base hover:from-[#15803d] hover:to-[#14532d] transition-all"
        >
          <IoLockClosed />
          Secure Checkout
        </Link>
        <div className="flex items-center justify-center gap-4 py-2">
          <div className="flex items-center gap-1.5">
            <FaShieldAlt className="text-[#00C950]" />

            <span className="font-medium text-[#6A7282] text-xs">
              Secure Payment
            </span>
          </div>
          <div className="w-px h-4 bg-[#E5E7EB]"></div>
          <div className="flex items-center gap-1.5">
            <FaTruck className="text-[#2B7FFF]" />

            <span className="font-medium text-[#6A7282] text-xs">
              Fast Delivery
            </span>
          </div>
        </div>
        <Link
          href="/"
          className="font-medium text-sm text-[#16A34A] flex items-center justify-center py-2 gap-2 hover:text-[#15803d]"
        >
          <FaArrowLeftLong />
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default CartSummary;
