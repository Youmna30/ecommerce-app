import React from "react";
import { FaHeadset, FaShieldAlt } from "react-icons/fa";
import { MdLocalShipping, MdReplay } from "react-icons/md";

const InfoCards = () => {
  return (
    <div className=" bg-[#F9FAFB]">
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4  gap-4 px-4 py-8">
        <div className="bg-white p-4 rounded-2xl flex gap-4 items-center shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="bg-blue-50 text-blue-500 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
            <MdLocalShipping className="text-2xl" />
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
        <div className="bg-white p-4 rounded-2xl flex gap-4 items-center shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="bg-emerald-50 text-emerald-500 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
            <FaShieldAlt className="text-2xl" />
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
        <div className="bg-white p-4 rounded-2xl flex gap-4 items-center shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="bg-orange-50 text-orange-500 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
            <MdReplay className="text-2xl" />
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
        <div className="bg-white p-4 rounded-2xl flex gap-4 items-center shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="bg-purple-50 text-purple-500 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
            <FaHeadset className="text-2xl" />
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

export default InfoCards;
