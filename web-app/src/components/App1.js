import React, { useState } from "react";
import { List } from "../containers/MovieList";
import '../assets/App1.css';
import Navbar from './Navbar';
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";




export default function App1() {

    const [showList, setShowList] = useState(List);

    return (
        <>
            <Navbar title="MovieList" />


            <br />

            <div className="head container">
                <Grid container spacing={2}>
                    {
                        showList.map((index) => {
                            return (
                                <>
                                    <Grid item md={6}>
                                        <Card sx={{ maxWidth: 450 }} key={index.id}>
                                            <CardMedia
                                                component="img"
                                                height={100}
                                                image={index.img}
                                                alt="img"
                                            />
                                            <CardContent>
                                                <Typography variant='h5'  sx={{mb:1}}><strong>{index.name}</strong></Typography>
                                                <Typography color='main.secondary'  sx={{mb:1}}><strong>About :</strong>
                                                    {index.dis}
                                                </Typography>
                                                <Typography color='main.secondary'><strong>Rating : </strong>
                                                    {index.rating}/10</Typography>
                                            </CardContent>

                                        </Card>
                                    </Grid>
                                </>
                            )
                        })

                    }
                </Grid>
            </div>
        </>
    )
}
