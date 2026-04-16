"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import RatingStars from "../RatingStars/RatingStars";
import { FiMinus, FiPlus } from "react-icons/fi";
import { IoCart, IoShareSocialSharp } from "react-icons/io5";
import { FaBolt } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import SmallerInfo from "../InfoCards/SmallerInfo";
import { ProductType } from "@/types/product.type";

const ProductDetails = ({ product }: { product: ProductType }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const quantityCount = useRef<HTMLInputElement | null>(null);
  const {
    category,
    brand,
    description,
    quantity,
    price,
    priceAfterDiscount,
    title,
    ratingsAverage,
    ratingsQuantity,
  } = product;
  const [totalPrice, setTotalPrice] = useState(() => {
    return priceAfterDiscount ? priceAfterDiscount : price;
  });
  function handleIncrement() {
    if (quantityCount.current) {
      setIsDisabled(false);
      quantityCount.current.value = String(
        Number(quantityCount.current.value) + 1,
      );
      setTotalPrice(() => {
        const originalPrice = priceAfterDiscount ? priceAfterDiscount : price;
        return Number(quantityCount?.current?.value) * originalPrice;
      });
    }
  }
  function handleDecrement() {
    if (quantityCount.current) {
      if (quantityCount.current.value == String(1)) {
        setIsDisabled(true);
      } else {
        quantityCount.current.value = String(
          Number(quantityCount.current.value) - 1,
        );
        setTotalPrice(() => {
          const originalPrice = priceAfterDiscount ? priceAfterDiscount : price;
          return Number(quantityCount?.current?.value) * originalPrice;
        });

        if (quantityCount.current.value == String(1)) {
          setIsDisabled(true);
        }
      }
    }
  }
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 lg:w-3/4">
      <div className="flex items-center gap-2 mb-4">
        <Link
          href={"/"}
          className="py-1.5 px-3 text-[#15803D] text-xs font-medium bg-[#F0FDF4] rounded-full"
        >
          {category.name}
        </Link>
        <span className="py-1.5 px-3 text-[#364153] text-xs font-medium bg-[#F3F4F6] rounded-full">
          {brand.name}
        </span>
      </div>
      <h1 className="text-[#101828] text-3xl font-bold mb-3">{title}</h1>
      <div className="flex items-center gap-3 mb-4">
        <RatingStars rating={ratingsAverage} />
        <p className="text-sm font-medium text-[#4A5565]">
          {ratingsAverage} ({ratingsQuantity} reviews)
        </p>
      </div>
      <div className="flex items-center flex-wrap gap-3 mb-6">
        {priceAfterDiscount ? (
          <>
            <span className="font-bold text-3xl text-[#101828]">
              {priceAfterDiscount} EGP
            </span>
            <span className="text-lg text-gray-400 line-through">
              {price} EGP
            </span>
            <span className="bg-[#FB2C36] py-1 px-3 text-white rounded-full  text-sm font-medium">
              Save {(((price - priceAfterDiscount) / price) * 100).toFixed(0)}%
            </span>
          </>
        ) : (
          <span className="font-bold text-3xl text-[#101828]">{price} EGP</span>
        )}
      </div>
      <span className="py-1.5 px-3 text-[#008236] text-sm font-medium bg-[#F0FDF4] rounded-full inline-flex items-center gap-2 mb-6">
        <span className="bg-[#00C950] size-2 rounded-full"></span>
        In Stock
      </span>
      <div className="border-t border-[#F3F4F6] pt-5 mb-6">
        <p className="text-[#4A5565] font-medium text-base">{description}</p>
      </div>
      <div className="mb-6">
        <label
          htmlFor="quantity"
          className="text-[#364153] text-sm font-medium mb-2 block"
        >
          Quantity
        </label>
        <div className="flex items-center gap-4 mb-6">
          <div className="border-2 border-[#E5E7EB] rounded-lg flex items-center">
            <button
              onClick={handleDecrement}
              disabled={isDisabled}
              className="px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-[#16a34a] transition cursor-pointer text-xl disabled:opacity-50"
            >
              <FiMinus />
            </button>
            <input
              type="number"
              min="1"
              id="quantity"
              defaultValue={1}
              ref={quantityCount}
              className="text-[#364153] font-medium text-lg w-16 text-center"
            />
            <button
              onClick={handleIncrement}
              className="px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-[#16a34a] transition cursor-pointer"
            >
              <FiPlus />
            </button>
          </div>
          <span className="text-sm font-medium text-[#6A7282]">
            {quantity} available
          </span>
        </div>
        <div className="p-4 bg-[#F9FAFB] rounded-lg flex items-center justify-between">
          <span className="text-[#4A5565] text-base font-medium">
            Total Price:
          </span>
          <span className="text-[#16A34A] text-2xl font-bold">
            {totalPrice} EGP
          </span>
        </div>
        <div className="flex items-center gap-2 mb-6">
          <button className="w-full flex items-center justify-center gap-2 py-3.5 px-6 text-white rounded-xl cursor-pointer bg-[#16A34A] font-medium text-base shadow-lg shadow-[#16a34a]/25 hover:bg-[#15803d]">
            <IoCart className="text-xl" />
            Add to Cart
          </button>
          <button className="w-full flex items-center justify-center gap-2 py-3.5 px-6 text-white rounded-xl cursor-pointer bg-[#101828] font-medium text-base hover:bg-gray-800">
            <FaBolt />
            Buy Now
          </button>
        </div>
        <div className=" flex  gap-3 mb-6">
          <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 border-[#E5E7EB] text-[#364153] text-base font-medium cursor-pointer hover:text-[#16a34a] hover:border-[#86efac]">
            <FaRegHeart />
            Add to Wishlist
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-3  rounded-xl border-2 border-[#E5E7EB] cursor-pointer hover:text-[#16a34a] hover:border-[#86efac]">
            <IoShareSocialSharp />
          </button>
        </div>
        <div className="border-t border-gray-100 pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <SmallerInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
