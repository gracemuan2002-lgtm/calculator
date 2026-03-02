import React, { useState } from 'react'

const App = () => {
  
  const[input,setInput]=useState("");  
  const[operator,setOperator]=useState("");
  const[firstNum,setFirstNum]=useState("");
  const[secondNum,setSecondNum]=useState("");
  
  const clickHandle=(num)=>{
    if(operator){
      const newSecondNum= secondNum+num;
      setSecondNum(newSecondNum)
      setInput(`${firstNum}${operator}${newSecondNum}`)}
      else{
        const newFirstNum=firstNum+num;
        setFirstNum(newFirstNum);
        setInput(newFirstNum);
      }}
     
  const operaTor=(op)=>{
        if(firstNum==="") return;
        setOperator(op);
        setInput(`${firstNum}${op}`);
      }

  const equalHandle=()=>{
          if(!(operator || secondNum)) return;
          const a= parseFloat(firstNum);
          const b= parseFloat(secondNum);
          let result="0";

          switch(operator){
            case "+":
              result=a+b
              break;
            case "-":
              result=a-b
              break;
            case "*":
              result=a*b
              break;
            case "/":
              result=b === 0 ? "Error" : a/b
              break;
            case "%":
              result=a%b
              break;
            case ".": 
              result=parseFloat(`${a}.${b}`)
              break;
            case "=/-":
              result=-a
              break;
            default:
              break;
          }
          
          setInput(result.toString());
          setFirstNum(result.toString());
          setSecondNum("");
          setOperator("null");
        }

  //delete
  const deleteHandle=()=>{
          if(operator){
            if(secondNum.length>0){
              const newSecondNum=secondNum.slice(0,-1);
              setSecondNum(newSecondNum);
              setInput( newSecondNum ? `${firstNum}${operator}${newSecondNum}` : `${firstNum} ${operator}`);
            }
            else{
              setOperator("");
              setInput(`${firstNum}`);
            }
          }else{
            if(firstNum.length>0){
              const newfirstNum=firstNum.slice(0,-1);
              setFirstNum(newfirstNum);
              setInput(`${newfirstNum}`);
            }
            
          }
          
          }

  const allclear=()=>{
            setInput("");
            setFirstNum("");
            setSecondNum("");
            setOperator("null");}


  return (
    <div className='bg-black w-screen h-screen flex items-center justify-center'>
      <div className='bg-blue-400 w-[600px] h-auto py-4 px-4 rounded-md'>
        <div className='w-full bg-white py-2 px-2 rounded-md mb-6'>
          {input || "0"}
        </div>
        <div className='grid grid-cols-[0.5fr_0.5fr_0.5fr_0.5fr] gap-2'>
          <button onClick={()=>allclear()} className='py-2 bg-gray-500 text-white rounded-md'>AC</button>
          <button onClick={deleteHandle} className='py-2 bg-gray-500 text-white rounded-md'>&#9003;</button>
          <button onClick={()=>operaTor("=/-")} className='py-2 bg-gray-500 text-white rounded-md'>+/-</button>
          <button onClick={()=>operaTor("/")} className='py-2 bg-gray-500 text-white rounded-md'>&#247;</button>
          <button onClick={()=>clickHandle("7")} className='py-2 bg-gray-500 text-white rounded-md'>7</button>
          <button onClick={()=>clickHandle("8")} className='py-2 bg-gray-500 text-white rounded-md'>8</button>
          <button onClick={()=>clickHandle("9")} className='py-2 bg-gray-500 text-white rounded-md'>9</button>
          <button onClick={()=>operaTor("*")} className='py-2 bg-gray-500 text-white rounded-md'>*</button>
          <button onClick={()=>clickHandle("4")} className='py-2 bg-gray-500 text-white rounded-md'>4</button>
          <button onClick={()=>clickHandle("5")} className='py-2 bg-gray-500 text-white rounded-md'>5</button>
          <button onClick={()=>clickHandle("6")} className='py-2 bg-gray-500 text-white rounded-md'>6</button>
          <button onClick={()=>operaTor("-")} className='py-2 bg-gray-500 text-white rounded-md'>-</button>
          <button onClick={()=>clickHandle("1")} className='py-2 bg-gray-500 text-white rounded-md'>1</button>
          <button onClick={()=>clickHandle("2")} className='py-2 bg-gray-500 text-white rounded-md'>2</button>
          <button onClick={()=>clickHandle("3")} className='py-2 bg-gray-500 text-white rounded-md'>3</button>
          <button onClick={()=>operaTor("+")} className='py-2 bg-gray-500 text-white rounded-md'>+</button>
          <button onClick={()=>operaTor("%")} className='py-2 bg-gray-500 text-white rounded-md'>%</button>
          <button onClick={()=>clickHandle("0")} className='py-2 bg-gray-500 text-white rounded-md'>0</button>
          <button onClick={()=>operaTor(".")} className='py-2 bg-gray-500 text-white rounded-md'>.</button>
          <button onClick={equalHandle} className='py-2 bg-gray-500 text-white rounded-md'>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
