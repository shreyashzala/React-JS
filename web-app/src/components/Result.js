import React, { useContext, useState } from 'react'
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { quizContext } from '../helpers/Context';
import { Questions } from '../containers/Questions';

const Result = () => {

  const { score, setScore, gameState, username, setName, result, showResponse } = useContext(quizContext);

  const [ans , setAns] = useState([...result]);

  const restart = () => {
    setScore(0);
    gameState("Start");
    setName("")
    showResponse([]);
    setAns([]);
  }

  const checkresponse = () => {
    document.getElementById("table").style = "display : block";
  }
  return (
    <div>
      <Box sx={{ height: 200, mx: 50, p: 3 }}>
        <Paper elevation={5}>
          <h1 className='text-center mb-2 mt-3'>Hello , {username} &nbsp;
          Here is Your Result</h1>
          <h3 className='text-center mb-2 text-info'>Score : {score}/{Questions.length}</h3>

          <TableContainer id="table" style={{display:'none'}}>
            <Table>
              <TableHead>
                <TableRow>
                  
                  <TableCell>Question</TableCell>
                  <TableCell>Your Ans</TableCell>
                  <TableCell>Correct Ans</TableCell>
                  <TableCell>Score</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Question-1</TableCell>
                  <TableCell>{ans[0]}</TableCell>
                  <TableCell>{Questions[0].ans}</TableCell>
                  {ans[0] === Questions[0].ans ? (<TableCell>+1</TableCell>) : (<TableCell>0</TableCell>)}
                </TableRow>
                <TableRow>
                  <TableCell>Question-2</TableCell>
                  <TableCell>{ans[1]}</TableCell>
                  <TableCell>{Questions[1].ans}</TableCell>
                  {ans[1] === Questions[1].ans ? (<TableCell>+1</TableCell>) : (<TableCell>0</TableCell>)}
                </TableRow>
                <TableRow>
                  <TableCell>Question-3</TableCell>
                  <TableCell>{ans[2]}</TableCell>
                  <TableCell>{Questions[2].ans}</TableCell>
                  {ans[2] === Questions[2].ans ? (<TableCell>+1</TableCell>) : (<TableCell>0</TableCell>)}
                </TableRow>
                <TableRow>
                  <TableCell>Question-4</TableCell>
                  <TableCell>{ans[3]}</TableCell>
                  <TableCell>{Questions[3].ans}</TableCell>
                  {ans[3] === Questions[3].ans ? (<TableCell>+1</TableCell>) : (<TableCell>0</TableCell>)}
                </TableRow>
                <TableRow>
                  <TableCell>Question-5</TableCell>
                  <TableCell>{ans[4]}</TableCell>
                  <TableCell>{Questions[4].ans}</TableCell>
                  {ans[4] === Questions[4].ans ? (<TableCell>+1</TableCell>) : (<TableCell>0</TableCell>)}
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Button variant='contained' color='secondary' size='large' sx={{ mx: 5, my: 3 }} onClick={restart}>Restart</Button>
          <Button variant='contained' color='secondary' size='large' sx={{ mx: 5, my: 3 }} onClick={checkresponse}>Check Your Answers</Button>

        </Paper>
      </Box>
      
      
    </div>
  )
}

export default Result