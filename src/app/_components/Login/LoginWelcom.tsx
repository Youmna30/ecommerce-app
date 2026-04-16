import React from "react";
import loginPhoto from "@/images/login.png";
import { MdLocalShipping } from "react-icons/md";
import { FaShieldAlt } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";
const LoginWelcom = () => {
  return (
    <div className="space-y-6 text-center hidden lg:block">
      <img
        src={loginPhoto.src}
        alt="Welcom login photo"
        className="w-full h-96 object-cover rounded-2xl shadow-lg"
      />
      <h2 className="font-bold text-3xl text-[#1E2939]">
        FreshCart - Your One-Stop Shop for Fresh Products
      </h2>
      <p className="font-medium text-lg text-[#4A5565]">
        Join thousands of happy customers who trust FreshCart for their daily
      </p>
      <div className="flex items-center justify-around">
        <div className="flex items-center gap-2">
          <MdLocalShipping className="text-[#16A34A]" />
          <span className="text-sm font-medium text-[#6A7282]">
            Free Delivery
          </span>
        </div>
        <div className="flex items-center gap-2">
          <FaShieldAlt className="text-[#16A34A]" />
          <span className="text-sm font-medium text-[#6A7282]">
            Secure Payment
          </span>
        </div>
        <div className="flex items-center gap-2">
          <GoClockFill className="text-[#16A34A]" />
          <span className="text-sm font-medium text-[#6A7282]">
            24/7 Support
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginWelcom;
