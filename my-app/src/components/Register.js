import React, { useEffect, useReducer, useState } from "react";

export default function Register(props) {



const [text, setText] = useState("");

    const submit = () => {
        // console.log("click")
        let txt = document.getElementById('txt').value;
        document.getElementById('head').append(txt);
    }

    const [count,setCount] = useState(0);
    useEffect(() =>{
        if(count >= 1){
            document.title = `Chats (${count})`
        } else{
            document.title = `Chats`
        }
       
    } );

    const inputdata = (e) => {
        let val = e.target.value;
        setText(val);
    }


    const initialState = 0;
    const reducer = (state,action) =>{
        if(action.type === 'add'){
            return state + 1;
        } else{
            return state - 1;
        }
        
    }

    const [state,dispatch] = useReducer(reducer,initialState);

    return (
        <>
            <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.title}</h1>
          <h2 className="text-center my-3" style={{color:props.mode==='dark'?'white':'black'}} id="head">Hello </h2>
          <input type='text' className="form-control" id="txt" placeholder="Enter your Text" value={text} onChange={inputdata} />
          <br/>
          <button className="btn btn-success mr-3" onClick={submit}>Click Me</button>
          <button className="btn btn-info" onClick={()=> setCount(count + 1) }>Effect {count}</button>
          <br/><br/> 

          <h5 className="mt-3" style={{color:props.mode==='dark'?'white':'black'}}>{state}</h5>
          <button className="btn btn-warning mr-3" onClick={()=> dispatch({type: 'add'})}>INC</button>
          <button className="btn btn-warning" onClick={()=> dispatch({type: 'sub'})}>DESC</button>

            
        </>
    );
}