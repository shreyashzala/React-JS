import React from 'react'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';
import Navbar from './Navbar';
import { Button } from 'primereact/button';
import Footer from './Footer';

const Home = () => {
    return (
        <div className='surface-ground'>
            <Navbar />
            <div className="m-8 p-8">
                
                    <div classNameName="font-bold">
                        <div className="m-2 font-bold text-3xl text-primary-900">Hello,</div>
                        <div className="m-2 font-bold text-8xl text-purple-900">I am Shreyash Zala</div>
                        <div className="m-2 font-bold text-5xl text-red-500">Web Developer</div>
                        <div className="m-2 font-bold text-4xl text-gray-700">From Gujrat,India</div>
                    </div>
                    <div className="mt-5">
                        
                        <Button label='Hire Me' />
                    </div>
            </div>
            <Footer/>

        </div>
    )
}

export default Home