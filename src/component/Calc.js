import "../component/Calc.css";
import React, { useState } from "react";

let Calc = () => {
  let [value, setvalue2] = useState(0);
  let [input, setinput] = useState("");

  let iv = (event) => {
    setinput(+event.target.value);
  };

  let add = () => {
    setvalue2(Number(value) + Number(input));
    setinput("")
  };
  let sub = () => {
    setvalue2(Number(value) - Number(input));
    setinput("")
  };
  let clear = () => {
    setvalue2((value = null));
    setinput("")
  };

  return (
    <div>
      <form>
        <p className="result">Enter a number</p>
        <input
          type="number"
          min="0"
          onChange={iv}
          value={input}
          className="input"
        ></input>
      </form>

      <div>
        <button onClick={add} className="btn">
          Add(+)
        </button>
      </div>
      <div>
        <button onClick={sub} className="btn">
          Minus(-){" "}
        </button>
      </div>
      <div>
        <button onClick={clear} className="btn">
          clear
        </button>
      </div>
      <div></div>
      <div className="result">
        <h1>{value}</h1>
      </div>
    </div>
  );
};
export default Calc;
