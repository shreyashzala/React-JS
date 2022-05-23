import {Alert, Box, Button, Paper, TextField } from '@mui/material';
import React, { useContext, useState } from 'react'
import { quizContext } from '../helpers/Context'

const Start = () => {

  const [error , setError]=useState(false);

  const { game, gameState, username, setName } = useContext(quizContext);
  return (
    <div>


      <Box sx={{ height: 200, mx: 50, p: 3 }}>
        <Paper elevation={5}>
          <h1 className='text-center mb-3 mt-3'>Welcome To Quiz</h1>
          <h3 className='text-center mb-3 text-danger'>Register Here</h3>
          { error && <Alert className='mb-4' severity="error" variant='filled'>Please Enter your Name</Alert> }
          <TextField label="Enter a name" variant='outlined' sx={{ ml: 30 }} onChange={(e) => { setName(e.target.value) }} value={username} /><br />
          <div className='text-center'>
            <Button variant='contained' sx={{ m: 3 }} onClick={() => {
              if (username === "") {
                 setError(true);
              } else {
                gameState("quiz");
              }



            }}>{game} Quiz</Button>
          </div>

        </Paper>
      </Box>
    </div>
  )
}

export default Start