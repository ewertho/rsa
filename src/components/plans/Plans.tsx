"use client";
import Constants from "@/common/Constants";
import ScrollAnimation from "react-animate-on-scroll";

export const Plans: React.FC = () => {
  return (
    <section id="plans" className="px-4 ">
      <div className="min-h-screen w-full flex justify-center items-center">
        <div className="max-w-6xl w-full">
          <div className="text-center w-full font-semibold">
            <h1 className="text-3xl md:text-5xl">
              <span className="text-[#484848] tracking-wide">Planos </span>
              <span className="text-yellow-700">Flexiveis</span>
            </h1>
            <p className="pt-6 text-lg md:text-xl text-gray-400 font-normal w-full px-4 md:px-8">
              Escolha o melhor plano para você e
              <br className="hidden md:block" /> sua familia.
            </p>
            <p className="text-gray-300 font-bold">
              *Consulte disponibilidade, preços podem sofrer variação de acordo
              com região
            </p>
          </div>
          <div className="pt-12 md:pt-10 flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            {/* <!-- Basic Card --> */}

            <ScrollAnimation
              animateIn="bounceInLeft"
              animateOnce
              className="w-full md:w-1/3 p-8 bg-white text-center rounded-3xl shadow-xl"
            >
              <h1 className="text-black font-semibold text-3xl">
                {Constants.plano_1.nome}
              </h1>
              <p className="pt-2 tracking-wide">
                <span className="text-gray-400 align-top">R$ </span>
                <span className="text-2xl text-gray-400 font-semibold">
                  {Constants.plano_1.preco}
                </span>
                <span className="text-gray-400 font-medium">/ mês</span>
              </p>
              <hr className="mt-4 border-1" />
              <div className="pt-8">
                <p className="font-semibold text-gray-400 text-left">
                  <span className="material-icons align-middle">50%</span>
                  <span className="pl-2">
                    {" "}
                    <span className="text-black"> Upload garantido</span>
                  </span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="material-icons align-middle">
                    Internet para a{" "}
                  </span>
                  <span className="pl-2">
                    <span className="text-black">casa toda</span>
                  </span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="material-icons align-middle">
                    Estabilidade
                  </span>
                  <span className="pl-2">
                    <span className="text-black">para jogos</span> e streamings
                  </span>
                </p>

                <a href="#contact" className="">
                  <p className="w-full py-4 bg-yellow-600 mt-8 rounded-xl text-white">
                    <span className="font-medium">Escolher Plano</span>
                    {/* <span className="pl-2 material-icons align-middle text-sm">
                      east
                    </span> */}
                  </p>
                </a>
              </div>
            </ScrollAnimation>

            {/* <!-- StartUp Card --> */}
            <ScrollAnimation
              animateIn="flipInY"
              animateOnce
              className="w-full md:w-1/3 p-8 bg-gray-900 text-center rounded-3xl text-white border-4 shadow-xl  transform md:scale-125"
            >
              <h1 className="text-white font-semibold text-3xl">
                {Constants.plano_3.nome}
              </h1>
              <p className="pt-2 tracking-wide">
                <span className="text-gray-400 align-top">R$ </span>
                <span className="text-2xl font-semibold">
                  {Constants.plano_3.preco}
                </span>
                <span className="text-gray-400 font-medium">/ mês</span>
              </p>
              <hr className="mt-4 border-1 border-gray-600" />
              <div className="pt-8">
                <p className="font-semibold text-gray-400 text-left">
                  <span className="material-icons align-middle">50%</span>
                  <span className="pl-2">
                    {" "}
                    <span className="text-white"> Upload garantido</span>
                  </span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="material-icons align-middle">
                    Internet para a{" "}
                  </span>
                  <span className="pl-2">
                    <span className="text-white">casa toda</span>
                  </span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="material-icons align-middle">
                    Estabilidade para
                  </span>
                  <span className="pl-2">
                    <span className="text-white"> jogos</span> e{" "}
                    <span className="text-white"> streamings</span>{" "}
                  </span>
                </p>

                <a href="#contact" className="">
                  <p className="w-full py-4 bg-yellow-600 mt-8 rounded-xl text-white">
                    <span className="font-medium">Escolher plano</span>
                    {/* <span className="pl-2 material-icons align-middle text-sm">
                      east
                    </span> */}
                  </p>
                </a>
              </div>
              <div className="absolute top-4 right-4">
                <p className="bg-yellow-500 shadow font-semibold px-4 py-1 mb-10 rounded-full uppercase text-xs">
                  Melhor Escolha
                </p>
              </div>
            </ScrollAnimation>
            {/* <!-- Enterprise Card --> */}
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOnce
              className="w-full md:w-1/3 p-8 bg-white text-center rounded-3xl shadow-xl"
            >
              <h1 className="text-black font-semibold text-3xl">
                {Constants.plano_2.nome}
              </h1>
              <p className="pt-2 tracking-wide">
                <span className="text-gray-400 align-top">R$ </span>
                <span className="text-2xl text-gray-400 font-semibold">
                  {Constants.plano_2.preco}
                </span>
                <span className="text-gray-400 font-medium">/ mês</span>
              </p>
              <hr className="mt-4 border-1" />
              <div className="pt-8">
                <p className="font-semibold text-gray-400 text-left">
                  <span className="material-icons align-middle">50%</span>
                  <span className="pl-2">
                    {" "}
                    <span className="text-black"> Upload garantido</span>
                  </span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="material-icons align-middle">
                    Internet para a{" "}
                  </span>
                  <span className="pl-2">
                    <span className="text-black">casa toda</span>
                  </span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="material-icons align-middle">
                    Estabilidade
                  </span>
                  <span className="pl-2">
                    <span className="text-black">para jogos</span> e streamings
                  </span>
                </p>

                <a href="#contact" className="">
                  <p className="w-full py-4 bg-yellow-600 mt-8 rounded-xl text-white">
                    <span className="font-medium">Escolher plano</span>
                    {/* <span className="pl-2 material-icons align-middle text-sm">
                      east
                    </span> */}
                  </p>
                </a>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};
