import React, { useState } from 'react'

const Calculator = () => {

    const[inputVal,setInpulVal]=useState("")


  return (
    <>
      <div className='container'>
        <h1>Calculator</h1>
        <div className='inputContainer'>
            <input type="text" value={inputVal} onChange={(e)=>{setInpulVal(e.target.value)}} />
        </div>
        <div className='btnContainer'>
            <button value="1" onClick={(e)=>{setInpulVal(inputVal + e.target.value)}}>1</button>
            <button value="2" onClick={(e)=>{setInpulVal(inputVal + e.target.value)}}>2</button>
            <button value="3" onClick={(e)=>{setInpulVal(inputVal + e.target.value)}}>3</button>
            <button value="4" onClick={(e)=>{setInpulVal(inputVal + e.target.value)}}>4</button>
            <button value="5" onClick={(e)=>{setInpulVal(inputVal + e.target.value)}}>5</button>
            <button value="6" onClick={(e)=>{setInpulVal(inputVal + e.target.value)}}>6</button>
            <button value="7" onClick={(e)=>{setInpulVal(inputVal + e.target.value)}}>7</button>
            <button value="8" onClick={(e)=>{setInpulVal(inputVal + e.target.value)}}>8</button>
            <button value="9" onClick={(e)=>{setInpulVal(inputVal + e.target.value)}}>9</button>
            <button value="0" onClick={(e)=>{setInpulVal(inputVal + e.target.value)}}>0</button>
            <button value="00" onClick={(e)=>{setInpulVal(inputVal + e.target.value)}}>00</button>
            <button value="+" onClick={(e)=>{setInpulVal(inputVal + e.target.value)}}>+</button>
            <button value="-" onClick={(e)=>{setInpulVal(inputVal + e.target.value)}}>-</button>
            <button value="*" onClick={(e)=>{setInpulVal(inputVal + e.target.value)}}>*</button>
            <button value="/" onClick={(e)=>{setInpulVal(inputVal + e.target.value)}}>/</button>
            <button value="AC" onClick={(e)=>{setInpulVal(inputVal.slice(0,-1))}}>AC</button>
            <button value="CE" onClick={(e)=>{setInpulVal("")}}>CE</button>
            <button value="=" style={{width:"150px"}} onClick={(e)=>{
                try {
                    setInpulVal(eval(inputVal))
                } catch  {
                    console.log("Error");
                }
            }}>=</button>
        </div>


      </div>
    </>
  )
}

export default Calculator
