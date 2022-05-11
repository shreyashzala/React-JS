import { Route ,Routes } from 'react-router-dom';
import './App.css';
import App1 from './components/App1';
import App2 from './components/App2';
import App3 from './components/App3';
import {store} from './components/redux/store';
import {Provider} from 'react-redux';



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
         <Route exact path='/app3' element={
         <Provider store={store}><App3/></Provider>
         }></Route>
      </Routes>
        
        
      </div>

    </>
  );
}

export default App;
