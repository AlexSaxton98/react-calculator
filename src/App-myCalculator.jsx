import './App.css';
import { useState } from "react"
const math = require("mathjs")

// let array1 = []

console.log(math.evaluate("3+3"))

const App = () => {
        const [result, setResult] = useState([])
        let buttons = ["AC", "/", 7, 8, 9, '*', 4, 5, 6, "/", 1, 2, 3, '+', 0, ".", "="]
        const handleClick = (val) => {
            let currentResult = [result]
            
            if(val === "="){
                currentResult.join()
                console.log(currentResult[0])
            }

            
            currentResult.push(val)
            setResult(currentResult)
        }
    return(
        <div className="App">
            
            <h1>{result}</h1>

            {buttons.map((item) =>{
                return <button onClick={()=> handleClick(item)}>{item}</button>
            })}
            
        </div>
    )
}


            // <Button1 btn1 = {button1} />
            // <Button2 btn2 = {button2} />
            // <Button3 btn3 = {button3} />
            // <Button4 btn4 = {button4} />
            // <Button5 btn5 = {button5} />
            // <Button6 btn6 = {button6} />
            // <Button7 btn7 = {button7} />
            // <Button8 btn8 = {button8} />
            // <Button9 btn9 = {button9} />
            // <Button0 btn0 = {button0} />





// const ClearButton = (props)=>{
//     return(
//         <button onClick={props.clearBtn} type="button">Clear</button>
//     )
// }
// const Button1 = (props)=>{
//     return(
//         <button onClick={props.btn1} type="button">1</button>
//     )
// }
// const Button2 = (props)=>{
//     return(
//         <button onClick={props.btn2} type="button">2</button>
//     )
// }
// const Button3 = (props)=>{
//     return(
//         <button onClick={props.btn3} type="button">3</button>
//     )
// }
// const Button4 = (props)=>{
//     return(
//         <button onClick={props.btn4} type="button">4</button>
//     )
// }
// const Button5 = (props)=>{
//     return(
//         <button onClick={props.btn5} type="button">5</button>
//     )
// }
// const Button6 = (props)=>{
//     return(
//         <button onClick={props.btn6} type="button">6</button>
//     )
// }
// const Button7 = (props)=>{
//     return(
//         <button onClick={props.btn7} type="button">7</button>
//     )
// }
// const Button8 = (props)=>{
//     return(
//         <button onClick={props.btn8} type="button">8</button>
//     )
// }
// const Button9 = (props)=>{
//     return(
//         <button onClick={props.btn9} type="button">9</button>
//     )
// }
// const Button0 = (props)=>{
//     return(
//         <button onClick={props.btn0} type="button">0</button>
//     )
// }


// const AddButton = (props)=>{
//     return(
//         <button onClick={props.clickPlus} type="button">+</button>
//     )
// }
// const MinusButton = (props)=>{
//     return(
//         <button onClick={props.clickMinus} type="button">-</button>
//     )
// }



export default App;


const [total, setTotal] = useState([])
  let array1 = [0]
  let buttons = ["AC", "/", 7, 8, 9, '*', 4, 5, 6, "/", 1, 2, 3, '+', 0, ".", "="]


  const handleClick = (val) => {
    let currentTotal = array1
    currentTotal.push(val)
    console.log(array1)
    setTotal(array1)
    // if (val === "=") {
    //   let

    // }
  }