import React, { useState } from 'react'
import Navbar from './Navbar'
import Start from './Start'
import Quiz from './Quiz'
import Result from './Result'
import { quizContext } from '../helpers/Context'



const QuizApp = () => {

    const [game, gameState] = useState("Start");
    const [score , setScore] = useState(0);
    const [username , setName] = useState("");
    const [result,showResponse] = useState([]);

    return (
        <>
            <Navbar title="Quiz App" />
            <h1>Quiz APP</h1><br />
            <quizContext.Provider value={{game, gameState , score ,setScore ,username ,setName,result,showResponse}}>
                {game === "Start" && <Start />}
                {game === "quiz" && <Quiz />}
                {game === "result" && <Result />}

            </quizContext.Provider>
        </>
    )
}

export default QuizApp
