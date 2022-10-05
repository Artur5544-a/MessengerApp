import React from 'react'
import { auth } from '../../firebase.js'
import { Button } from '@material-ui/core'
import './SignOut.css'
function SignOut() {
    return (
        <div className='sign-out'>
            <Button className='sign-btn'onClick={() => auth.signOut()}>Sign Out</Button>
        </div>
    )
}

export default SignOut
