import React from 'react'
import { Route, Routes } from 'react-router-dom';
import App1 from './components/App1';
import App2 from './components/App2';
import App3 from './components/App3';
import Navbar from './components/Navbar';
import {store} from './store/store';
import {Provider} from 'react-redux';

const RoutesPath = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <Routes>
                    <Route exact path='/' element={<App1 />}></Route>
                    <Route exact path='/blog' element={<App2 />}></Route>
                    <Route exact path='/app3' element={
                        <Provider store={store}><App3 /></Provider>
                    }></Route>
                </Routes>
            </div>
        </>
    )
}

export default RoutesPath
