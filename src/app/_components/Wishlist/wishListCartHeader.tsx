import React from "react";

const wishListCartHeader = () => {
  return (
    <div className="hidden py-4 px-6 bg-[#F9FAFB] border-b border-[#F3F4F6] md:grid grid-cols-12 gap-4">
      <div className="col-span-6">
        <span className="text-[#6A7282] text-sm font-medium">Product</span>
      </div>
      <div className="col-span-2 justify-self-center">
        <span className="text-[#6A7282] text-sm font-medium ">Price</span>
      </div>
      <div className="col-span-2 justify-self-center">
        <span className="text-[#6A7282] text-sm font-medium">Status</span>
      </div>
      <div className="col-span-2 justify-self-center">
        <span className="text-[#6A7282] text-sm font-medium">Actions</span>
      </div>
    </div>
  );
};

export default wishListCartHeader;
