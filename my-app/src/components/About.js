import React,{useState} from 'react';
import Accordian from './Accordian';
import { questions } from './api';

export default function About(props){

  let time = new Date().toLocaleTimeString();
  
  const [ctime,setTime] = useState(time);

  const Updatetime = ()=>{
     time = new Date().toLocaleTimeString();
     setTime(time)
  }

  setInterval(Updatetime,1000)

//  Accordian

  const [data,setData] = useState(questions);
  
  return(
  <> 

    <div className='card mb-5'>
       <div className="card-text">
         <div className="row">
           <div className='col-md-6'>
              <h1> Timer : {ctime} </h1>
              <div className='m-2 text-center'>
                  <img src='../img/group-23.png' alt='img'/>
              </div>
           </div>
            <div className='col-md-6'>
                 <h1>Hii {props.title} here</h1>
                 <br/>
                 {
                   data.map((curEle)=>{
                       const {id} = curEle;
                       return <Accordian key={id} {...curEle}/>;
                   })
                 }
           </div>
           
         </div>
         
         
       </div>
    </div>

    
  </>
    
 )    
}
