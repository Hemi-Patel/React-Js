import { useState } from "react";
import "./Calculator.css";

function Calculator() {
    let [input, setInput] = useState("");

    function inputData(val) {
        setInput(input + val)
    }
    function calculate() {
        setInput(eval(input).toString());
    }
    return (
        <>
            <div className="main">
                <h1>Calculator</h1>
                <div className="mystyle">
                    <div className="input-box">
                        <input type="text" value={input} />
                    </div>
                    <div style={{ display: "flex", margin: "8px" }}>
                        <button className="btnStyle" style={{ backgroundColor: "orangered" }} onClick={() => setInput("")}>AC</button>
                        <button className="btnStyle" style={{ backgroundColor: "orangered" }} onClick={() => setInput(input.slice(0, -1))}>DEL</button>
                        <button className="btnStyle" style={{ backgroundColor: "orangered" }} onClick={() => inputData("+")}>%</button>
                        <button className="btnStyle" style={{ backgroundColor: "orangered" }} onClick={() => inputData("+")}>+</button>
                    </div>
                    <div style={{ display: "flex", margin: "8px" }}>
                        <button className="btnStyle" onClick={() => inputData(7)}>7</button>
                        <button className="btnStyle" onClick={() => inputData(8)}>8</button>
                        <button className="btnStyle" onClick={() => inputData(9)}>9</button>
                        <button className="btnStyle" style={{ backgroundColor: "orangered" }} onClick={() => inputData("-")}>-</button>
                    </div>
                    <div style={{ display: "flex", margin: "8px" }}>
                        <button className="btnStyle" onClick={() => inputData(4)}>4</button>
                        <button className="btnStyle" onClick={() => inputData(5)}>5</button>
                        <button className="btnStyle" onClick={() => inputData(6)}>6</button>
                        <button className="btnStyle" style={{ backgroundColor: "orangered" }} onClick={() => inputData("*")}>*</button>
                    </div>
                    <div style={{ display: "flex", margin: "8px" }}>
                        <button className="btnStyle" onClick={() => inputData(1)}>1</button>
                        <button className="btnStyle" onClick={() => inputData(2)}>2</button>
                        <button className="btnStyle" onClick={() => inputData(3)}>3</button>
                        <button className="btnStyle" style={{ backgroundColor: "orangered" }} onClick={() => inputData("/")}>/</button>
                    </div>
                    <div style={{ display: "flex", margin: "8px", marginBottom: "10px" }}>
                        <button className="btnStyle" onClick={() => inputData(0)}>0</button>
                        <button className="btnStyle" onClick={() => inputData(".")}>.</button>
                        <button className="btnStyle" style={{ width: "180px", backgroundColor: "orangered" }} onClick={() => calculate()}>=</button>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Calculator;