import React, { useEffect, useState } from 'react';


export default function Calculator() {
    const [digit, setDigit] = useState("");
    const [log , setLog] = useState([]);

    const handleclick = (e) => {
        const res = setDigit(digit.concat(e.target.value));
        document.getElementById('result').innerHTML = res;

    }


    useEffect(() => {
        
        addtohistory(digit);
    })



    let history = "";
    
    
    const addtohistory = (value) => {
        history += value;
    }

    const save = () => {
         global = document.getElementById('result').innerText;
    }

    const show = () => {
        const temp = [...log];
        temp.push(global);
        setLog(temp);
        // document.getElementById('history').innerHTML = `<li> Equation : ${global} =  ${history} </li>`;
        
    }

    const del = () => {
        setDigit(digit.slice(0, digit.length - 1))
    }
    const clear = () => {
        setDigit("");
        
        
    }

    const calculate = () => {
        save();
        try {
            setDigit(eval(digit).toFixed(2));
            show();
        } catch (error) {
            setDigit("Error");
        }
    }

    return (
        <>
            <h1 className="text-center">Calculator</h1>
            <div className='row'>
                <div className='col-md-7'>
                    <div className='m-3' style={{ border: "1px solid black", height: "50px", width: "46%" }}>
                        <span className='m-3 font-weight-bold' style={{ fontSize: "30px" }} id="result">{digit}</span>
                    </div>
                    <button className='btn btn-warning btn-lg m-3' onClick={clear}>Cls</button>
                    <button className='btn btn-warning btn-lg m-3' onClick={show}>History</button>
                    <button className='btn btn-warning btn-lg m-3' onClick={del}>Del</button>

                    <br />
                    <button className='btn btn-info btn-lg m-3' value={7} onClick={handleclick}>7</button>
                    <button className='btn btn-info btn-lg m-3' value={8} onClick={handleclick}>8</button>
                    <button className='btn btn-info btn-lg m-3' value={9} onClick={handleclick}>9</button>
                    <button className='btn btn-success btn-lg m-3' value={'+'} onClick={handleclick}>+</button>
                    <br />
                    <button className='btn btn-info btn-lg m-3' value={4} onClick={handleclick}>4</button>
                    <button className='btn btn-info btn-lg m-3' value={5} onClick={handleclick}>5</button>
                    <button className='btn btn-info btn-lg m-3' value={6} onClick={handleclick}>6</button>
                    <button className='btn btn-success btn-lg m-3' value={'-'} onClick={handleclick}>-</button>
                    <br />
                    <button className='btn btn-info btn-lg m-3' value={1} onClick={handleclick}>1</button>
                    <button className='btn btn-info btn-lg m-3' value={2} onClick={handleclick}>2</button>
                    <button className='btn btn-info btn-lg m-3' value={3} onClick={handleclick}>3</button>
                    <button className='btn btn-success btn-lg m-3' value={'*'} onClick={handleclick}>*</button>
                    <br />
                    <button className='btn btn-info btn-lg m-3' value={'.'} onClick={handleclick}>.</button>
                    <button className='btn btn-info btn-lg m-3' value={0} onClick={handleclick}>0</button>
                    <button className='btn btn-danger btn-lg m-3' onClick={calculate}>=</button>
                    <button className='btn btn-success btn-lg m-3' value={'/'} onClick={handleclick}>/</button>
                </div>
                <div className='col-md-5'>
                    <h1>History</h1><br/>
                    <ul className='m-3' style={{fontSize:"25px"}} id='history'>
                        {

                            log.map((item)=>{
                                return (
                                    <li key={item + ""+Math.random()*44}>{item}</li>
                                )
                            })
                        }
                    </ul>
                </div>


            </div>

        </>
    )
}