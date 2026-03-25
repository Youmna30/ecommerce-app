import Link from "next/link";
import React from "react";
import { CiUser } from "react-icons/ci";
import { FaPhoneAlt, FaTruck, FaUserPlus } from "react-icons/fa";
import { GiPresent } from "react-icons/gi";
import { MdMailOutline } from "react-icons/md";

const NavBarTop = () => {
  return (
    <div className="border-b border-gray-100 hidden lg:block">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-10 ">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 ">
              <FaTruck className="text-primary-600" />
              <span className="text-gray-500 font-medium text-sm">
                Free Shipping on Orders 500 EGP
              </span>
            </div>
            <div className="flex items-center gap-2 ">
              <GiPresent className="text-primary-600" />
              <span className="text-gray-500 font-medium text-sm">
                New Arrivals Daily
              </span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 font-medium text-sm text-[#6A7282] hover:text-[#16a34a] transition-colors">
                <FaPhoneAlt />
                <a href="tel:+1 (800) 123-4567">+1 (800) 123-4567</a>
              </div>
              <div className="flex items-center gap-1.5 font-medium text-sm text-[#6A7282] hover:text-[#16a34a] transition-colors">
                <MdMailOutline />
                <a href="mailto:support@freshcart.com">support@freshcart.com</a>
              </div>
            </div>
            <span className="w-px h-4 bg-gray-200"></span>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 font-medium text-sm text-[#6A7282] hover:text-[#16a34a] transition-colors">
                <CiUser />
                <Link href={"/login"}>Sign In</Link>
              </div>
              <div className="flex items-center gap-1.5 font-medium text-sm text-[#6A7282] hover:text-[#16a34a] transition-colors">
                <FaUserPlus />
                <Link href={"/signup"}>Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarTop;
