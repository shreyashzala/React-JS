import React, { useState } from 'react';



export default function TextForm(props){

    const handleUppercase = ()=>{
        // console.log("Uppercase is clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowercase = ()=>{
        // console.log("Uppercase is clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnchange = (event) =>{
        // console.log("Onchange");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter a Text Here');
    return(
        <>
        <div style={{color:props.mode==='dark'?'white':'black'}}>
            <div className="mb-3">
                 <h1>{props.heading}</h1>
                 <textarea className="form-control" id="box" rows="5" style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'
                }} value={text} onChange={handleOnchange}></textarea>
            </div>
            <button className="btn btn-primary mr-2" onClick={handleUppercase}>Convert to UpperCase</button>
            <button className="btn btn-warning" onClick={ handleLowercase}>Convert to LowerCase</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").filter((ele)=>{return ele.length !==0}).length} Words and {text.length} Characters</p>
            <h2>Preview</h2>
            <p>{text.trim()}</p>
        </div>
        </>
    )
}