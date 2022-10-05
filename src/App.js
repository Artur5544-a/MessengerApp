import './App.css';
import Chat from './components/Chat/Chat';
import SignIn from './components/SignIn/SignIn';
import { auth } from './firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'

function App() {
  const [user] = useAuthState(auth)
  return (
    <>
      {user ? <Chat /> : <SignIn />}
    </>
  );
}

export default App;
