"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import links from "../../utils/NavLinkes";
import logo from "/public/logo.png";
// import MaxWidthWrapper from '../../lib/MaxWidthWrapper';
// import Bluebtn from '../../utils/BlueBtn';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full py-5 md:py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src={logo}
            alt="logo image"
            width={200}
            height={200}
            className="md:w-40 w-24"
          />
        </Link>

        <div className="hidden sm:flex space-x-4 items-center">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx({
                "text-blue-500": pathname === link.href,
              })}
            >
              <p className="text-lg font-medium hover:text-blue-400 duration-300 md:flex-none md:justify-start md:p-2 md:px-3">
                {link.name}
              </p>
            </Link>
          ))}

          {/* <Bluebtn label='Sign Up' href='/sign-up' /> */}
        </div>

        {/* authentication btn */}
        <div className="hidden md:block">
          <Link className="px-4 py-2 text-lg font-medium" href="/login">
            Login
          </Link>

          <Link
            className="border-2 border-blue-200 rounded px-4 py-2 text-lg font-medium"
            href="/sign-up"
          >
            Sign Up
          </Link>
        </div>

        <div className="sm:hidden">
          <div className="focus:outline-none" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <AiOutlineClose className="w-8 h-8" />
            ) : (
              <AiOutlineMenuUnfold className="w-8 h-8" />
            )}
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="w-full h-full absolute top-16 text-xl font-semibold px-20 bg-white p-2 space-y-2 right-2">
            {links.map((link) => (
              <Link key={link.name} href={link.href}>
                <p className="text-lg text-center border-b-2 py-2 rounded hover:text-blue-500 duration-300">
                  {link.name}
                </p>
              </Link>
            ))}

            <div className="flex justify-center items-center">
              <Link className="px-4 py-2 text-lg font-medium" href="/login">
                Login
              </Link>

              <Link
                className="border-2 border-blue-200 rounded px-4 py-2 text-lg font-medium"
                href="/sign-up"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
