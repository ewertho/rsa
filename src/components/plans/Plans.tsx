"use client";
import Constants from "@/common/Constants";
import { usePlano } from "@/common/PlanoContext";
import ScrollAnimation from "react-animate-on-scroll";

export const Plans: React.FC = () => {
  const { selecionarPlano } = usePlano();

  const handlePlanoClick = (planoNome: string, planoTipo: string) => {
    selecionarPlano(`${planoNome} ${planoTipo}`);
  };

  return (
    <section id="plans" className="px-4 py-16 md:py-24 bg-gray-50">
      <div className="">
        <div className="text-center w-full mb-12">
          <h1 className="text-3xl md:text-5xl font-bold">
            <span className="text-gray-800">Planos </span>
            <span className="text-yellow-600">Flexíveis</span>
          </h1>
          <p className="pt-4 text-lg md:text-xl text-gray-500 font-normal max-w-2xl mx-auto">
            Escolha o melhor plano para você e sua família.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            *Consulte disponibilidade, preços podem variar por região
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Plano 1 Giga (Destaque) */}
          <ScrollAnimation
            animateIn="flipInY"
            animateOnce
            className="relative flex flex-col justify-between bg-gray-800 rounded-xl shadow-lg overflow-hidden border-2 border-yellow-500 transform hover:scale-105 transition-all duration-300"
          >
            <div className="absolute top-4 right-4">
              <span className="bg-yellow-500 text-gray-900 font-bold px-3 py-1 rounded-full text-xs uppercase">
                Melhor Escolha
              </span>
            </div>

            <div className="p-6 text-center">
              <h1 className="text-white font-bold text-6xl mb-2">
                {Constants.plano_4.nome}
              </h1>
              <h2 className="text-yellow-400 font-bold text-6xl mb-4">
                {Constants.plano_4.termincao}
              </h2>

              <div className="my-6">
                <p className="text-gray-300 text-3xl font-bold">
                  <span className="text-lg align-top">R$ </span>
                  {Constants.plano_4.preco}
                  <span className="text-gray-400 text-lg font-medium">
                    /mês
                  </span>
                </p>
              </div>

              <div className="border-t border-gray-700 my-4"></div>

              <div className="space-y-4 text-left">
                {Constants.plano_4.beneficios.map((beneficio, index) => (
                  <div key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-gray-300">{beneficio}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" className="block mt-8">
                <button
                  onClick={() =>
                    handlePlanoClick(
                      Constants.plano_4.nome,
                      Constants.plano_4.termincao
                    )
                  }
                  className="w-full py-3 bg-yellow-600 hover:bg-yellow-700 rounded-lg text-white font-semibold transition-colors duration-300 mt-8"
                >
                  Escolher Plano
                </button>
              </a>
            </div>
          </ScrollAnimation>

          {/* Plano 700 Mega */}
          <ScrollAnimation
            animateIn="flipInY"
            animateOnce
            className="bg-white rounded-xl  shadow-lg overflow-hidden border border-gray-200 transform hover:scale-105 transition-all duration-300"
          >
            <div className="p-6 text-center">
              <h1 className="text-gray-800 font-bold text-6xl mb-2">
                {Constants.plano_3.nome}
              </h1>
              <h2 className="text-gray-600 font-bold text-4xl mb-4">
                {Constants.plano_3.termincao}
              </h2>

              <div className="my-6">
                <p className="text-gray-800 text-2xl font-bold">
                  <span className="text-gray-500 text-lg align-top">R$ </span>
                  {Constants.plano_3.preco}
                  <span className="text-gray-500 text-lg font-medium">
                    /mês
                  </span>
                </p>
              </div>

              <div className="border-t border-gray-200 my-4"></div>

              <div className="space-y-4 text-left">
                {Constants.plano_3.beneficios.map((beneficio, index) => (
                  <div key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-gray-600">{beneficio}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" className="block mt-8">
                <button className="w-full py-3 bg-yellow-600 hover:bg-yellow-700 rounded-lg text-white font-semibold transition-colors duration-300">
                  Escolher Plano
                </button>
              </a>
            </div>
          </ScrollAnimation>

          {/* Plano 500 Mega */}
          <ScrollAnimation
            animateIn="bounceInRight"
            animateOnce
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transform hover:scale-105 transition-all duration-300"
          >
            <div className="p-6 text-center">
              <h1 className="text-gray-800 font-bold text-4xl mb-2">
                {Constants.plano_2.nome}
              </h1>
              <h2 className="text-gray-600 font-bold text-3xl mb-4">
                {Constants.plano_2.termincao}
              </h2>

              <div className="my-6">
                <p className="text-gray-800 text-2xl font-bold">
                  <span className="text-gray-500 text-lg align-top">R$ </span>
                  {Constants.plano_2.preco}
                  <span className="text-gray-500 text-lg font-medium">
                    /mês
                  </span>
                </p>
              </div>

              <div className="border-t border-gray-200 my-4"></div>

              <div className="space-y-4 text-left">
                {Constants.plano_2.beneficios.map((beneficio, index) => (
                  <div key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-gray-600">{beneficio}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" className="block mt-8">
                <button className="w-full py-3 bg-yellow-600 hover:bg-yellow-700 rounded-lg text-white font-semibold transition-colors duration-300">
                  Escolher Plano
                </button>
              </a>
            </div>
          </ScrollAnimation>

          {/* Plano 200 Mega */}
          <ScrollAnimation
            animateIn="bounceInLeft"
            animateOnce
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transform hover:scale-105 transition-all duration-300"
          >
            <div className="p-6 text-center">
              <h1 className="text-gray-800 font-bold text-4xl mb-2">
                {Constants.plano_1.nome}
              </h1>
              <h2 className="text-gray-600 font-bold text-3xl mb-4">
                {Constants.plano_1.termincao}
              </h2>

              <div className="my-6">
                <p className="text-gray-800 text-2xl font-bold">
                  <span className="text-gray-500 text-lg align-top">R$ </span>
                  {Constants.plano_1.preco}
                  <span className="text-gray-500 text-lg font-medium">
                    /mês
                  </span>
                </p>
              </div>

              <div className="border-t border-gray-200 my-4"></div>

              <div className="space-y-4 text-left">
                {Constants.plano_1.beneficios.map((beneficio, index) => (
                  <div key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-gray-600">{beneficio}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" className="block mt-8">
                <button className="w-full py-3 bg-yellow-600 hover:bg-yellow-700 rounded-lg text-white font-semibold transition-colors duration-300">
                  Escolher Plano
                </button>
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};
