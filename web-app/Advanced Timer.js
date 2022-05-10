import React, { useEffect, useState } from "react";
import './css/timer.css';
export default function AdvancedTimer() {

    const [Hours, setHours] = useState(0);
    const [Mins, setMins] = useState(5);
    const [Seconds, setSeconds] = useState(45);
    const [Start, setStart] = useState(false);



    const Hour = (e) => {
        const input = document.getElementById('hour');
        const value = e.target.value;
        input.style = "display:block"
        input.innerHTML = value;
        if (value.length >= 2) {

            document.getElementById("txt1").style = "display:none"
        }
        if (value > 12) {
            setHours(12);
        } else {
            setHours(value);
        }

    }
    const Min = (e) => {
        const input = document.getElementById('min');
        const min = e.target.value;
        input.style = "display:block"
        input.innerHTML = min;
        if (min.length >= 2) {

            document.getElementById("txt2").style = "display:none"
        }
         
        if (min > 60) {
            setMins(59);
        } else if (min == 60) {
            setHours(Hours + 1);
            setMins(59);
        } else {
            setMins(min);
        }


    }
    const Sec = (e) => {
        const input = document.getElementById('sec');
        const sec = e.target.value;
        input.style = "display:block"
        input.innerHTML = sec;
        if (sec.length >= 2) {

            document.getElementById("txt3").style = "display:none"
        }
    
        if (sec > 60) {
            setSeconds(0);;
        } else if (sec == 60) {
            setMins(Mins + 1);
            setSeconds(59);
        } else {
            setSeconds(sec);
        }

    }


    const start = () => {
        setStart(true);
        full();
        let interrval;
        interrval = setTimeout(() => {

            setSeconds(Seconds - 1);
            if (Seconds == 0) {
                setMins(Mins - 1);
                setSeconds(60);
            }
            if (Mins == 0) {
                setHours(Hours - 1);
                setMins(59);
            }

        }, 1000)
    }

    useEffect(() => {
        if (Start === true) {
            start();

        }

    })

    const stop = () => {
        setStart(false);
        document.getElementById('start').innerText= "Resume";
    }

    const full = () => {
        document.documentElement.requestFullscreen();
    }
    const exit = () => {
        document.exitFullscreen();
    }

    const restart = ()=>{
        stop();
        exit();
        
       document.getElementById('txt1').style = "display : block";
       document.getElementById('txt2').style = "display : block";
       document.getElementById('txt3').style = "display : block";
       document.getElementById('hour').style = "display : none";
       document.getElementById('sec').style = "display : none";
       document.getElementById('min').style = "display : none";
       setHours("");
       setMins("");
       setSeconds("");
    }

    return (
        <>
            <h1>Advanced Timer</h1>
            <div className="clock">
                <div>
                    <input type='text' id="txt1" onChange={Hour} /> <p id="hour" style={{ display: 'none' }}>{Hours}</p>
                    <small>Hour</small>
                </div>
                <div>
                    <input type='text' id="txt2" onChange={Min} /> <p id="min" style={{ display: 'none' }}>{Mins}</p>
                    <small>Min</small>
                </div>
                <div>
                    <input type='text' id="txt3" onChange={Sec} /> <p id="sec" style={{ display: 'none' }}>{Seconds}</p>
                    <small>Sec</small>
                </div>

            </div>
            <div className="text-center mt-5">
                <button className="btn btn-info m-3" id="start" onClick={start}>Start</button>
                <button className="btn btn-info m-3" onClick={stop}>Stop</button>
                <button className="btn btn-info m-3" onClick={restart}>Restart</button>
                <button className="btn btn-warning m-3" onClick={exit}>Exit Full Screen</button>
            </div>

        </>
    )
}


