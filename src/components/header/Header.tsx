"use client";
import Constants from "@/common/Constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import rsa from "../../assets/logos/rsa_no_bg.png";

const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center w-full h-20 px-8 text-white bg-[#484848] nav">
      <div className="flex items-center">
        <a
          className="link-underline link-underline-black flex items-center"
          href="#"
        >
          <Image src={rsa} alt="footer_logo" className="w-[4rem]" />
          <span className="text-5xl italic font-bold font-signature ml-2">
            RSA
          </span>
        </a>
      </div>

      <ul className="hidden md:flex">
        {Constants.links.map(({ id, link, ref }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-200 hover:scale-105 hover:text-white hover:bg-yellow-600 hover:rounded-2xl duration-200 link-underline"
          >
            <Link href={ref}>{link}</Link>
          </li>
        ))}
      </ul>

      <div className="rounded-2xl px-4 bg-yellow-600 capitalize text-white hover:text-white hover:scale-105 duration-200">
        <Link href={"#"}>Area do Cliente</Link>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {Constants.links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
