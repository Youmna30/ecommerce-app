import React from "react";
import { FaHeart } from "react-icons/fa6";

const WishListHeader = ({ count }: { count: number }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="size-12 rounded-xl bg-red-50 text-[#FB2C36] flex items-center justify-center">
        <FaHeart className="text-lg" />
      </div>
      <div>
        <h1 className="text-[#101828] font-bold text-xl">My Wishlist</h1>
        <p className="text-[#6A7282] font-medium text-sm">
          {" "}
          {count} items saved
        </p>
      </div>
    </div>
  );
};

export default WishListHeader;
