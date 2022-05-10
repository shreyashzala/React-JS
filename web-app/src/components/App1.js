import React, { useState } from "react";
import { List } from "./MovieList";
import './css/App1.css';




export default function App1() {

    const [showList, setShowList] = useState(List);
    
    return (
        <>

            {
                showList.map((index) => {
                    return (
                        <div key={index.id} className="row mt-3 mb-3" style={{border : "1px solid red"}}>
                            <div className="col-md-6">
                                <div className="p-1">
                                    <img src={index.img} />
                                </div>
                            </div>
                            <div className="col-md-6 mt-3">
                                <p><strong> Movie Name : </strong>{index.name}</p>
                                <p>
                                 <strong>About:</strong>   {index.dis}</p>
                                <p>Rating: <span className="font-weight-bold">{index.rating}/10</span></p>
                                
                            </div>
                            
                            <br />
                            
                            
                        </div>
                        
                    )
                })
            }
        </>
    )
}