import { createContext } from "react";

// Definir o tipo para a prop isOpen no contexto
interface ContextProps {
  planSelected: string;
}

const Context = createContext<ContextProps>({
  planSelected: "",
});

export { Context };
