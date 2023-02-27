import "./InputTime.css";
import { useState } from "react";
import useInput from "../hooks/useInput";

export default function InputTime({ value, type }) {
  const { setInputFilter } = useInput();

  const handleInput = (event) => {
    const numValit = event.target.value;
    const fn =
      type === "hours"
        ? (prevState) => ({ ...prevState, hours: numValit })
        : (prevState) => ({ ...prevState, minute: numValit });
    setInputFilter(fn);
  };

  return (
    <div className="input-conteiner">
      <input
        type="text"
        placeholder="00"
        maxlength="2"
        onChange={handleInput}
        // value={type === "hours" ? inputValue.hours : inputValue.minutes}
        value={value}
      />
    </div>
  );
}
