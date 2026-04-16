import React from "react";
import logo from "@/images/logo.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import { MdPayment } from "react-icons/md";
const Footer = () => {
  return (
    <div className="bg-[#101828] ">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <Link
              href={"/"}
              className="bg-white w-49.25 h-12 flex items-center justify-center rounded-lg"
            >
              <img src={logo.src} alt="logo" />
            </Link>
            <p className="text-[#99A1AF] font-medium text-sm mt-6">
              FreshCart is your one-stop destination for quality products. From
              fashion to electronics, we bring you the best brands at
              competitive prices with a seamless shopping experience.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href="tel:+18001234567"
                className="text-[#99A1AF] font-medium text-sm flex items-center gap-2"
              >
                <FaPhoneAlt className="text-[#22C55E]" />
                +1 (800) 123-4567
              </a>
              <a
                href="mailto:support@freshcart.com"
                className="text-[#99A1AF] font-medium text-sm flex items-center gap-2"
              >
                <IoMdMail className="text-[#22C55E]" />
                support@freshcart.com
              </a>
              <span className="text-[#99A1AF] font-medium text-sm flex items-center gap-2">
                <FaLocationDot className="text-[#22C55E]" />
                123 Commerce Street, New York, NY 10001
              </span>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <Link
                href={"/"}
                className="size-10 bg-[#1E2939] rounded-full flex items-center justify-center hover:bg-[#16a34a] text-[#99A1AF] hover:text-white transition-colors"
              >
                <FaFacebookF />
              </Link>
              <Link
                href={"/"}
                className="size-10 bg-[#1E2939] rounded-full flex items-center justify-center hover:bg-[#16a34a] text-[#99A1AF] hover:text-white transition-colors"
              >
                <FaTwitter />
              </Link>
              <Link
                href={"/"}
                className="size-10 bg-[#1E2939] rounded-full flex items-center justify-center hover:bg-[#16a34a] text-[#99A1AF] hover:text-white transition-colors"
              >
                <FaInstagram />
              </Link>
              <Link
                href={"/"}
                className="size-10 bg-[#1E2939] rounded-full flex items-center justify-center hover:bg-[#16a34a] text-[#99A1AF] hover:text-white transition-colors"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white text-lg mb-5">Shop</h4>
            <div className="flex flex-col gap-3">
              <Link
                href={"/products"}
                className="text-[#99A1AF] text-sm hover:text-[#16a34a] font-medium"
              >
                All Products
              </Link>
              <Link
                href={"/products"}
                className="text-[#99A1AF] text-sm hover:text-[#16a34a] font-medium"
              >
                Categories
              </Link>
              <Link
                href={"/products"}
                className="text-[#99A1AF] text-sm hover:text-[#16a34a] font-medium"
              >
                Brands
              </Link>
              <Link
                href={"/products"}
                className="text-[#99A1AF] text-sm hover:text-[#16a34a] font-medium"
              >
                Electronics
              </Link>
              <Link
                href={"/products"}
                className="text-[#99A1AF] text-sm hover:text-[#16a34a] font-medium"
              >
                Men's Fashion
              </Link>
              <Link
                href={"/products"}
                className="text-[#99A1AF] text-sm hover:text-[#16a34a] font-medium"
              >
                Women's Fashion
              </Link>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white text-lg mb-5">Account</h4>
            <div className="flex flex-col gap-3">
              <Link
                href={"/products"}
                className="text-[#99A1AF] text-sm hover:text-[#16a34a] font-medium"
              >
                My Account
              </Link>
              <Link
                href={"/products"}
                className="text-[#99A1AF] text-sm hover:text-[#16a34a] font-medium"
              >
                Order History
              </Link>
              <Link
                href={"/products"}
                className="text-[#99A1AF] text-sm hover:text-[#16a34a] font-medium"
              >
                Wishlist
              </Link>
              <Link
                href={"/products"}
                className="text-[#99A1AF] text-sm hover:text-[#16a34a] font-medium"
              >
                Shopping Cart
              </Link>
              <Link
                href={"/products"}
                className="text-[#99A1AF] text-sm hover:text-[#16a34a] font-medium"
              >
                Sign In
              </Link>
              <Link
                href={"/products"}
                className="text-[#99A1AF] text-sm hover:text-[#16a34a] font-medium"
              >
                Create Account
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white text-lg mb-5">Support</h4>
            <div className="flex flex-col gap-3">
              <Link
                href={"/products"}
                className="text-[#99A1AF] text-sm hover:text-[#16a34a] font-medium"
              >
                Contact Us
              </Link>
              <Link
                href={"/products"}
                className="text-[#99A1AF] text-sm hover:text-[#16a34a] font-medium"
              >
                Help Center
              </Link>
              <Link
                href={"/products"}
                className="text-[#99A1AF] text-sm hover:text-[#16a34a] font-medium"
              >
                Shipping Info
              </Link>
              <Link
                href={"/products"}
                className="text-[#99A1AF] text-sm hover:text-[#16a34a] font-medium"
              >
                Returns & Refunds
              </Link>
              <Link
                href={"/products"}
                className="text-[#99A1AF] text-sm hover:text-[#16a34a] font-medium"
              >
                Track Order
              </Link>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white text-lg mb-5">Legal</h4>
            <div className="flex flex-col gap-3">
              <Link
                href={"/products"}
                className="text-[#99A1AF] text-sm hover:text-[#16a34a] font-medium"
              >
                Privacy Policy
              </Link>
              <Link
                href={"/products"}
                className="text-[#99A1AF] text-sm hover:text-[#16a34a] font-medium"
              >
                Terms of Service
              </Link>
              <Link
                href={"/products"}
                className="text-[#99A1AF] text-sm hover:text-[#16a34a] font-medium"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-t-[#1E2939]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 container mx-auto px-4 py-6">
          <p className="text-[#6A7282] font-medium text-sm">
            © 2026 FreshCart. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-[#6A7282] inline-flex items-center gap-2 font-medium text-sm">
              <MdPayment className="text-lg" />
              Visa
            </span>
            <span className="text-[#6A7282] inline-flex items-center gap-2 font-medium text-sm">
              <MdPayment className="text-lg" />
              Master
            </span>
            <span className="text-[#6A7282] inline-flex items-center gap-2 font-medium text-sm">
              <MdPayment className="text-lg" />
              PayPal
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
