// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  Route,
  Routes
} from 'react-router-dom';
import Register from './components/Register';
import ToDO from './components/Todo';
import Game from './components/Tic-tac-toe';
import Calculator from './components/Calculator';



function App() {

  const [mode,setMode] = useState('light');
  
  const toggleMode = ()=>{
      if(mode === 'light'){
         setMode('dark');
         document.body.style.backgroundColor = '#042743';
         document.getElementById('getMode').innerHTML = "Disable Dark Mode";
      } else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        document.getElementById('getMode').innerHTML = "Enable Dark Mode";
      
      }
  }

  return (
    <>
    
     <Navbar title="My App" mode={mode} toggleMode={toggleMode} /><br/>
     <div className="container mt-3">
       {/* <TextForm heading="Enter a text" mode={mode} /> */}

       <Routes>
           <Route exact path='/' element={<TextForm heading="Enter a text" mode={mode} />}>
           </Route>

           <Route exact path='/about' element={<About  title="Accordian" />}>    
           </Route>

           <Route exact path='/register' element={<Register  title="Register" mode={mode} />}>    
           </Route>

           <Route exact path='/todo' element={<ToDO mode={mode} />}>    
           </Route>

           <Route exact path='/tic-tac-toe' element={<Game />}>    
           </Route>

           <Route exact path='/calculator' element={<Calculator />}>    
           </Route>
       </Routes>
     </div>
         
  
    </>
  );
}

export default App;
