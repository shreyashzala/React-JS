import { Button } from '@mui/material'
import React from 'react'
import {auth} from '../firebase'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const SignIn = () => {

    function signin() {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
  return (
    <div style={{ display:'flex',justifyContent:'center',height:'100vh', alignItems:'center'}}>

        <Button onClick={signin} style={{padding:'30px', fontSize:'20px' , borderRadius:'0'}}>Sign in With Google</Button>
    </div>
  )
}

export default SignIn
