import React from 'react';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';
import Navbar from './Navbar'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Footer from './Footer';

const Project = () => {
    return (
        <div className='surface-ground'>
            <Navbar />
                <h1 className='text-center text-indigo-500'>Projects</h1><br />
                <div className='grid ml-3' style={{width:'98%'}}>
                    <div className='col-4'>
                        <Card title="E-Learning Website" style={{ width: '25rem', marginBottom: '2em' }}>
                            <p className="m-3" style={{ lineHeight: '1.5' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt.quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                            <Button label="View Code" className="p-button-warning" icon="pi pi-github" />
                        </Card>

                    </div>
                    <div className='col-4'>
                        <Card title="OSMS Website" style={{ width: '25rem', marginBottom: '2em' }}>
                            <p className="m-3" style={{ lineHeight: '1.5' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt.quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                            <Button label="View Code" className="p-button-warning" icon="pi pi-github" />
                        </Card>

                    </div>
                    <div className='col-4'>
                        <Card title="Hotel Booking app" style={{ width: '25rem', marginBottom: '2em' }}>
                            <p className="m-3" style={{ lineHeight: '1.5' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt.quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                            <Button label="View Code" className="p-button-warning" icon="pi pi-github" />
                        </Card>

                    </div>
                    <div className='col-4'>
                        <Card title="Blood Donation Website" style={{ width: '25rem', marginBottom: '2em' }}>
                            <p className="m-3" style={{ lineHeight: '1.5' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt.quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                            <Button label="View Code" className="p-button-warning" icon="pi pi-github" />
                        </Card>

                    </div>
                    <div className='col-4'>
                        <Card title="Online Voting System" style={{ width: '25rem', marginBottom: '2em' }}>
                            <p className="m-3" style={{ lineHeight: '1.5' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt.quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                            <Button label="View Code" className="p-button-warning" icon="pi pi-github" />
                        </Card>

                    </div>
                    <div className='col-4'>
                        <Card title="Quiz App" style={{ width: '25rem', marginBottom: '2em' }}>
                            <p className="m-3" style={{ lineHeight: '1.5' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt.quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                            <Button label="View Code" className="p-button-warning" icon="pi pi-github" />
                        </Card>

                    </div>
                </div>
            
            <Footer/>
        </div>
    )
}

export default Project