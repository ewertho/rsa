// context/PlanoContext.tsx
"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type PlanoContextType = {
  planoSelecionado: string;
  selecionarPlano: (plano: string) => void;
  getPlanoFormatado: () => string;
};

const PlanoContext = createContext<PlanoContextType | undefined>(undefined);

export function PlanoProvider({ children }: { children: ReactNode }) {
  const [planoSelecionado, setPlanoSelecionado] = useState("1 Giga");

  const selecionarPlano = (plano: string) => {
    setPlanoSelecionado(plano);
    // Rolar suavemente até o formulário
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const getPlanoFormatado = () => {
    return planoSelecionado;
  };

  return (
    <PlanoContext.Provider
      value={{ planoSelecionado, selecionarPlano, getPlanoFormatado }}
    >
      {children}
    </PlanoContext.Provider>
  );
}

export function usePlano() {
  const context = useContext(PlanoContext);
  if (context === undefined) {
    throw new Error("usePlano must be used within a PlanoProvider");
  }
  return context;
}
