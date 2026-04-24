"use client";
import {
  addProductToWishList,
  deleteWishlist,
  getUserWishListData,
} from "@/actions/wishlist.action";
import { whishlistContext } from "@/app/_contexts/WhishlistContextProvider";
import React, { useContext, useState } from "react";
import { FaCheckCircle, FaHeart, FaRegHeart, FaSpinner } from "react-icons/fa";
import { VscError } from "react-icons/vsc";
import { toast } from "sonner";

const AddProductToWishList = ({ productId }: { productId: string }) => {
  const [loading, setLoading] = useState(false);
  const {
    wishListProductList,
    setWishListProductList,
    setWishListCount,
    setWishListData,
  } = useContext(whishlistContext)!;

  function checkProductInWishList() {
    if (wishListProductList?.includes(productId)) {
      return <FaHeart className="text-red-500 hover:text-red-700" />;
    }
    return <FaRegHeart className="text-[#4A5565] hover:text-red-500" />;
  }

  async function handleAddToWishList() {
    try {
      setLoading(true);
      let res = null;
      if (wishListProductList?.includes(productId)) {
        res = await deleteWishlist(productId);
      } else {
        res = await addProductToWishList({ productId });
      }

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
    <button
      onClick={handleAddToWishList}
      className="flex items-center justify-center rounded-full size-8 shadow-sm bg-white cursor-pointer"
    >
      {loading ? (
        <FaSpinner className="animate-spin text-[#4A5565] text-xl" />
      ) : (
        checkProductInWishList()
      )}
    </button>
  );
};

export default AddProductToWishList;
