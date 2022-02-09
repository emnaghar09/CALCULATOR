import React, {useState} from 'react'
import { Button } from 'react-bootstrap';


function calc() {
    const [num, setNum] = useState(0);
    const [oldnum, setOldNum] = useState(0);
    const [operator, setOperator] = useState();
    // lets start with the functionalities
    
    // the input 
    const inputNum =(e)=> {
        var input = e.target.value;
        // num ===0 ? setNum(input) : setNum(num + input);
        if (num === 0) {
        setNum(input);
        } else {
        setNum(num + input);
        }
        }

    // the % button
    const percentage =()=>{  setNum(num / 100);}

    // the delete button
    const clear =() =>{ setNum(0); }
// check which operator the user chooses
    const operatorHandler=(e) =>{
        var operatorInput = e.target.value;
        setOperator(operatorInput);
        // to ask khalil about these lines
        setOldNum(num);
        setNum(0);
    }

    const calculate =() =>{
        if (operator === "/") {
        setNum(parseFloat(oldnum) / parseFloat(num));
        } else if (operator === "X") {
          setNum(parseFloat(oldnum) * parseFloat(num));
        } else if (operator === "-") {
        setNum(parseFloat(oldnum) - parseFloat(num));
        } else if (operator === "+") {
        setNum(parseFloat(oldnum) + parseFloat(num));
        }
    }

return (
    <div className="calculator">
    <h5 className="display"> {num} </h5>

<div className="numbers">
<Button variant="success" onClick={calculate}>=</Button>
<Button variant="danger" onClick={clear}>DEL</Button>
{/* to ask khalil about the . line */}
<Button variant="warning" onClick={inputNum} >.</Button>

<Button variant="secondary" onClick={inputNum} value={1}>1</Button>
<Button variant="secondary" onClick={inputNum} value={2}>2</Button>

<Button variant="warning" onClick={operatorHandler} value="+">+</Button>

<Button variant="secondary" onClick={inputNum} value={3} >3</Button>
<Button variant="secondary" onClick={inputNum} value={4}>4</Button>

<Button variant="warning" onClick={operatorHandler} value="-">-</Button>

<Button variant="secondary" onClick={inputNum} value={5}>5</Button>
<Button variant="secondary" onClick={inputNum} value={6}>6</Button>

<Button variant="warning" onClick={operatorHandler} value="/" >/</Button>

<Button variant="secondary" onClick={inputNum} value={7}>7</Button>
<Button variant="secondary" onClick={inputNum} value={8}>8</Button>

<Button variant="warning" onClick={operatorHandler} value="X">x</Button>

<Button variant="secondary" onClick={inputNum} value={9}>9</Button>
<Button variant="secondary" onClick={inputNum} value={0}>0</Button>

<Button variant="warning" onClick={percentage}>%</Button>
</div>
</div>
)
}

export default calc