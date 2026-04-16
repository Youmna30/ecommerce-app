import React, { useContext, useState } from "react";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { ImBin2 } from "react-icons/im";
import { ProductType } from "@/types/product.type";
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
import { RiDeleteBin5Line } from "react-icons/ri";
import { deleteProductFromCart, updateCartItem } from "@/actions/cart.action";
import { cartContext } from "@/app/_contexts/CartContextProvider";
import { Spinner } from "@/components/ui/spinner";

const CartCard = ({
  product,
  count,
  price,
}: {
  product: ProductType;
  count: number;
  price: number;
}) => {
  const { imageCover, title, category, _id } = product;
  const { setCartData, setNumberOfCartItems } = useContext(cartContext);
  const [loading, setLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  async function deleteProduct() {
    setLoading(true);
    const res = await deleteProductFromCart(_id);
    if (res?.status == "success") {
      setCartData(res.data);
      setNumberOfCartItems(res.numOfCartItems);
    }
    setLoading(false);
  }
  async function updateItem(newCount) {
    const res = await updateCartItem(_id, newCount);
    if (res?.status == "success") {
      setCartData(res.data);
      setNumberOfCartItems(res.numOfCartItems);
    }
  }

  return (
    <div className="bg-white border border-[#F3F4F6] rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-300">
      {loading ? (
        <div className="flex flex-col items-center gap-4 ">
          <Button disabled size="sm">
            <Spinner data-icon="inline-start" />
            Loading...
          </Button>
        </div>
      ) : (
        <div className=" flex items-start gap-4 sm:gap-6">
          <Link href={`/product/${_id}`} className="relative shrink-0 group">
            <div className="rounded-lg border border-[#F3F4F6] p-3 size-28 sm:size-32 bg-linear-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
              <img
                src={imageCover}
                alt={title}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </Link>
          <div className="flex-1 min-w-0 flex flex-col">
            <div className="mb-3">
              <Link
                href={`/product/${_id}`}
                className="font-semibold text-lg text-[#101828]"
              >
                {title}
              </Link>
              <div className="flex items-center gap-2">
                <span className="inline-block rounded-full py-1 px-2.5 text-[#15803D] text-xs font-medium bg-linear-to-r from-[#f0fdf4] to-[#ecfdf5]">
                  {category.name}
                </span>
                <span className="text-[#99A1AF] font-medium text-xs">.</span>
                <span className="text-[#6A7282] text-xs font-medium">
                  SKU: 5CA0B3
                </span>
              </div>
            </div>
            <div className="mb-4 flex items-baseline gap-2">
              <span className="font-bold text-[#16A34A] text-lg">
                {price} EGP
              </span>
              <span className="text-[#99A1AF] font-medium text-xs">
                per unit
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-200">
                <button
                  className="cursor-pointer size-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none transition-all"
                  aria-label="Decrease quantity"
                  onClick={() => {
                    updateItem(count - 1);
                  }}
                >
                  <FaMinus />
                </button>
                <span className="w-12 text-center font-bold text-gray-900">
                  {count}
                </span>
                <button
                  className="cursor-pointer h-8 w-8 rounded-lg bg-[#16a34a] shadow-sm shadow-[#16a34a]/30 flex items-center justify-center text-white hover:bg-[#15803d] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  aria-label="Increase quantity"
                  onClick={() => {
                    updateItem(count + 1);
                  }}
                >
                  <FaPlus />
                </button>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="font-medium text-xs text-[#99A1AF]">Total</p>
                  <p>
                    <span className="font-bold text-xl text-[#101828]">
                      {Number(price) * Number(count)}
                    </span>
                    <span className="text-[#99A1AF] text-sm font-medium ms-1">
                      EGP
                    </span>
                  </p>
                </div>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="bg-[#FEF2F2] border text-[#FB2C36] border-[#FFC9C9] rounded-lg size-10 flex items-center justify-center hover:border-red-500 hover:bg-red-500 hover:text-white cursor-pointer"
                    >
                      <ImBin2 />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="py-2">
                    <AlertDialogHeader className="justify-center! place-items-center! p-6">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full text-red-500 bg-red-100 flex items-center justify-center">
                        <RiDeleteBin5Line className="text-3xl" />
                      </div>
                      <AlertDialogTitle className="text-xl font-bold text-gray-900 mb-2">
                        Remove Item?
                      </AlertDialogTitle>
                      <AlertDialogDescription className="text-gray-500 text-sm leading-relaxed">
                        Remove{" "}
                        <span className="font-semibold text-gray-700">
                          {title}
                        </span>{" "}
                        from your cart?
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="bg-white border-0 flex-row justify-center! items-center ">
                      <AlertDialogCancel className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-6 px-6 rounded-xl transition-all border-0 cursor-pointer">
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction
                        onClick={deleteProduct}
                        className="bg-red-500 text-white font-semibold py-6 px-6 rounded-xl transition-all hover:bg-red-600 border-0 cursor-pointer"
                      >
                        Remove
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartCard;
