"use client";
import { addProductToCart } from "@/actions/cart.action";
import { cartContext } from "@/app/_contexts/CartContextProvider";
import { getAllProducts } from "@/services/product.service";
import React, { useContext, useState } from "react";
import { FaCheckCircle, FaSpinner } from "react-icons/fa";
import { VscError } from "react-icons/vsc";
import { toast } from "sonner";

const AddProductToCart = ({ productId }: { productId: string }) => {
  const [loading, setLoading] = useState(false);
  const { setNumberOfCartItems, setCartData } = useContext(cartContext);
  async function handleAddToCartBtn() {
    try {
      setLoading(true);
      const res = await addProductToCart({ productId });
      if (res?.status == "success") {
        toast.success(res.message, {
          position: "top-right",
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
            position: "top-right",
            icon: <VscError className="text-red-600 text-xl" />,
          },
        );
      }
    } catch (error) {
      toast.error("Something Wrong happened, Please Try Again Later!", {
        position: "top-right",
        icon: <VscError className="text-red-600 text-xl" />,
      });
    } finally {
      setLoading(false);
    }
  }
  return (
    <button
      onClick={handleAddToCartBtn}
      disabled={loading}
      className="size-10 rounded-full flex items-center justify-center text-white bg-[#16A34A] text-3xl cursor-pointer hover:bg-[#15803d] disabled:opacity-50"
    >
      {loading ? <FaSpinner className="animate-spin" /> : "+"}
    </button>
  );
};

export default AddProductToCart;
