import React from "react";
import BrandsHeader from "../_components/Brands/BrandsHeader";
import BrandCard from "../_components/Brands/BrandCard";
import { getAllBrands } from "@/services/brand.service";

const page = async () => {
  const brands = await getAllBrands();

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="bg-linear-to-br from-[#7F22FE] via-[#8E51FF] to-[#C27AFF]">
        <div className="container mx-auto px-4 py-16 space-y-4">
          <BrandsHeader />
        </div>
      </div>
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
          {brands?.map((brand) => {
            return <BrandCard brand={brand} key={brand._id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
