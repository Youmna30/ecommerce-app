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
const BreadCrumb = ({ pageName }: { pageName: string }) => {
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
                Home
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-[#6A7282] text-sm font-medium">
            <span>/</span>
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage className="text-[#101828] font-medium text-sm">
              {pageName}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadCrumb;
