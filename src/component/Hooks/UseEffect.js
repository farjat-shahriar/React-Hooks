import React from 'react'
import  "./style.css";
import { useEffect, useState } from "react";



const UseEffect = () => {

    const initialData=10;
    const [myNum , setMyNum]= useState(initialData);
    
    useEffect(() => {
      
     document.title =`chats(${myNum})`
    }, )

    return (
        <>
            <>
            <div className="center_div">
                <p>{myNum}</p>
                <div className="button2" onClick={()=> setMyNum(myNum+1)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                INCR
            </div>
           </div>
        </> 
        </>
    )
}

export default UseEffect;
