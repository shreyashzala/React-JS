import React, { useState } from 'react';
import { blog } from '../containers/BlogList';
import '../assets/App2.css';
import Navbar from './Navbar';
import { Card, CardActions, CardContent, Typography, Button, Dialog, DialogTitle, DialogContent } from '@mui/material';



export default function App2() {

    const [open, setOpen] = useState(false);

    const handleOpen = () => { setOpen(true) }
    const handleClose = () => { setOpen(false) }
    




    return (
        <>
            <Navbar title="BlogList" />
            <div className='container'>
                <h1>Blogs</h1>


                <div className='heading'>
                    {/* {blog.map(card)} */}
                    {blog.map((item) => {
                        return (
                            <>
                                <div className="list" key={item.id}>

                                    <Card sx={{ maxWidth: 450 }}>

                                        <CardContent>
                                            <Typography variant='h5' sx={{ mb: 2, height: 150 }}><strong>{item.title}</strong></Typography><hr />
                                            <Typography>{item.details}</Typography>
                                            <Typography sx={{ mt: 2, textAlign: 'right' }}><strong>-{item.auther}</strong></Typography>

                                        </CardContent>
                                        <CardActions>
                                            <Button variant='contained' color='error' sx={{ m: 2 }} onClick={handleOpen}>Read More</Button>
                                        </CardActions>
                                    </Card>
                                    <Dialog
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <DialogTitle id="alert-dialog-title"><strong>{item.title}</strong></DialogTitle>
                                        <DialogContent id="alert-dialog-description">{item.dis}</DialogContent>
                                    </Dialog>

                                </div>
                            </>
                        )
                    })}
                </div>

            </div>
        </>
    )
}


