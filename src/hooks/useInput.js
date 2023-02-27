import { useContext } from "react";
import { InputContext } from "../context/inputManager";

export default function useInput() {
  const { inputValue, setInputValue } = useContext(InputContext);

  const setInputFilter = (num) => {
    // if (num >= 0 && num <= 60) {
    setInputValue(num);
    // }
  };

  return { inputValue, setInputFilter };
}
