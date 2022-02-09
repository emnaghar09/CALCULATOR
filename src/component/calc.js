import React, {useState} from 'react'
import {InputGroup , FormControl } from 'react-bootstrap';

function calc() {
    const [num, setNum] = useState(0);
   
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


return (

    <div className="calculator">
<InputGroup className="mb-3">
<FormControl aria-label="First name" />
</InputGroup>
    
<div className="equal">
<button className="EQ">=</button>
<button className="DEL" onClick={clear}>DEL</button>

</div>
<div className="operators">
<button className="OP">+</button>
<button className="OP">-</button>
<button className="OP">/</button>
<button className="OP">x</button>
</div>
<div className="numbers">
<button className="CH" onClick={inputNum} value={1}>1</button>
<button className="CH" onClick={inputNum} value={2}>2</button>
<button className="CH"  onClick={inputNum} value={3} >3</button>
<button className="CH" onClick={inputNum} value={4}>4</button>
<button className="CH"  onClick={inputNum} value={5}>5</button>
<button className="CH" onClick={inputNum} value={6}>6</button>
<button className="CH" onClick={inputNum} value={7}>7</button>
<button className="CH" onClick={inputNum} value={8}>8</button>
<button className="CH" onClick={inputNum} value={9}>9</button>
<button className="CH" onClick={inputNum} value={0}>0</button>
<button className="DEL">.</button>
<button className="EQ" onClick={percentage}>%</button>
</div>

</div>
)
}

export default calc