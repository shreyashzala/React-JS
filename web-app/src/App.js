import { Route ,Routes } from 'react-router-dom';
import './App.css';
import App1 from './components/App1';
import App2 from './components/App2';



function App() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">Web App</span>
      </nav>
      <div className='container'>
      <Routes>
         <Route exact path='/' element={<App1 />}></Route>
         <Route exact path='/blog' element={<App2 />}></Route>
      </Routes>
        
        
      </div>

    </>
  );
}

export default App;
