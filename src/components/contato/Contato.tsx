"use client";

import { useState } from "react";

const Contato = () => {
  const planos = ["80 mega", "500 mega", "700 mega"];

  const [name, setName] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [plano, setPlano] = useState(planos[0]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const message = `Olá, meu nome é ${name}. Gostaria de contratar o plano ${plano}. Meus dados são:
    \nEndereço: ${endereco}
    \nTelefone: ${telefone}`;

    const url = `https://wa.me/21964015417?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <div
        id="contact"
        className="relative flex items-top justify-center min-h-screen w-full bg-white dark:bg-gray-900 sm:items-center max-lg:mt-6"
      >
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div className="mt-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <h1 className="text-4xl sm:text-5xl pl-5 text-gray-800 dark:text-yellow-600 text-center self-center font-extrabold tracking-tight">
                Assine Agora!
              </h1>
              <p className="text-normal text-lg sm:text-2xl p-5 font-medium md:ml-8 text-gray-600 dark:text-gray-400 mt-2">
                Basta preencher o cadastro que o quanto antes, um de nossos
                atendentes entrara em contato, para ativar sua nova internet.
              </p>
              <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                <h3 className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                  Ou se quiser pode entrar em contato por um desses telefones:
                </h3>
                <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    className="w-14 h-14 text-gray-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold">
                    RSA SERVIÇOS E COMÉRCIO LTDA RUA MAURICIO DE ABREU, 932 -
                    CEP: 24425-300 São Gonçalo - RJ
                  </div>
                </div>

                <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold">
                    (21) 3603-5787
                  </div>
                </div>

                <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold ">
                    (21)3703-6446
                  </div>
                </div>
                <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    21 96401-5417
                  </div>
                </div>
                <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    21 97703-0205
                  </div>
                </div>
              </div>

              <form
                className="px-6 flex flex-col justify-center"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col">
                  <label htmlFor="name" className="hidden">
                    Nome
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nome"
                    className="w-100 mt-2 py-3 px-3 rounded-lg dark:text-white bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label htmlFor="endereco" className="hidden">
                    Endereço
                  </label>
                  <input
                    type="text"
                    name="endereco"
                    id="endereco"
                    placeholder="Endereço"
                    className="w-100 mt-2 py-3 px-3 rounded-lg dark:text-white bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                    required
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label htmlFor="tel" className="hidden">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    placeholder="Telefone"
                    className="w-100 mt-2 py-3 px-3 rounded-lg dark:text-white bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    required
                  />
                </div>

                <div className="flex flex-col mt-4 mb-4">
                  <label className="py-1" htmlFor="plano">
                    Planos
                  </label>
                  <select
                    name="plano"
                    id="plano"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-400 font-semibold focus:border-indigo-500 focus:outline-none"
                    value={plano}
                    onChange={(e) => setPlano(e.target.value)}
                    required
                  >
                    {planos.map((valor, index) => (
                      <option key={index} value={valor}>
                        {valor}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="md:w-32 bg-yellow-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-yellow-900 transition ease-in-out duration-300"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contato;
