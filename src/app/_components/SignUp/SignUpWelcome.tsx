import React from "react";
import { FaShieldAlt, FaShippingFast, FaStar } from "react-icons/fa";
import review from "@/images/review.png";
const SignUpWelcome = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-[#364153]">
        Welcome to <span className="text-[#16A34A]">FreshCart</span>
      </h1>
      <p className="font-medium text-xl text-[#364153] mt-4">
        Join thousands of happy customers who enjoy fresh groceries delivered
        right to their doorstep.
      </p>
      <ul className="space-y-6 py-6">
        <li className="flex items-center gap-4">
          <div className="bg-[#BBF7D0] size-12 rounded-full flex items-center justify-center">
            <FaStar className="text-[#16A34A] text-xl" />
          </div>
          <div>
            <p className="font-semibold text-lg text-[#364153]">
              Premium Quality
            </p>
            <p className="font-medium text-[#4A5565]">
              Premium quality products sourced from trusted suppliers.
            </p>
          </div>
        </li>

        <li className="flex items-center gap-4">
          <div className="bg-[#BBF7D0] size-12 rounded-full flex items-center justify-center">
            <FaShippingFast className="text-[#16A34A] text-xl" />
          </div>
          <div>
            <p className="font-semibold text-lg text-[#364153]">
              Fast Delivery
            </p>
            <p className="font-medium text-[#4A5565]">
              Same-day delivery available in most areas
            </p>
          </div>
        </li>
        <li className="flex items-center gap-4">
          <div className="bg-[#BBF7D0] size-12 rounded-full flex items-center justify-center">
            <FaShieldAlt className="text-[#16A34A] text-xl" />
          </div>
          <div>
            <p className="font-semibold text-lg text-[#364153]">
              Secure Shopping
            </p>
            <p className="font-medium text-[#4A5565] text-base">
              Your data and payments are completely secure
            </p>
          </div>
        </li>
      </ul>
      <div className="mt-6 shadow-sm p-4 rounded-md">
        <div className="flex items-center gap-4">
          <div className="size-12 overflow-hidden">
            <img src={review.src} alt="review photo" className="w-full" />
          </div>
          <div>
            <p className="font-medium text-[#364153]">Sarah Johnson</p>
            <div className="flex">
              <FaStar className="text-[#FFDF20]" />
              <FaStar className="text-[#FFDF20]" />
              <FaStar className="text-[#FFDF20]" />
              <FaStar className="text-[#FFDF20]" />
              <FaStar className="text-[#FFDF20]" />
            </div>
          </div>
        </div>
        <p className="italic font-medium text-[#4A5565] mt-4">
          "FreshCart has transformed my shopping experience. The quality of the
          products is outstanding, and the delivery is always on time. Highly
          recommend!"
        </p>
      </div>
    </div>
  );
};

export default SignUpWelcome;
