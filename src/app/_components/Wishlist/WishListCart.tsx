"use client";
import { addProductToCart } from "@/actions/cart.action";
import { deleteWishlist, getUserWishListData } from "@/actions/wishlist.action";
import { cartContext } from "@/app/_contexts/CartContextProvider";
import { whishlistContext } from "@/app/_contexts/WhishlistContextProvider";
import { ProductType } from "@/types/product.type";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { FaCheckCircle, FaSpinner } from "react-icons/fa";
import { ImBin2 } from "react-icons/im";
import { IoMdCheckmark } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { VscError } from "react-icons/vsc";
import { toast } from "sonner";

const WishListCart = ({
  wishListData,
  cartProductsIds,
}: {
  wishListData: ProductType;
  cartProductsIds: string[];
}) => {
  const { setWishListCount, setWishListProductList, setWishListData } =
    useContext(whishlistContext)!;
  const [loading, setLoading] = useState(false);
  const { setNumberOfCartItems, setCartData } = useContext(cartContext)!;
  async function handleDeleteProductWishList() {
    const res = await deleteWishlist(wishListData._id);
    if (res?.status == "success") {
      toast.success(res.message, {
        position: "bottom-right",
        icon: <FaCheckCircle className="text-[#16A34A] text-xl" />,
      });
      setWishListProductList(res.data);
      setWishListCount(res.data.length);
      const data = await getUserWishListData();
      if (data?.status == "success") {
        setWishListData(data);
      }
    }
  }

  async function handleAddToCartBtn() {
    try {
      setLoading(true);
      const res = await addProductToCart({ productId: wishListData._id });
      if (res?.status == "success") {
        toast.success(res.message, {
          position: "bottom-right",
          icon: <FaCheckCircle className="text-[#16A34A] text-xl" />,
        });
        setNumberOfCartItems(res.numOfCartItems);
        setCartData(res.data);
      } else {
        toast.error(
          () => {
            return res?.message
              ? res.message
              : "Something Wrong happened, Please Try Again Later!";
          },
          {
            position: "bottom-right",
            icon: <VscError className="text-red-600 text-xl" />,
          },
        );
      }
    } catch (error) {
      toast.error("Something Wrong happened, Please Try Again Later!", {
        position: "bottom-right",
        icon: <VscError className="text-red-600 text-xl" />,
      });
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="p-4 md:px-6 md:py-4 border-b border-[#F3F4F6] grid grid-cols-1 md:grid-cols-12 gap-4 ">
      <div className="flex items-center gap-4 md:col-span-6">
        <div className="rounded-xl overflow-hidden size-20 bg-[#F9FAFB] border border-[#F3F4F6]">
          <img
            src={wishListData.imageCover}
            alt={wishListData.title}
            className="w-full object-contain p-2"
          />
        </div>

        <div className="space-y-1 md:col-span-2 md:justify-center">
          <p className="font-medium text-base text-[#101828]">
            {wishListData.title}
          </p>
          <p className="font-medium text-sm text-[#99A1AF]">
            {wishListData.category?.name}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 md:col-span-2 md:justify-center">
        <p className="text-sm text-[#6A7282] font-medium md:hidden">Price:</p>
        {wishListData.priceAfterDiscount ? (
          <div>
            <p className="text-[#101828] font-semibold text-base">
              {wishListData.priceAfterDiscount} EGP
            </p>
            <p className="text-[#99A1AF] font-medium text-sm line-through">
              {wishListData.price} EGP
            </p>
          </div>
        ) : (
          <p className="text-[#101828] font-semibold text-base">
            {wishListData.price} EGP
          </p>
        )}
      </div>
      <div className="flex items-center gap-2 md:col-span-2 md:justify-center">
        <p className="text-sm text-[#6A7282] font-medium md:hidden">Status:</p>
        {cartProductsIds.includes(wishListData._id) ? (
          <p className="text-[#15803d] bg-green-50 font-medium text-xs px-3 py-1 rounded-full inline-flex items-center gap-1.5">
            <IoCart />
            In Cart
          </p>
        ) : (
          <p className="text-[#008236] bg-green-50 font-semibold text-xs px-3 py-1 rounded-full inline-flex items-center gap-1.5">
            <span className="size-1.5 bg-green-500  rounded-full"></span>
            In Stock
          </p>
        )}
      </div>
      <div className="flex items-center gap-2 md:col-span-2 md:justify-center">
        {cartProductsIds.includes(wishListData._id) ? (
          <Link
            href="/cart"
            className="py-2.5 px-4 flex items-center justify-center gap-2 flex-1 bg-gray-100 text-gray-700 rounded-lg font-medium text-sm cursor-pointer hover:bg-gray-200 transition-all"
          >
            <IoMdCheckmark className="text-green-600" />
            <span className="md:hidden xl:block">View Cart</span>
          </Link>
        ) : (
          <button
            onClick={handleAddToCartBtn}
            disabled={loading}
            className="py-2.5 px-4 flex items-center justify-center gap-2 flex-1 bg-[#16A34A] text-white rounded-lg font-medium text-sm cursor-pointer hover:bg-[#15803d] transition-all"
          >
            {loading ? (
              <FaSpinner className="animate-spin" />
            ) : (
              <>
                <IoCart />
                <span className="md:hidden xl:block">Add To Cart</span>
              </>
            )}
          </button>
        )}

        <button
          onClick={handleDeleteProductWishList}
          className="border border-[#E5E7EB] rounded-lg text-[#99A1AF] size-10 flex justify-center items-center cursor-pointer hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all disabled:opacity-50"
        >
          <ImBin2 />
        </button>
      </div>
    </div>
  );
};

export default WishListCart;
