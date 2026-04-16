"use client";
import Link from "next/link";
import React from "react";
import { FaPhoneAlt, FaTruck, FaUserPlus } from "react-icons/fa";
import { GiPresent } from "react-icons/gi";
import { MdMailOutline } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { signOut, useSession } from "next-auth/react";
import { PiSignOutBold } from "react-icons/pi";

const NavBarTop = () => {
  const session = useSession();
  function handleSignout() {
    signOut({ redirect: true, callbackUrl: "/login" });
  }

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
            <div className="flex items-center gap-4 pr-7 border-r border-gray-200">
              <div className="flex items-center gap-1.5 font-medium text-sm text-[#6A7282] hover:text-[#16a34a] transition-colors">
                <FaPhoneAlt />
                <a href="tel:+1 (800) 123-4567">+1 (800) 123-4567</a>
              </div>
              <div className="flex items-center gap-1.5 font-medium text-sm text-[#6A7282] hover:text-[#16a34a] transition-colors">
                <MdMailOutline />
                <a href="mailto:support@freshcart.com">support@freshcart.com</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {session.data ? (
                <>
                  <div className="flex items-center gap-1.5 font-medium text-sm text-[#4A5565] hover:text-[#16a34a] transition-colors cursor-pointer">
                    <FiUser />
                    <span>{session.data.user?.name}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium text-sm text-[#4A5565] hover:text-[#16a34a] transition-colors">
                    <PiSignOutBold />
                    <button onClick={handleSignout} className="cursor-pointer">
                      Sign Out
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-1.5 font-medium text-sm text-[#4A5565] hover:text-[#16a34a] transition-colors cursor-pointer">
                    <FiUser />
                    <Link href={"/login"}>Sign In</Link>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium text-sm text-[#4A5565] hover:text-[#16a34a] transition-colors cursor-pointer">
                    <FaUserPlus />
                    <Link href={"/signup"}>Sign Up</Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarTop;
