import './App.css';
import { useState } from "react"
const math = require("mathjs")

const App = () => {
  const [total, setTotal] = useState([0])
  
  let buttons = [
    { val: "clear", style: "clear wide", alias: "AC" },
    { val: "/", style: "operator", alias: "÷" },
    { val: 7, style: "num" },
    { val: 8, style: "num" },
    { val: 9, style: "num" },
    { val: "*", style: "operator", alias: "x" },
    { val: 4, style: "num" },
    { val: 5, style: "num" },
    { val: 6, style: "num" },
    { val: "-", style: "operator" },
    { val: 1, style: "num" },
    { val: 2, style: "num" },
    { val: 3, style: "num" },
    { val: "+", style: "operator" },
    { val: 0, style: "zero" },
    { val: ".", style: "num" },
    { val: "=", style: "operator" }
  ]
  


  const handleClick = (val) => {
    let currentTotal = [...total]
    if(val === "clear"){
      console.log("clear")
      setTotal([0])
    } else if (val === "=") {
      console.log("=")
      console.log(currentTotal)
      let equation = currentTotal;
      try {
        equation = math.evaluate(equation.join(""));
        setTotal(equation)
      } catch {
        setTotal("Error press AC")
      }
    } else{
      if(total[0] === 0){
      currentTotal.shift() }
      currentTotal.push(val)
      setTotal(currentTotal)
    }
  }

  return (
    <div className="container">
      <h1 className="display">{total}</h1> 
      {buttons.map((item, index) => {
            return (
              <Button key={index} val={item.val} alias={item.alias} style={item.style} handleClick={handleClick} />    
            );
          })}
    </div>
  );
}

const Button = ({alias, val, handleClick, style}) =>{
  return(
    <button className={`button ${style}`} onClick={()=> handleClick(val)}>{alias ? alias : val}</button>
  )
}

export default App;
