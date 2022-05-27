import React, { useContext } from 'react'
import { FoodList } from '../containers/ReceippeList'
import { Card, CardHeader, CardContent, CardMedia, Typography, Grid, Button } from '@mui/material'
import { receipeeContext } from '../helpers/Context'

const ReceipeeMenu = () => {

    const {setState,setIndex} = useContext(receipeeContext);

    


    return (
        <>
            <div>

                <Grid container>



                    {FoodList.map((item, i) => {


                        return (
                            <Grid item md={4}>


                                <div key={i} id={i}>
                                    <Card className="d-print-none" style={{ border: '2px solid red' }} sx={{ maxWidth: 450, m: 3 }}>
                                        <CardHeader title={item.name} />

                                        <CardMedia sx={{ height: 350, p: 1, borderRadius: 50 }}
                                            component="img"
                                            image={item.img}
                                            alt="img"
                                        />
                                        <CardContent>
                                            <Typography sx={{ p: 1 }}>{item.details}</Typography>
                                            <Typography sx={{ p: 1 }}><strong>Time : </strong>{item.time}</Typography>
                                            <Typography sx={{ p: 1 }} onClick={()=>{setIndex(i);
                                                setState("auther");}}><strong>Cook : </strong>{item.auther} </Typography>

                                            <br />
                                            <h3>Full Receipee <span className='float-right mr-2'><Button variant='contained' size="large" 
                                            onClick={()=>{setIndex(i);
                                                setState("detail");}}>Read</Button></span></h3>

                                        </CardContent>
                                    </Card>




                                </div>
                            </Grid>
                        )
                    })}

                </Grid>




            </div>

        </>
    )
}

export default ReceipeeMenu