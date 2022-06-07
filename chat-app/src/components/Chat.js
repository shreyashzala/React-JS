import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase';
import SendMessage from './SendMessage';
import SignOut from './SignOut'

const Chat = () => {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  return (
    <div>
      <SignOut />
      <div className='msgs'>
        {messages.map(({ id, text,uid }) => (
          <div>
            <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent': 'received'}`}>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  )
}

export default Chat
