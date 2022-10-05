import React, { useState } from 'react'
import { db, auth } from '../../firebase'
import firebase from 'firebase'
import './SendMessage.css'
import { Input, Button } from '@material-ui/core'

function SendMessage({ scroll }) {
    const [msg, setMsg] = useState('')

    async function sendMessage(e) {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser

        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div className='sendmessage'>
            <form onSubmit={sendMessage} className='form'>
                <div className="sendMsg">
                    <Input 
                    className='msg-inp'
                    placeholder='Message...' 
                    type="text" 
                    value={msg} 
                    onChange={e => setMsg(e.target.value)} />
                    <Button  className='msg-btn'type="submit">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMessage
