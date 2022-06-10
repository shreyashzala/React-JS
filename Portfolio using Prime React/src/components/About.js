import React from 'react'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';
import Navbar from './Navbar';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import Footer from './Footer';


const About = () => {
    return (
        <div className='surface-ground'>
            <Navbar />
            <h1 className='text-center text-indigo-500'>About</h1><br />

            <div className='grid ml-3' style={{ width: '98%' }}>
                <div className='col-6'>
                    <Image src="../img/User.jpeg" alt="Image" imageStyle={{ border: '2px solid blue', borderRadius: '50px' }} preview />

                </div>
                <div className='col-6'>
                    <h2 className='ml-3 mr-2'>Name: Shreyash Zala</h2>

                    <p className='ml-3 mb-5 mr-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo amet expedita qui totam autem, tenetur fugiat vero eum illum dolorem nulla voluptate, velit dicta consequuntur nam neque nostrum culpa ipsa. Cum, quos debitis! Beatae saepe ex laudantium ab praesentium reprehenderit magni laboriosam, itaque ipsa, quod exercitationem ad nihil error commodi!Lorem ipsum dolor sit amet consectetur adipisicing elit.  itaque ipsa, quod exercitationem ad nihil error commodi!</p>
                    <Button label='Download CV' icon="pi pi-download" className='flex m-auto' />
                    <h2 className='text-center mt-5 font-bold'>Technologies Known</h2>
                    <div className='ml-3 mr-3'>
                        <h5>HTML</h5>
                        <ProgressBar value={90}></ProgressBar>
                        <h5>PHP</h5>
                        <ProgressBar value={85}></ProgressBar>
                        <h5>JavaScript</h5>
                        <ProgressBar value={80}></ProgressBar>
                        <h5>MySQL</h5>
                        <ProgressBar value={88}></ProgressBar>
                    </div>





                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default About
