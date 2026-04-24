import Link from "next/link";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

const WishListFooter = () => {
  return (
    <Link
      href="/"
      className="font-medium text-sm text-[#6A7282] flex items-center mt-8 gap-2 hover:text-[#15803d]"
    >
      <FaArrowLeftLong />
      Continue Shopping
    </Link>
  );
};

export default WishListFooter;
