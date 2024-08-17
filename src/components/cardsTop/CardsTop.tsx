"use client";

// import imageBackground from "@/assets/images/pexels-thirdman-5257759.jpg";
// import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";
import { FaAward, FaFingerprint, FaStar } from "react-icons/fa";

export const CardsTop = () => {
  return (
    <section className="relative w-full bg-blueGray-50">
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div className="absolute top-0 w-full h-full bg-center bg-cover">
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
          {/* <Image
            src={imageBackground}
            alt="footer_logo"
            className="w-full h-full overflow-y-hidden"
          /> */}
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">
                  Sua nova Internet, do jeito que você jamais imaginou
                </h1>
                {/* <p className="mt-4 text-lg text-blueGray-200">
                  This is a simple example of a Landing Page you can build using
                  Notus JS. It features multiple CSS components based on the
                  Tailwind CSS design system.
                </p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px">
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <section className="pb-10 bg-blueGray-200 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <ScrollAnimation
              animateIn="bounceInDown"
              animateOut="bounceOutUp"
              animateOnce={true}
              className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center"
            >
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <FaAward />
                  </div>
                  <h6 className="text-xl text-gray-600 font-semibold">
                    Confiabilidade
                  </h6>
                  <p className="mt-2 text-gray-600 mb-4 text-blueGray-500">
                    Empresa de tradição a varios anos no ramo de
                    telecomunicações.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeIn"
              animateOnce
              className="w-full md:w-4/12 px-4 text-center animate__bounce"
            >
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 bg-amber-500 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                    <FaStar />
                  </div>
                  <h6 className="text-xl text-gray-600 font-semibold">
                    Qualidade
                  </h6>
                  <p className="mt-2 text-gray-600 mb-4 text-blueGray-500">
                    Profissionais experientes, os melhores materiais e suporte
                    sempre ativo, para você ter a melhor cobertura possivel.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="bounceInUp"
              animateOut="bounceOutDown"
              animateOnce
              className="pt-6 w-full md:w-4/12 px-4 text-center "
            >
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                    <FaFingerprint />
                  </div>
                  <h6 className="text-xl text-gray-600 font-semibold">
                    Identidade
                  </h6>
                  <p className="mt-2 text-gray-600 mb-4 text-blueGray-500">
                    Nascida em Niteroi, a RSA é a empresa que entende as
                    necessidades do Niteroiense e esta sempre proxima de você
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </section>
  );
};
