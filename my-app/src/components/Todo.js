import React, { useState } from "react";
import ToDoList from "./Todolists";

export default function ToDO(props) {

    const [inputList,setInputList] = useState("");
    const [Items,setItems] = useState([]);

    const itemEvents = (event)=>{
        
        setInputList(event.target.value);
    }

    const addEvents = ()=>{
         setItems((oldItems)=>{
             return [...oldItems,inputList]
         });
         setInputList("");
    }

    const deleteEvents = (id)=>{
        
        setItems((oldItems)=>{
            return oldItems.filter((arrEle,index)=>{
                return index !== id;
            })
        })
    }

    return (
        <>
            <div className="card" style={{width: '70%'}}>
                <div className="card-header">
                    To Do List
                </div>
                <div className="card-body">
                    <div className="card-title">
                        <input type='text' onChange={itemEvents} placeholder="Enter a Item" value={inputList}/> 
                        <button className="btn btn-primary btn-sm ml-3" style={{borderRadius:'100%'}} onClick={addEvents} >+</button>
                    </div>
                    <ol className="card-text list-group">
                        

                        { Items.map((itemval,index)=>{
                           return <ToDoList 
                           text={itemval} 
                           key={index} 
                           id={index}
                           onSelect = {deleteEvents} /> 
                        })}
                    </ol>
                    
                </div>
            </div>
        </>
    )
}