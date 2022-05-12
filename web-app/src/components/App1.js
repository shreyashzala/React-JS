import React, { useState } from "react";
import { List } from "../containers/MovieList";
import '../assets/App1.css';




export default function App1() {

    const [showList, setShowList] = useState(List);
    
    return (
        <>
         <div className="head">
            {
                showList.map((index) => {
                    return (
                       

                        
                        <div key={index.id} className="list1 mt-3 mb-3" style={{border : "1px solid red"}}>
                            
                                <div className="p-1">
                                    <img src={index.img} />
                                </div>

                                <p><strong> Movie Name : </strong>{index.name}</p>
                                <p>
                                 <strong>About:</strong>   {index.dis}</p>
                                <p>Rating: <span className="font-weight-bold">{index.rating}/10</span></p>
                                
                            
                            
                            <br />
                            
                            
                        </div>

                    
                        
                    )
                })
            }
            </div>
        </>
    )
}
