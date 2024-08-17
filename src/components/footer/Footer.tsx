"use client";
import Image from "next/image";

import Constants from "@/common/Constants";
import Link from "next/link";
import anatel from "../../assets/logos/anatel.png";
import rsa from "../../assets/logos/rsa1.jpg";

function Footer() {
  // const iconsTab = [
  //   { icon: <FaFacebookF /> },
  //   { icon: <FaWhatsapp /> },
  //   { icon: <IoLogoInstagram /> },
  // ];

  return (
    <>
      <footer className="bg-[#484848] w-full p-5">
        <div className="container mx-auto">
          {/* footer div all */}
          <div className="flex justify-between flex-col sm:flex-row  items-center   max-sm:gap-[5rem] text-left">
            {/* logo side */}
            <div className="flex flex-col  md:p-5 py-4 gap-8">
              <Image src={anatel} alt="footer_logo" className="w-[8rem]" />
            </div>
            <div className="flex flex-col  md:p-5 py-4 gap-8">
              <Image src={rsa} alt="footer_logo" className="w-[14rem]" />
            </div>
            {/* <div className="flex gap-8 text-[18px] pl-8 text-[#646464] justify-center md:justify-start">
              {iconsTab.map(({ icon }, index) => (
                <div
                  key={index}
                  className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-[#fcdd09] hover:text-black"
                  style={{ transition: "all 0.3s" }}
                >
                  {icon}
                </div>
              ))}
            </div> */}

            {/* middle div */}
            <div className="flex flex-row gap-8 relative md:mt-12 my-10">
              <p className="text-[22px] font-bold footer-main md:pr-4 ">
                Links Uteis
              </p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#fcdd09]"></span>
              {Constants.links.map(({ id, link, ref }) => (
                <Link href={ref} key={id}>
                  <p className="text-[16px] duration-200 hover:text-[#fcdd09] cursor-pointer text-white font-medium hover:font-bold">
                    {link}
                  </p>
                </Link>
              ))}
            </div>

            {/* middle div */}
            <span></span>
          </div>
        </div>
        <hr />
        <div className="pt-3  text-white">
          <div className="text-center">
            <p>
              Copyright © 2024 -
              <a className="font-semibold" href="mailto:m.sohanemon@gmail.com">
                Desenvolvido por: ELFEB SOLUTIONS
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
