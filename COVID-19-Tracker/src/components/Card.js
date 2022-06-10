import { Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react'
import CountUp from 'react-countup';
import '../assets/Card.css'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading.....'
    }

    return (
        <div>
            <Grid container spacing={3} justifyContent="center">
                <Grid item md={3}>
                    <Card className="card">
                        <CardContent className='infected'>
                            <Typography color='textSecondary' gutterBottom>Infected</Typography>
                            <Typography variant='h5'>
                                <CountUp start={0} end={confirmed.value} duration={2} separator="," />
                            </Typography>
                            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant='body2'>No of active cases of COVID-19</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={3}>
                    <Card className='card'>
                        <CardContent className='recovered'>
                            <Typography color='textSecondary' gutterBottom>Recovered</Typography>
                            <Typography variant='h5'>{recovered.value}</Typography>
                            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant='body2'>No of active cases of COVID-19</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={3}>
                    <Card className='card'>
                    <CardContent className='deaths'>
                        <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                        <Typography variant='h5'>{deaths.value}</Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>No of active cases of COVID-19</Typography>
                    </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
    
