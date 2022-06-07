import Chat from "./components/Chat";
import SignIn from "./components/SignIn";
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from './firebase';
import './App.css'

function App() {
  const [user] = useAuthState(auth)
  return (
    <div className="container">
       {user ? <Chat /> :<SignIn />}
      
      
    </div>
  );
}

export default App;
