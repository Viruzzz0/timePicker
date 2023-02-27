import { createContext, useState } from "react";

export const InputContext = createContext();

export function InputProvider({ children }) {
  const [inputValue, setInputValue] = useState({
    hours: 0,
    minute: 0,
    seconds: 0
  });
  return (
    <InputContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </InputContext.Provider>
  );
}
