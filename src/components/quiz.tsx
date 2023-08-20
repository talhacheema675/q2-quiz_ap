   "use client"
import React, { useEffect, useState } from "react";
interface QuizData {
  results: {
    question: string;
    incorrect_answers: string[];
    correct_answer: string;

  }[];
}
const Ueffect=()=>{
    const [value,setvalue]=useState(0)
    const[wrong,setWrong]=useState(0)
    const[right,setRight]=useState(0)
    const [mydata,setmydata]=useState<QuizData | null>(null);
    useEffect(()=>{
        const gettingdata= async()=>{
            const data=await fetch('https://opentdb.com/api.php?amount=40&category=23&difficulty=medium&type=multiple');
            const getdata= await data.json()
        
            setmydata(getdata);
        };
        gettingdata();

    },[]

    );
return(
   <div>
    <div className={`${value==39?"invisible":"bg-gray-500 p-4 w-2/3 rounded-3xl h-80 mx-64 my-32"}`}>
            <div className="flex flex-row ">
                <div className="w-2/3 flex flex-col">
                    <h1 className="text-3xl font-bold">Question {value +1}/40</h1>
                    <label className="text-center text-2xl h-44 ">{mydata?.results[value].question}</label>
                    <button onClick={()=> {setvalue(value-value); setRight(right-right); setWrong(wrong-wrong)}} className="bg-green-600 text-2xl font-bold w-44 h-10 mt-10 ml-10 ">Start again</button>
                   
                </div>
                <div className="pt-6 text-xl flex flex-col text-left"> 
                    
                        <button onClick={()=>{setWrong(wrong+1); setvalue(value+1) }} className="border-2 border-solid w-64 h-16 border-black rounded-2xl">{mydata?.results[value].incorrect_answers[0]}</button>
                        <button onClick={()=>{setWrong(wrong+1); setvalue(value+1) }} className="border-2 border-solid w-64 h-16 border-black rounded-2xl">{mydata?.results[value].incorrect_answers[1]}</button>
                        <button onClick={()=>{setWrong(wrong+1); setvalue(value+1) }} className="border-2 border-solid w-64 h-16 border-black rounded-2xl">{mydata?.results[value].incorrect_answers[2]}</button>
                        <button onClick={()=>{setRight(right+1); setvalue(value+1) }} className="border-2 border-solid w-64 h-16 border-black rounded-2xl">{mydata?.results[value].correct_answer}</button>
                </div>
            </div>
        </div>
            <div className={`${value!=39?"invisible":"absolute top-16 text-center bg-gray-500 p-10 w-2/3 rounded-3xl h-64 ml-44 mt-32"}`}>
            <p className="text-5xl font-bold">Your Score</p>
            <p className="text-3xl text-green-700">total correct : {right}</p>
            <p className="text-3xl text-red-700">Total Wrong : {wrong}</p>
            <button onClick={()=> {setvalue(value-value); setRight(right-right); setWrong(wrong-wrong)}} className="bg-green-600 text-2xl font-bold w-44 h-10 mt-10 ml-10 rounded-3xl ">Play again</button>
            
            </div>
    </div>
    
)
}
export default Ueffect;
    
