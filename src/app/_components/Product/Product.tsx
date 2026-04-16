import { getAllProducts } from "@/services/product.service";
import React from "react";
import { ProductCard } from "./ProductCard";

const Product = async () => {
  const data = await getAllProducts();

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex items-center gap-3 mb-10">
        <div className=" bg-linear-to-b from-[#00BC7D] to-[#007A55] h-8 w-1.5 rounded-2xl"></div>
        <h2 className="font-bold text-2xl md:text-3xl">
          Featured <span className="text-[#009966]">Product</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {data?.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default Product;
