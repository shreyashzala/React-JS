import {Alert, Box, Button, Paper } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Questions } from '../containers/Questions'
import { quizContext } from '../helpers/Context'

const Quiz = () => {
  const [empty, setEmpty] = useState("")
  const { score, setScore, gameState,result } = useContext(quizContext);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [variantA,setVariantA] = useState("text");
  const [variantB,setVariantB] = useState("text");
  const [variantC,setVariantC] = useState("text");
  const [variantD,setVariantD] = useState("text");
  

  const nextQuestion = () => {
    if (empty !== "") {
      
      if (Questions[currQuestion].ans === optionChosen) {
        setScore(score + 1);
        
      }
      setEmpty("");
      result.push(optionChosen)
      setVariantA("text");
      setVariantB("text");
      setVariantC("text");
      setVariantD("text");
      setCurrQuestion(currQuestion + 1)
    } else {
      setEmpty("show");
      
    }
  }

  const finishQuiz = () => {
    if (empty !== "") {
      
      if (Questions[currQuestion].ans === optionChosen) {
        setScore(score + 1);
        
      }
      setEmpty("");
      result.push(optionChosen)
      setCurrQuestion(currQuestion + 1)
      gameState("result")
    } else {
      
      setEmpty("show");
      
    }
    
  }

  return (
    <>

        
      <Box sx={{ height: 200, mx: 50, p: 3 }}>
        <Paper elevation={5}>
          <h1 className='text-center mb-3 mt-3'>Welcome To Quiz</h1>
          <h3 className='text-center mb-3 text-danger'>{Questions[currQuestion].que}</h3>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
            <Button variant={variantA} color='secondary' size='large' onClick={() => { setOptionChosen("A"); setEmpty("A"); setVariantA("outlined") }}>
            {Questions[currQuestion].optA}
            </Button>
            <Button variant={variantB} color='secondary' size='large' onClick={() => { setOptionChosen("B"); setEmpty("B"); setVariantB("outlined") }}>{Questions[currQuestion].optB}</Button>
            <Button variant={variantC} color='secondary' size='large' onClick={() => { setOptionChosen("C"); setEmpty("C"); setVariantC("outlined") }}>{Questions[currQuestion].optC}</Button>
            <Button variant={variantD} color='secondary' size='large' onClick={() => { setOptionChosen("D"); setEmpty("D"); setVariantD("outlined") }}>{Questions[currQuestion].optD}</Button>

          </div>
          <div style={{ textAlign: 'right' }}>
            
           {empty === "show" ? (<Alert id="alert" className='mb-4' severity='error' variant='filled'>Please Select One</Alert>) : "" } 
            

            {currQuestion === Questions.length - 1 ? (<Button variant='contained' color='success' size='large' sx={{ mx: 5, my: 3 }} onClick={finishQuiz}>Finish Quiz</Button>) : (<Button variant='contained' size='large' sx={{ mx: 5, my: 3 }} onClick={nextQuestion}>Next Question</Button>)}

          </div>
        </Paper>
      </Box>


    </>
  )
}

export default Quiz