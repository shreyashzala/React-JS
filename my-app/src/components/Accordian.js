import React, { useState } from "react";

export default function Accordian({question,answer}){

    const [show,setShow] = useState(false);

    return(
        <>
         <div className="mb-3">
         <button className="btn btn-danger btn-sm ml-3 mr-3" style={{ borderRadius: '100%' }} onClick={()=>{setShow(!show)}} >{ show ? "-": "+"}</button>
         <span className="m-3">{question}</span>
         </div>
         {
             show && <p className="ml-3 p-3 bg-light">{answer}</p>
         }
           
        </>
    )
}