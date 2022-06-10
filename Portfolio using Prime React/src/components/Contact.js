import React, { useState } from 'react'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';
import Navbar from './Navbar'
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import Footer from './Footer';


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [sub, setSub] = useState('');
    const [msg, setMsg] = useState('');

    return (
        <div className='surface-ground'>
            <Navbar />
            <h1 className='text-center text-indigo-500'>Contact Me</h1><br />
            <div className='text-center'>
                <span className="border-round-xl">
                    <InputText className='w-6 mt-3' placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                </span><br /><br />
                <span className="border-round-xl">
                    <InputText className='w-6' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </span><br /><br />
                <span className="border-round-xl">
                    <InputText className='w-6' placeholder="Subject" value={sub} onChange={(e) => setSub(e.target.value)} />
                </span><br /><br />
                <InputTextarea className='w-6' placeholder='Enter Msg.... ' value={msg} onChange={(e) => setMsg(e.target.value)} rows={5} cols={30} autoResize /><br /><br />

                <Button label="Submit" className="p-button-rounded p-button-danger mb-3" />
            </div>
            <Divider className='text-indigo-500 font-bold' align="center" type="solid">
                <b>OR</b>
            </Divider>
            <div className='text-center mb-4'>
                <i className='pi pi-instagram text-6xl mr-6'></i>
                <i className='pi pi-facebook text-6xl mr-6'></i>
                <i className='pi pi-twitter text-6xl mr-6'></i>
                <i className='pi pi-linkedin text-6xl mr-6'></i>
                <i className='pi pi-whatsapp text-6xl mr-6'></i>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
