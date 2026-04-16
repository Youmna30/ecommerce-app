import { ProductType } from "@/types/product.type";
import React from "react";
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import RatingStars from "../RatingStars/RatingStars";
import Link from "next/link";
import AddProductToCart from "./AddProductToCart";

interface ProductPropsType {
  product: ProductType;
}

export const ProductCard = ({ product }: ProductPropsType) => {
  const {
    _id,
    price,
    priceAfterDiscount,
    imageCover,
    category,
    brand,
    ratingsAverage,
    ratingsQuantity,
    title,
  } = product;
  return (
    <div className="rounded-lg border border-[#E5E7EB] overflow-hidden hover:-translate-y-1.5 shadow-sm transition relative">
      {priceAfterDiscount && (
        <span className="bg-[#FB2C36] py-1 px-2 top-3 left-3 text-white rounded-sm absolute text-xs font-medium">
          -{(((price - priceAfterDiscount) / price) * 100).toFixed(0)}%
        </span>
      )}
      <div className="absolute right-3 top-3 flex flex-col space-y-2">
        <button className="flex items-center justify-center rounded-full size-8 shadow-sm bg-white cursor-pointer">
          <FaRegHeart className="text-[#4A5565] hover:text-red-500" />
        </button>
        <button className="flex items-center justify-center rounded-full size-8 shadow-sm bg-white cursor-pointer">
          <FaArrowsRotate className="text-[#4A5565] hover:text-[#16a34a]" />
        </button>
        <Link
          href={`/product/${_id}`}
          className="flex items-center justify-center rounded-full size-8 shadow-sm bg-white cursor-pointer"
        >
          <FaRegEye className="text-[#4A5565] hover:text-[#16a34a]" />
        </Link>
      </div>
      <div>
        <img
          src={imageCover}
          alt={title}
          className="w-full object-contain h-60"
        />
      </div>
      <div className="p-4">
        <p className="text-xs font-medium text-[#6A7282] mb-1">
          {category.name}
        </p>
        <p className="font-medium text-[#364153] mb-1">{title}</p>
        <div className=" flex items-center gap-2">
          <RatingStars rating={ratingsAverage} />
          <p className="text-xs font-medium text-[#6A7282]">
            {ratingsAverage} ({ratingsQuantity})
          </p>
        </div>
        <div className="flex items-center justify-between mt-2">
          {priceAfterDiscount ? (
            <div>
              <h4 className="text-lg font-bold text-[#16A34A]">
                {priceAfterDiscount} EGP
              </h4>
              <p className="font-medium text-sm text-[#6A7282] line-through">
                {price}
              </p>
            </div>
          ) : (
            <h4 className="text-lg font-bold text-[#1E2939]">{price} EGP</h4>
          )}

          <AddProductToCart productId={_id} />
        </div>
      </div>
    </div>
  );
};
