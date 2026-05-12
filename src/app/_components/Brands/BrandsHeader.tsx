import React from "react";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import { FaTags } from "react-icons/fa6";

const BrandsHeader = () => {
  return (
    <>
      <BreadCrumb
        pageName="Brands"
        homeColor="text-white/70"
        separatorColor="text-white/70"
        homeHover="hover:text-white"
        pageColor="text-white"
      />
      <div className="flex items-center gap-5">
        <div className="size-16 rounded-2xl text-white bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
          <FaTags className="text-3xl" />
        </div>
        <div>
          <h1 className="text-white text-4xl font-bold">Top Brands</h1>
          <p className="text-white/80 font-medium text-base mt-1">
            Shop from your favorite brands
          </p>
        </div>
      </div>
    </>
  );
};

export default BrandsHeader;
