import React, {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoadButtons, LoadClear, LoadAns, LoadBackspace } from './redux/calculatorRedux/actions'
import { CALCULATER_KEY } from './redux/calculatorRedux/reducer';


const App3 = () => {

    const [log, setLog] = useState([]);
    

    const dispatch = useDispatch();


    const viewans = useSelector((state) => {
        return state[CALCULATER_KEY]
    })

    const show = () => {
        const temp = [...log]
        const eq = `${viewans.number}`;
        temp.push(eq);
        setLog(temp);
    }
    const clearHistory = () => {

        setLog([]);

    }

    // const recalculate = (e) => {
    //     console.log(e.getAttribute("id"));
    // }

    
    return (
        <>

            <h1 className="text-center mt-3">Calculator</h1>
            <div className='row'>
                <div className='col-md-7'>
                    <div className='m-3'>
                        
                        <input type='text' style={{ border: "1px solid black", height: "50px", width: "46%" }}className='form-control font-weight-bold' value={(viewans.ans).length === 0 ? viewans.number : viewans.ans} readOnly id='result'/>
                    </div>
                    <button className='btn btn-warning btn-lg m-3' onClick={() => dispatch(LoadClear())}>Cls</button>
                    <button className='btn btn-warning btn-lg m-3' onClick={show}>History</button>
                    <button className='btn btn-warning btn-lg m-3' onClick={() => dispatch(LoadBackspace())}>Del</button>

                    <br />
                    <button className='btn btn-info btn-lg m-3' onClick={() => dispatch(LoadButtons(7))}>7</button>
                    <button className='btn btn-info btn-lg m-3' onClick={() => dispatch(LoadButtons(8))}>8</button>
                    <button className='btn btn-info btn-lg m-3' onClick={() => dispatch(LoadButtons(9))}>9</button>
                    <button className='btn btn-success btn-lg m-3' onClick={() => dispatch(LoadButtons('+'))}>+</button>
                    <br />
                    <button className='btn btn-info btn-lg m-3' onClick={() => dispatch(LoadButtons(4))}>4</button>
                    <button className='btn btn-info btn-lg m-3' onClick={() => dispatch(LoadButtons(5))}>5</button>
                    <button className='btn btn-info btn-lg m-3' onClick={() => dispatch(LoadButtons(6))}>6</button>
                    <button className='btn btn-success btn-lg m-3' onClick={() => dispatch(LoadButtons('-'))}>-</button>
                    <br />
                    <button className='btn btn-info btn-lg m-3' onClick={() => dispatch(LoadButtons(1))}>1</button>
                    <button className='btn btn-info btn-lg m-3' onClick={() => dispatch(LoadButtons(2))}>2</button>
                    <button className='btn btn-info btn-lg m-3' onClick={() => dispatch(LoadButtons(3))}>3</button>
                    <button className='btn btn-success btn-lg m-3' onClick={() => dispatch(LoadButtons('*'))}>*</button>
                    <br />
                    <button className='btn btn-info btn-lg m-3' onClick={() => dispatch(LoadButtons('.'))}>.</button>
                    <button className='btn btn-info btn-lg m-3' onClick={() => dispatch(LoadButtons(0))}>0</button>
                    <button className='btn btn-danger btn-lg m-3' onClick={() => {
                        dispatch(LoadAns())
                        show()
                    }}>=</button>
                    <button className='btn btn-success btn-lg m-3' onClick={() => dispatch(LoadButtons('/'))}>/</button>
                </div>
                <div className='col-md-5'>
                    <h1>History</h1><br />
                    <ol className='m-3' style={{ fontSize: "25px" }}>
                        {

                            log.map((item) => {
                                return (
                                    <li key={item + "" + Math.random() * 44} onClick={()=>{
                                        var que = `${item}`;
                                        document.getElementById('result').value = que;
                                        var final = eval(que);
                                    }}>{item}</li>
                                )
                            })
                        }
                    </ol>
                    <button className='btn btn-secondary m-3' onClick={clearHistory}> Clear History</button>
                    <br/>
                                        
                </div>
            </div>
        </>
    )
}

export default App3
