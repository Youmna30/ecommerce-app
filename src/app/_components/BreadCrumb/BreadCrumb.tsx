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
const BreadCrumb = ({
  pageName,
  homeColor,
  homeHover,
  pageColor,
  separatorColor,
}: {
  pageName: string;
  homeColor: string;
  homeHover: string;
  pageColor: string;
  separatorColor: string;
}) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              href="/"
              className={`${homeColor} text-sm font-medium ${homeHover} flex items-center gap-1.5`}
            >
              Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator
          className={`${separatorColor} text-sm font-medium`}
        >
          <span>/</span>
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage className={`${pageColor} font-medium text-sm`}>
            {pageName}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumb;
