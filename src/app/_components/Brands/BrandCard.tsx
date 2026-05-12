import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import pp from "@/images/review.png";
import { BrandType } from "@/types/brand.type";
import Link from "next/link";
const BrandCard = ({ brand }: { brand: BrandType }) => {
  const { name, image } = brand;
  return (
    <Link
      href={`/product?brand=${brand._id}`}
      className="group rounded-2xl border border-[#F3F4F6] text-center bg-white shadow-sm p-4 hover:shadow-xl hover:border-violet-200 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="bg-[#F9FAFB] rounded-xl p-4 flex items-center justify-center mb-3 overflow-hidden aspect-square">
        <img
          src={image}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <h3 className="text-sm font-semibold text-[#101828] group-hover:text-violet-600 mb-1.5">
        {name}
      </h3>
      <div className="flex items-center justify-center gap-1.5 text-xs font-medium text-white group-hover:text-violet-600">
        View Products
        <FaArrowRightLong />
      </div>
    </Link>
  );
};

export default BrandCard;
