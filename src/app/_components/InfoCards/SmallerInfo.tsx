import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import { FaRotateLeft, FaTruckFast } from "react-icons/fa6";

const SmallerInfo = () => {
  return (
    <>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 bg-[#DCFCE7] text-[#16a34a] rounded-full flex items-center justify-center shrink-0">
          <FaTruckFast className="text-xl" />
        </div>
        <div>
          <h4 className="font-medium text-gray-900 text-sm">Free Delivery</h4>
          <p className="text-xs text-gray-500 font-medium">Orders over $50</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 bg-[#DCFCE7] text-[#16a34a] rounded-full flex items-center justify-center shrink-0">
          <FaRotateLeft />
        </div>
        <div>
          <h4 className="font-medium text-gray-900 text-sm">30 Days Return</h4>
          <p className="text-xs text-gray-500 font-medium">Money back</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 bg-[#DCFCE7] text-[#16a34a] rounded-full flex items-center justify-center shrink-0">
          <FaShieldAlt />
        </div>
        <div>
          <h4 className="font-medium text-gray-900 text-sm">Secure Payment</h4>
          <p className="text-xs text-gray-500 font-medium">100% Protected</p>
        </div>
      </div>
    </>
  );
};

export default SmallerInfo;
