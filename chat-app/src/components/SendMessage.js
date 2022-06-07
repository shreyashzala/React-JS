import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { auth, db } from '../firebase';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore'


const SendMessage = () => {

    const [msg, setMsg] = useState('');

    async function sendmsg(e) {
        e.preventDefault();
        const { uid } = auth.currentUser;

        await db.collection('messages').add({
            text: msg,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
    }
    return (
        <div>
            <form autoComplete='off' onSubmit={sendmsg}>
                <div className='sendMsg'>
                    <TextField value={msg} onChange={(e) => setMsg(e.target.value)} label='Message' placeholder='Messages...' /><br />
                    <Button type='submit'>Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMessage
