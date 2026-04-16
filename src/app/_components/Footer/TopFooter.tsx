import React from "react";
import { FaHeadset, FaShieldAlt } from "react-icons/fa";
import { MdLocalShipping, MdReplay } from "react-icons/md";

const TopFooter = () => {
  return (
    <div className=" bg-[#F0FDF4] border border-y-[#dcfce7]">
      <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-4  gap-6 px-4 py-8">
        <div className=" p-4 rounded-2xl flex gap-3 items-center">
          <div className="bg-[#DCFCE7] text-[#16A34A] w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
            <MdLocalShipping className="text-xl" />
          </div>
          <div>
            <h3 className="font-semibold text-sm text-[#1E2939]">
              Free Shipping
            </h3>
            <p className="font-medium text-xs text-[#6A7282]">
              On orders over 500 EGP
            </p>
          </div>
        </div>
        <div className=" p-4 rounded-2xl flex gap-3 items-center">
          <div className="bg-[#DCFCE7] text-[#16A34A] w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
            <FaShieldAlt className="text-xl" />
          </div>
          <div>
            <h3 className="font-semibold text-sm text-[#1E2939]">
              Secure Payment
            </h3>
            <p className="font-medium text-xs text-[#6A7282]">
              100% secure transactions
            </p>
          </div>
        </div>
        <div className=" p-4 rounded-2xl flex gap-3 items-center ">
          <div className="bg-[#DCFCE7] text-[#16A34A] w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
            <MdReplay className="text-xl" />
          </div>
          <div>
            <h3 className="font-semibold text-sm text-[#1E2939]">
              Easy Returns
            </h3>
            <p className="font-medium text-xs text-[#6A7282]">
              14-day return policy
            </p>
          </div>
        </div>
        <div className=" p-4 rounded-2xl flex gap-3 items-center ">
          <div className="bg-[#DCFCE7] text-[#16A34A] w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
            <FaHeadset className="text-xl" />
          </div>
          <div>
            <h3 className="font-semibold text-sm text-[#1E2939]">
              24/7 Support
            </h3>
            <p className="font-medium text-xs text-[#6A7282]">
              Dedicated support team
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
