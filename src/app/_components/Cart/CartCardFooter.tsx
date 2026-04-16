"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { ImBin2 } from "react-icons/im";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { MdOutlineShoppingCart } from "react-icons/md";
import { deleteAllProductFromCart } from "@/actions/cart.action";
import { cartContext } from "@/app/_contexts/CartContextProvider";
import { Spinner } from "@/components/ui/spinner";
const CartCardFooter = () => {
  const { setCartData, setNumberOfCartItems } = useContext(cartContext)!;
  const [loading, setLoading] = useState(false);

  async function deleteAllCart() {
    setLoading(true);
    const res = await deleteAllProductFromCart();
    if (res?.status == "success") {
      setCartData(res.data);
      setNumberOfCartItems(res.numOfCartItems);
    }
    setLoading(false);
  }
  return (
    <>
      {loading ? (
        <div className="fixed z-100 inset-0 bg-white/30 backdrop-blur-xs flex items-center justify-center">
          <Button disabled size="sm">
            <Spinner data-icon="inline-start" />
            Clearing Cart...
          </Button>
        </div>
      ) : (
        <div className="pt-6 border-t border-[#E5E7EB] flex items-center justify-between mt-6">
          <Link
            href="/"
            className="font-medium text-sm text-[#16A34A] flex items-center justify-center py-2 gap-2 hover:text-[#15803d]"
          >
            <FaArrowLeftLong />
            Continue Shopping
          </Link>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="outline"
                className="cursor-pointer text-[#99A1AF] text-sm font-medium flex items-baseline gap-2 hover:text-red-500 bg-transparent border-0 hover:bg-transparent"
              >
                <ImBin2 className="text-xs!" />
                Clear all items
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="py-2">
              <AlertDialogHeader className="justify-center! place-items-center! p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full text-red-500 bg-red-100 flex items-center justify-center">
                  <MdOutlineShoppingCart className="text-4xl" />
                </div>
                <AlertDialogTitle className="text-2xl font-bold text-gray-900 mb-2">
                  Clear Your Cart?
                </AlertDialogTitle>
                <AlertDialogDescription className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto text-center!">
                  All items will be removed from your cart. This action cannot
                  be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="bg-white border-0 flex-row justify-center! items-center ">
                <AlertDialogCancel className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-6 px-6 rounded-xl transition-all border-0 cursor-pointer">
                  Keep Shopping
                </AlertDialogCancel>
                <AlertDialogAction
                  onClick={deleteAllCart}
                  className="bg-red-500 text-white font-semibold py-6 px-6 rounded-xl transition-all hover:bg-red-600 border-0 cursor-pointer"
                >
                  Yes, Clear All
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      )}
    </>
  );
};

export default CartCardFooter;
