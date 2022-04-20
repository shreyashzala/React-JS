import React from "react";

export default function ToDoList(props) {

    

    return (
        <li className="list-group-item">{props.text}<button className="btn btn-danger btn-sm ml-3" style={{ borderRadius: '100%' }} onClick={()=>{
            props.onSelect(props.id);
        }}>X</button>
        </li>
    )
}