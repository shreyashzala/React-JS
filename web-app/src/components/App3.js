import { Button, Grid } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoadButtons, LoadClear, LoadAns, LoadBackspace } from '../actions/actions'
import { CALCULATER_KEY } from '../reducer/reducer';
import Navbar from './Navbar';


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
            <Navbar title="Calculator-Redux" />
            <div className='container'>
                <h1 className="text-center mt-3">Calculator</h1>
                <Grid container>
                    <Grid item md={7}>

                        <div sx={{ m: 3 }}>

                            <input type='text' style={{ border: "1px solid black", height: "50px", width: "55%" }} className='form-control font-weight-bold' value={(viewans.ans).length === 0 ? viewans.number : viewans.ans} readOnly id='result' />
                        </div>



                        <Button variant='contained' size='large' color='warning' sx={{ m:1.5 }} onClick={() => dispatch(LoadClear())}>Cls</Button>


                        <Button variant='contained' size='large' sx={{ m:1.5 }} color='warning' onClick={show}>History</Button>
                        <Button variant='contained' size='large' sx={{ m:1.5 }} color='warning' onClick={() => dispatch(LoadBackspace())}>Del</Button>

                        <br />
                        <Button variant='contained' size='large' sx={{ m:1.5 }} color='info' onClick={() => dispatch(LoadButtons(7))}>7</Button>
                        <Button variant='contained' size='large' sx={{ m:1.5 }} color='info' onClick={() => dispatch(LoadButtons(8))}>8</Button>
                        <Button variant='contained' size='large' sx={{ m:1.5 }} color='info' onClick={() => dispatch(LoadButtons(9))}>9</Button>
                        <Button variant='contained' size='large' sx={{ m:1.5 }} color='success' onClick={() => dispatch(LoadButtons('+'))}>+</Button>
                        <br />
                        <Button variant='contained' size='large' sx={{ m:1.5 }} color='info' onClick={() => dispatch(LoadButtons(4))}>4</Button>
                        <Button variant='contained' size='large' sx={{ m:1.5 }} color='info' onClick={() => dispatch(LoadButtons(5))}>5</Button>
                        <Button variant='contained' size='large' sx={{ m:1.5 }} color='info' onClick={() => dispatch(LoadButtons(6))}>6</Button>
                        <Button variant='contained' size='large' sx={{ m:1.5 }} color='success' onClick={() => dispatch(LoadButtons('-'))}>-</Button>
                        <br />
                        <Button variant='contained' size='large' sx={{ m:1.5 }} color='info' onClick={() => dispatch(LoadButtons(1))}>1</Button>
                        <Button variant='contained' size='large' sx={{ m:1.5 }} color='info' onClick={() => dispatch(LoadButtons(2))}>2</Button>
                        <Button variant='contained' size='large' sx={{ m:1.5 }} color='info' onClick={() => dispatch(LoadButtons(3))}>3</Button>
                        <Button variant='contained' size='large' sx={{ m:1.5 }} color='success' onClick={() => dispatch(LoadButtons('*'))}>*</Button>
                        <br />
                        <Button variant='contained' size='large' sx={{ m:1.5 }} color='info' onClick={() => dispatch(LoadButtons('.'))}>.</Button>
                        <Button variant='contained' size='large' sx={{ m:1.5 }} color='info' onClick={() => dispatch(LoadButtons(0))}>0</Button>
                        <Button variant='contained' size='large' sx={{ m:1.5 }} color='error' onClick={() => {
                            dispatch(LoadAns())
                            show()
                        }}>=</Button>
                        <Button variant='contained' size='large' sx={{ m:1.5 }} color='success' onClick={() => dispatch(LoadButtons('/'))}>/</Button>

                    </Grid>
                    <Grid item md={5}>
                        <h1>History</h1><br />
                        <ol className='m-3' style={{ fontSize: "25px" }}>
                            {

                                log.map((item) => {
                                    return (
                                        <li key={item + "" + Math.random() * 44} onClick={() => {
                                            var que = `${item}`;
                                            document.getElementById('result').value = que;
                                            var final = eval(que);
                                            document.getElementById('result2').innerText = final;
                                        }}>{item}</li>
                                    )
                                })
                            }
                        </ol>
                        <Button variant='contained' size='large' sx={{ m:1.5 }} color='secondary' onClick={clearHistory}> Clear History</Button>
                        <br />
                    </Grid>
                </Grid>
                
            </div>
        </>
    )
}

export default App3
