import React from "react";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { MdHome } from "react-icons/md";
import { CategoryType } from "@/types/category.type";
import { SubCategoryType } from "@/types/subcategory.type";
const BreadCrumb = ({
  title,
  category,
  subcategories,
}: {
  title: string;
  category: CategoryType;
  subcategories: SubCategoryType[];
}) => {
  return (
    <div className="py-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link
                href="/"
                className="text-[#6A7282] text-sm font-medium hover:text-[#16a34a]! flex items-center gap-1.5"
              >
                <MdHome className="text-base" />
                Home
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-[#6A7282] text-sm font-medium" />
          <BreadcrumbItem>
            {/* we have to make the first one is category and the second one to loop over subcategories array */}
            <BreadcrumbLink asChild>
              <Link
                href={`/categories/${category._id}`}
                className="text-[#6A7282] text-sm font-medium hover:text-[#16a34a]!"
              >
                {category.name}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-[#6A7282] text-sm font-medium" />
          {subcategories.map((subcategory) => {
            return (
              <React.Fragment key={subcategory._id}>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link
                      href={`/categories/${subcategory._id}`}
                      className="text-[#6A7282] text-sm font-medium hover:text-[#16a34a]!"
                    >
                      {subcategory.name}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-[#6A7282] text-sm font-medium" />
              </React.Fragment>
            );
          })}
          <BreadcrumbItem>
            <BreadcrumbPage className="text-[#101828] font-medium text-sm">
              {title}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadCrumb;
