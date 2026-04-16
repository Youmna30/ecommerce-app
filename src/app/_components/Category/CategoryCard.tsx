import { CategoryType } from "@/types/category.type";
import Link from "next/link";
import React from "react";

interface CategoryPropsType {
  category: CategoryType;
}

const CategoryCard = ({ category }: CategoryPropsType) => {
  const { _id, image, slug, name } = category;
  return (
    <Link
      href={`/categories/${_id}`}
      className="rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition"
    >
      <div className="size-20 rounded-full overflow-hidden flex items-center justify-center">
        <img src={image} alt={slug} className="w-full h-full object-cover" />
      </div>
      <h3 className="font-medium mt-3 text-[#364153]">{name}</h3>
    </Link>
  );
};

export default CategoryCard;
