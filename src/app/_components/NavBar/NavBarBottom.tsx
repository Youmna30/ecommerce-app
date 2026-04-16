"use client";

import React, { useContext } from "react";
import logo from "@/images/logo.svg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { IoCart, IoSearchOutline, IoSearchSharp } from "react-icons/io5";
import Link from "next/link";
import { MdHeadsetMic } from "react-icons/md";
import { FaBoxOpen, FaRegAddressBook, FaRegHeart } from "react-icons/fa";
import { FaBars, FaCartShopping, FaHeadset } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { CiHeart } from "react-icons/ci";

import { LuHeart, LuUser } from "react-icons/lu";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CgProfile } from "react-icons/cg";
import { FiLogOut, FiUser } from "react-icons/fi";
import { IoIosHeartEmpty, IoMdHeartEmpty, IoMdSettings } from "react-icons/io";
import { PiSignOutBold } from "react-icons/pi";
import { cartContext } from "@/app/_contexts/CartContextProvider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const NavBarBottom = () => {
  const session = useSession();
  const { numberOfCartItems } = useContext(cartContext);
  function handleSignout() {
    signOut({ redirect: true, callbackUrl: "/login" });
  }
  return (
    <div className="bg-white sticky top-0 z-10 shadow-sm">
      <div className="container mx-auto px-4 h-18 flex items-center justify-between gap-4">
        <Link href={"/"} className="shrink-0">
          <img src={logo.src} alt="logo" />
        </Link>
        <div className="relative w-full hidden lg:block max-w-lg">
          <input
            type="text"
            placeholder="Search for products, brands and more..."
            className="border border-[#E5E7EB] px-5 py-3 rounded-full w-full focus:bg-white focus:outline-none focus:ring-[#bee7cd] focus:ring-2  focus:shadow-2xl focus:border-[#22c55e] transition-all text-sm"
          />
          <button className="absolute right-1.5 top-1/2 -translate-y-1/2 size-9 bg-[#16a34a] text-white rounded-full! flex items-center justify-center">
            <IoSearchSharp />
          </button>
        </div>
        <NavigationMenu className="hidden xl:flex items-center gap-6">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} hover:bg-transparent hover:text-[#16a34a] font-medium text-[#364153] text-lg`}
              >
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} hover:bg-transparent hover:text-[#16a34a] font-medium text-[#364153] text-md`}
              >
                <Link href="/shop">Shop</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:bg-transparent data-[state=open]:bg-transparent! data-[open=true]:bg-transparent! cursor-pointer hover:text-[#16a34a] font-medium text-[#364153] text-md">
                Categories
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-96">
                  <ListItem href="/docs" title="Introduction">
                    Re-usable components built with Tailwind CSS.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Typography"
                  >
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} hover:bg-transparent hover:text-[#16a34a] font-medium text-[#364153] text-md`}
              >
                <Link href="/">Brands</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-1">
          <Link
            href={"#"}
            className=" hidden lg:flex items-center justify-center gap-2 pr-3 mr-2 border-r border-gray-200 hover:opacity-80 transition-opacity"
          >
            <div className="size-10 rounded-full text-primary-600 bg-[#f0fdf4] flex items-center justify-center">
              <MdHeadsetMic />
            </div>
            <div className="text-xs ">
              <p className="font-medium text-[#99A1AF]">Support</p>
              <p className="font-semibold text-[#364153] whitespace-nowrap">
                24/7 Help
              </p>
            </div>
          </Link>
          <Link
            href={"/"}
            className="p-2.5 rounded-full hover:bg-gray-100 transition-colors"
          >
            <FaRegHeart className="text-xl text-gray-500 hover:text-[#16a34a] transition-colors" />
          </Link>
          <Link
            href={"/cart"}
            className="p-2.5 rounded-full hover:bg-gray-100 transition-colors relative"
          >
            <FaCartShopping className="text-xl text-gray-500 hover:text-[#16a34a] transition-colors" />
            {numberOfCartItems > 0 && (
              <span className="absolute top-0 right-0 size-4.5 rounded-full bg-[#16a34a] text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">
                {numberOfCartItems}
              </span>
            )}
          </Link>
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="size-10 rounded-full bg-[#16A34A] text-white cursor-pointer border-0 hover:bg-[#15803d] hover:text-white transition "
                >
                  <FaBars />
                </Button>
              </SheetTrigger>
              <SheetContent
                showCloseButton={false}
                className=" w-80 max-w-[85vw]"
              >
                <SheetHeader className="p-4 border-b border-[#F3F4F6] flex-row items-center justify-between">
                  <SheetTitle>
                    <img src={logo.src} alt="logo" />
                  </SheetTitle>
                  <SheetClose className="size-9 rounded-full bg-[#F3F4F6] text-[#4A5565] flex items-center justify-center hover:bg-gray-200 cursor-pointer">
                    <RxCross2 className="text-xl" />
                  </SheetClose>
                </SheetHeader>
                <form className="p-4 border-b border-gray-100">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#22c55e]/20 focus:border-[#22c55e] text-sm"
                    />
                    <button
                      type="submit"
                      className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-[#16a34a] text-white flex items-center justify-center"
                    >
                      <IoSearchOutline />
                    </button>
                  </div>
                </form>
                <div className="p-4">
                  <div className="space-y-1">
                    <SheetClose asChild>
                      <Link
                        href="/"
                        className="block py-3 px-4 rounded-xl text-base font-medium text-[#364153] hover:text-[#16a34a] hover:bg-[#f0fdf4]"
                      >
                        Home
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/shop"
                        className="block py-3 px-4 rounded-xl text-base font-medium text-[#364153] hover:text-[#16a34a] hover:bg-[#f0fdf4]"
                      >
                        Shop
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/categories"
                        className="block py-3 px-4 rounded-xl text-base font-medium text-[#364153] hover:text-[#16a34a] hover:bg-[#f0fdf4]"
                      >
                        Categories
                      </Link>
                    </SheetClose>

                    <SheetClose asChild>
                      <Link
                        href="/brands"
                        className="block py-3 px-4 rounded-xl text-base font-medium text-[#364153] hover:text-[#16a34a] hover:bg-[#f0fdf4]"
                      >
                        Brands
                      </Link>
                    </SheetClose>
                  </div>
                </div>
                <div className="space-y-1 mx-4 py-4 border-t border-gray-100">
                  <SheetClose asChild>
                    <Link
                      href="/whishlist"
                      className="flex items-center gap-2 py-3 px-4 rounded-xl text-base font-medium text-[#364153] hover:text-[#16a34a] hover:bg-[#f0fdf4]"
                    >
                      <span className="size-9 rounded-full text-lg text-red-500 bg-red-50 flex items-center justify-center">
                        <IoMdHeartEmpty />
                      </span>
                      Wishlist
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/cart"
                      className="flex items-center gap-2 py-3 px-4 rounded-xl text-base font-medium text-[#364153] hover:text-[#16a34a] hover:bg-[#f0fdf4]"
                    >
                      <span className="size-9 rounded-full text-lg text-[#16a34a] bg-[#f0fdf4] flex items-center justify-center">
                        <IoCart />
                      </span>
                      Cart
                    </Link>
                  </SheetClose>
                </div>
                <div className="space-y-1 mx-4 py-4 border-t border-gray-100">
                  {session.data ? (
                    <div>
                      <SheetClose asChild>
                        <Link
                          className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#364153] font-medium hover:bg-[#f0fdf4] transition-colors"
                          href="/profile"
                        >
                          <span className="size-9 rounded-full flex items-center justify-center bg-[#F3F4F6] text-[#6A7282] text-xl">
                            <FiUser />
                          </span>
                          {session.data?.user?.name}
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <button
                          className="w-full cursor-pointer flex items-center gap-2 px-4 py-3 rounded-xl  text-red-500 font-medium hover:bg-red-50 transition-colors"
                          onClick={handleSignout}
                        >
                          <span className="size-9 rounded-full flex items-center justify-center bg-red-50 text-red-500 text-xl">
                            <FiLogOut />
                          </span>
                          Sign Out
                        </button>
                      </SheetClose>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <SheetClose asChild>
                        <Link
                          className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#16a34a] text-white font-semibold hover:bg-[#15803d] transition-colors"
                          href="/login"
                        >
                          Sign In
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link
                          className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-[#16a34a] text-[#16a34a] font-semibold hover:bg-[#f0fdf4] transition-colors"
                          href="/signup"
                        >
                          Sign Up
                        </Link>
                      </SheetClose>
                    </div>
                  )}
                </div>
                <Link
                  className="mx-4 mt-2 p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-3 hover:bg-[#f0fdf4] transition-colors"
                  href="/contact"
                >
                  <div className="w-10 h-10 rounded-full bg-[#dcfce7] text-[#16a34a] text-xl flex items-center justify-center">
                    <FaHeadset />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">
                      Need Help?
                    </p>
                    <p className="text-sm font-medium text-[#16a34a]">
                      Contact Support
                    </p>
                  </div>
                </Link>
              </SheetContent>
            </Sheet>
          </div>
          {session.data ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="hidden lg:block group border-0 rounded-full cursor-pointer transition-colors"
                >
                  <CgProfile className="size-5 text-gray-500 group-hover:text-[#16a34a] transition-colors" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-60 border border-gray-100 p-0 mt-2"
                align="end"
              >
                <DropdownMenuGroup className="py-2">
                  <DropdownMenuLabel className="flex items-center gap-2 p-3">
                    <div className="rounded-full size-10 bg-[#dcfce7] flex items-center justify-center">
                      <CgProfile className="text-xl text-[#16a34a] " />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800 truncate">
                        {session.data.user?.name}
                      </p>
                      <p className="text-xs text-gray-400 truncate">
                        {session.data.user?.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />

                  <DropdownMenuItem className="flex items-center gap-3 px-4 py-2.5 font-medium text-sm text-gray-600 hover:text-[#16a34a]! hover:bg-[#f0fdf4]! transition-colors cursor-pointer">
                    <FiUser className="text-gray-400" />
                    <Link href={"/profile"}> My Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-3 px-4 py-2.5 font-medium text-sm text-gray-600 hover:text-[#16a34a]! hover:bg-[#f0fdf4]! transition-colors cursor-pointer">
                    <FaBoxOpen className="text-gray-400" />
                    <Link href={"/orders"}> My Orders</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-3 px-4 py-2.5 font-medium text-sm text-gray-600 hover:text-[#16a34a]! hover:bg-[#f0fdf4]! transition-colors cursor-pointer">
                    <FaRegHeart className="text-gray-400" />
                    <Link href={"/profile"}> My Whishlist</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-3 px-4 py-2.5 font-medium text-sm text-gray-600 hover:text-[#16a34a]! hover:bg-[#f0fdf4]! transition-colors cursor-pointer">
                    <FaRegAddressBook className="text-gray-400" />
                    <Link href={"/profile"}>Addresses</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-3 px-4 py-2.5 font-medium text-sm text-gray-600 hover:text-[#16a34a]! hover:bg-[#f0fdf4]! transition-colors cursor-pointer">
                    <IoMdSettings className="text-gray-400" />
                    <Link href={"/profile"}> Settings</Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup className="py-2">
                  <button
                    onClick={handleSignout}
                    className="w-full flex items-center gap-3 px-4 py-2.5 font-medium text-sm text-red-500 hover:text-red-500 hover:bg-red-50! transition-colors cursor-pointer"
                  >
                    <PiSignOutBold className="text-red-500" />
                    Sign Out
                  </button>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div>
              <Link
                href={"/login"}
                className="hidden lg:flex items-center gap-2 bg-[#16a34a] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm hover:bg-[#15803d] transition-colors whitespace-nowrap"
              >
                <LuUser className="text-sm" />
                Sign In
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
export default NavBarBottom;
