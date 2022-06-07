import { Button } from '@mui/material'
import React from 'react'
import {auth} from '../firebase'

const SignOut = () => {
  return (
    <div>
        <Button onClick={()=>{auth.signOut()}}>LogOut</Button>
    </div>
  )
}

export default SignOut
