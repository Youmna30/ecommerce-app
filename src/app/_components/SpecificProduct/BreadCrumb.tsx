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
const BreadCrumb = ({ title }: { title: string }) => {
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
            <BreadcrumbLink asChild>
              <Link
                href="/categories"
                className="text-[#6A7282] text-sm font-medium hover:text-[#16a34a]!"
              >
                category name
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-[#6A7282] text-sm font-medium" />
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
