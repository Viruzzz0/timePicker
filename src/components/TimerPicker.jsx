import React from "react";
import InputTime from "./InputTime";
import useInput from "../hooks/useInput";
import "./TimerPicker.css";

export default function TimePicker() {
  const { inputValue } = useInput();
  console.log({ inputValue });

  return (
    <div className="timer-picker">
      <div className="arrow-conteiner">
        <div className="arrow-column">
          <div>▲</div>
        </div>
        <div className="arrow-column">
          <div>▲</div>
        </div>
        <div className="arrow-column">
          <div>▲</div>
        </div>
      </div>
      <div className="input-conteiner">
        <div className="input">
          <div className="num-input">
            <InputTime value={inputValue.hours} type={"hours"} />
          </div>

          <div className="time-div">
            <div>:</div>
          </div>

          <div className="num-input">
            <InputTime value={inputValue.minute} type={"minute"} />
          </div>

          <div className="time-div">
            <div>:</div>
          </div>

          <div className="num-input">
            <InputTime value={inputValue.seconds} type={"seconds"} />
          </div>
        </div>
      </div>
      <div className="arrow-conteiner">
        <div className="arrow-column">
          <div>▼</div>
        </div>
        <div className="arrow-column">
          <div>▼</div>
        </div>
        <div className="arrow-column">
          <div>▼</div>
        </div>
      </div>
    </div>
  );
}
