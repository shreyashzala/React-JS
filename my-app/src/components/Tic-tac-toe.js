import React, { useEffect, useState } from "react";
// import Games from "./tic-tac-toe/Game";
// import "./tic-tac-toe/style.css";




export default function Game() {

    // By Using Hooks(Function Based)


    const i = (Array(9).fill(null));

    const [gamestate, setGameState] = useState(i);
    const [turn, setTurn] = useState(false);

    const Squareclick = (index) => {
        let str = Array.from(gamestate);
        str[index] = turn ? "X" : "O";
        setGameState(str);
        setTurn(!turn);
    }

    useEffect(() => {
        const winner = checkWinner();

        if (winner) {

            document.getElementById("winner").innerHTML = `Great!!!! ${winner} has won the game`;
            document.getElementById("winner").style = "display: block";
            setTimeout(() => {
                setGameState(i);
                document.getElementById("winner").style = "display: none";
            }, 2000)

        }
    })

    const checkWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (gamestate[a] && gamestate[a] === gamestate[b] && gamestate[a] === gamestate[c]) {
                return gamestate[a];
            }
        }
        return null;
    }

    return (
        <>
            <div className="row">


                <div className="col-md-6">
                    <h1>Tic Toe Game - Hooks</h1>
                    <br />
                    <div className="text-center">
                        <div className="row">
                            <div className="col-md-1" style={{ border: '1px solid black', borderCollapse: 'collapse', height: '30px' }} onClick={() => Squareclick(0)}>{gamestate[0]}</div>
                            <div className="col-md-1" style={{ border: '1px solid black', borderCollapse: 'collapse', height: '30px' }} onClick={() => Squareclick(1)} >{gamestate[1]}</div>
                            <div className="col-md-1" style={{ border: '1px solid black', borderCollapse: 'collapse', height: '30px' }} onClick={() => Squareclick(2)}>{gamestate[2]}</div>
                        </div>

                        <div className="row">
                            <div className="col-md-1" style={{ border: '1px solid black', borderCollapse: 'collapse', height: '30px' }} onClick={() => Squareclick(3)}>{gamestate[3]}</div>
                            <div className="col-md-1" style={{ border: '1px solid black', borderCollapse: 'collapse', height: '30px' }} onClick={() => Squareclick(4)}>{gamestate[4]}</div>
                            <div className="col-md-1" style={{ border: '1px solid black', borderCollapse: 'collapse', height: '30px' }} onClick={() => Squareclick(5)}>{gamestate[5]}</div>
                        </div>
                        <div className="row">
                            <div className="col-md-1" style={{ border: '1px solid black', borderCollapse: 'collapse', height: '30px' }} onClick={() => Squareclick(6)}>{gamestate[6]}</div>
                            <div className="col-md-1" style={{ border: '1px solid black', borderCollapse: 'collapse', height: '30px' }} onClick={() => Squareclick(7)}>{gamestate[7]}</div>
                            <div className="col-md-1" style={{ border: '1px solid black', borderCollapse: 'collapse', height: '30px' }} onClick={() => Squareclick(8)}>{gamestate[8]}</div>
                        </div>

                    </div>
                    <button className="btn btn-danger mt-5" onClick={() => setGameState(i)}>Clear Game</button>
                    <p className=" mt-3 p-2 bg-light font-weight-bold" id="winner" style={{ display: 'none' }}>Winner : </p>
                </div>


                {/* <div className="col-md-6">
                    <h1>Tic Toe Game - Class</h1>
                    <br />
                    
                    <Games/>
                    <p className=" mt-3 p-2 bg-light font-weight-bold" id="classwinner" style={{ display: 'none' }}>Winner : </p>
                </div> */}
            </div>

        </>
    )
}