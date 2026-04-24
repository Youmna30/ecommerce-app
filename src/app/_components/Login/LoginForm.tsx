"use client";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  FaCheckCircle,
  FaEye,
  FaEyeSlash,
  FaFacebook,
  FaGoogle,
} from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { IoLockClosed } from "react-icons/io5";
import { MdMail, MdOutlineStar } from "react-icons/md";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schemas/login.schema";
import { LoginType } from "@/types/login.type";
import { signIn, useSession } from "next-auth/react";
import { toast } from "sonner";
import { VscError } from "react-icons/vsc";
import { useRouter } from "next/navigation";
import { getLoggedInUserCart } from "@/actions/cart.action";
import { cartContext } from "@/app/_contexts/CartContextProvider";
import { whishlistContext } from "@/app/_contexts/WhishlistContextProvider";
import { getUserWishListData } from "@/actions/wishlist.action";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const { setNumberOfCartItems, setCartData } = useContext(cartContext)!;
  const { setWishListData, setWishListProductList, setWishListCount } =
    useContext(whishlistContext)!;
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      signedIn: false,
    },
    resolver: zodResolver(loginSchema),
  });
  async function handleLogin(values: LoginType) {
    setLoading(true);
    const res = await signIn("credentials", {
      redirect: false,
      ...values,
    });
    if (res?.ok) {
      toast.success("Login Success", {
        position: "bottom-right",
        icon: <FaCheckCircle className="text-[#16A34A] text-xl" />,
      });
      router.push("/");
      const cartData = await getLoggedInUserCart();
      setNumberOfCartItems(cartData?.numOfCartItems!);
      setCartData(cartData?.data);
      const wishlistData = await getUserWishListData();
      setWishListData(wishlistData);
      setWishListCount(wishlistData?.count!);
      setWishListProductList(wishlistData?.data?.map((item) => item._id) || []);
    } else {
      toast.error("Incorrect Email Or Password", {
        position: "bottom-right",
        icon: <VscError className="text-red-600 text-xl" />,
      });
    }
    setLoading(false);
  }
  function handlePassword() {
    setShowPassword(!showPassword);
  }
  return (
    <div className="rounded-2xl shadow-md p-12">
      <div className="text-center mb-8">
        <p className="text-3xl font-bold text-[#1E2939]">
          <span className="text-[#16A34A]">Fresh</span>Cart
        </p>
        <h1 className="text-2xl font-bold text-[#1E2939] mt-4">
          Welcome Back!
        </h1>
        <p className="font-medium text-base text-[#4A5565] mt-2">
          Sign in to continue your fresh shopping experience
        </p>
      </div>
      <div className="space-y-3 mb-6">
        <button className="px-4 py-3 rounded-xl border-2 border-[#E5E7EB] flex items-center justify-center gap-3 font-medium text-[#364153] hover:border-[#86efac] hover:bg-[#f0fdf4] transition-all duration-200 cursor-pointer w-full">
          <FaGoogle className="text-[#FB2C36]" />
          Continue with Google
        </button>
        <button className="px-4 py-3 rounded-xl border-2 border-[#E5E7EB] flex items-center justify-center gap-3 font-medium text-[#364153] hover:border-[#86efac] hover:bg-[#f0fdf4] transition-all duration-200 cursor-pointer w-full">
          <FaFacebook className="text-[#155DFC]" />
          Continue with Facebook
        </button>
      </div>
      <div className="relative  h-0.5 bg-gray-300/30 my-8 flex items-center before:content-['OR_CONTINUE_WITH_EMAIL'] before:absolute before:top-1/2 before:left-1/2 before:-translate-1/2 before:bg-white before:px-4 before:text-[#6A7282] before:font-medium before:text-sm"></div>
      <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-6">
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                htmlFor={field.name}
                className="text-[#364153] font-semibold text-sm"
              >
                Email Address
              </FieldLabel>
              <div className="relative">
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="ali@exampple.com"
                  autoComplete="off"
                  className="py-5 pl-12 border-2 border-gray-200 focus-visible:ring-0 focus:outline-none!  focus:ring-2! focus:ring-[#dcfce7]!  focus:border-[#22c55e]! transition-all aria-invalid:ring-0 aria-invalid:border-input  aria-invalid:text-black"
                />
                <MdMail className="absolute top-1/2 text-[#99A1AF] left-5 text-xl -translate-y-1/2" />
              </div>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <div className="flex items-center justify-between">
                <FieldLabel
                  htmlFor={field.name}
                  className="text-[#364153] font-semibold text-sm"
                >
                  Password
                </FieldLabel>
                <Link
                  href={"/forget"}
                  className="text-sm font-medium text-[#16A34A]"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="create a strong password"
                  autoComplete="off"
                  className="py-5 pl-12 border-2 border-gray-200 focus-visible:ring-0 focus:outline-none!  focus:ring-2! focus:ring-[#dcfce7]!  focus:border-[#22c55e]! transition-all aria-invalid:ring-0 aria-invalid:border-input  aria-invalid:text-black"
                  type={!showPassword ? "password" : "text"}
                />
                <IoLockClosed className="absolute top-1/2 -translate-y-1/2 text-[#99A1AF] left-5 text-xl " />
                <button
                  type="button"
                  onClick={handlePassword}
                  className="absolute top-1/2 -translate-y-1/2 text-[#99A1AF] right-5 text-xl cursor-pointer hover:text-gray-600"
                >
                  {!showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="signedIn"
          control={form.control}
          render={({ field, fieldState }) => (
            <div>
              <FieldSet data-invalid={fieldState.invalid}>
                <FieldGroup data-slot="checkbox-group">
                  <Field orientation="horizontal">
                    <Checkbox
                      id="form-rhf-checkbox-terms"
                      name={field.name}
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="aria-checked:bg-[#16A34A] aria-checked:border-[#16A34A] border-black"
                    />
                    <FieldLabel
                      htmlFor="form-rhf-checkbox-terms"
                      className="font-medium text-[#364153] text-sm"
                    >
                      Keep me signed in
                    </FieldLabel>
                  </Field>
                </FieldGroup>
              </FieldSet>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </div>
          )}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-[#16A34A] text-white rounded-lg flex items-center gap-2 justify-center w-full px-4 py-3 font-semibold hover:bg-[#15803d] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Sign In
        </button>
      </form>
      <p className="font-medium text-[#4A5565] border-t border-t-[#F3F4F6] pt-6 text-center mt-8">
        New to FreshCart?
        <Link
          href={"/signup"}
          className="text-[#16A34A] font-semibold ms-2 hover:text-[#15803d]"
        >
          Create an account
        </Link>
      </p>
      <div className="flex items-center justify-center gap-6 mt-6">
        <div className="text-[#6A7282] text-xs flex items-center gap-1">
          <IoLockClosed />
          <span>SSL Secured</span>
        </div>
        <div className="text-[#6A7282] text-xs flex items-center gap-1">
          <HiMiniUserGroup className="text-base" />
          <span>50K+ Users</span>
        </div>
        <div className="text-[#6A7282] text-xs flex items-center gap-1">
          <MdOutlineStar className="text-base" />
          <span>4.9 Rating</span>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
