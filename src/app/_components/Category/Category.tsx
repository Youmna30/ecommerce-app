import React from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { getAllCategories } from "@/services/category.service";
import CategoryCard from "./CategoryCard";

const Category = async () => {
  const data = await getAllCategories();
  //   console.log("categories--", data);
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-3">
          <div className=" bg-linear-to-b from-[#00BC7D] to-[#007A55] h-8 w-1.5 rounded-2xl"></div>
          <h2 className="font-bold text-2xl md:text-3xl">
            Shop By <span className="text-[#009966]">Category</span>
          </h2>
        </div>

        <Link
          href="/categories"
          className="flex items-center gap-2 font-medium text-[#16A34A] hover:text-[#15803d]"
        >
          View All Categories
          <FaArrowRightLong />
        </Link>
      </div>
      {data == null && (
        <div className="flex items-center justify-center font-semibold p-10 text-[#16A34A] text-2xl">
          No Categories
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {data?.map((category) => (
          <CategoryCard key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Category;
