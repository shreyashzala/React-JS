import React, { useContext , useState } from 'react'
import { receipeeContext } from '../helpers/Context'
import { FoodList } from '../containers/ReceippeList'
import { Card, CardHeader, CardContent, CardMedia, Typography, Button, TextField } from '@mui/material'

const ReceipeeDetails = () => {

    const { setState, index } = useContext(receipeeContext);

    const[serve, setServe] = useState(1);

    const handleChange = (e)=>{
        var val = e.target.value;
        setServe(val);
    }

    return (
        <div>
            <Card style={{ border: '2px solid red' }} sx={{ maxWidth: 750, mx: 10, my: 5 }}>
                <CardHeader title={FoodList[index].name} />

                <CardMedia sx={{ height: 400, p: 1, borderRadius: 50 }}
                    component="img"
                    image={FoodList[index].img}
                    alt="img"
                />
                <CardContent>
                    <Typography sx={{ p: 1 }}>{FoodList[index].details}</Typography>
                    <Typography sx={{ p: 1 }}><strong>Time : </strong>{FoodList[index].time}</Typography>
                    <Typography sx={{ p: 1 }}><strong>Cook : </strong>{FoodList[index].auther}</Typography>

                    <br />
                    <h3>Ingredients</h3>
                    <div className='text-info font-weight-bold mb-2'>
                        {FoodList[index].items}
                    </div>
                    <h3>Made by {FoodList[index].auther}</h3>
                    <br/>
                    <TextField label="no of serves" value={serve} onChange={handleChange} size="small" />
                    <br/><br/>
                    <strong>Step-1 :</strong>
                    <p>Collect all Ingredients</p>
                    <p>No of Tomatoes : <span> {serve*3} </span></p>
                    <p>No of Onion : <span> {serve*2} </span></p>
                    <strong>Step-2 :</strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, exercitationem placeat ipsam laborum ipsum rerum quam.</p>
                    <strong>Step-3 :</strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, exercitationem placeat ipsam laborum ipsum rerum quam.</p>
                    <strong>Step-4 :</strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, exercitationem placeat ipsam laborum ipsum rerum quam.</p>
                    <strong>Step-5 :</strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, exercitationem placeat ipsam laborum ipsum rerum quam.</p>


                </CardContent>
            </Card>
            <div className='text-center d-print-none'>
                <Button variant='contained' color='error' className='m-3' onClick={() => { setState("menu") }}>Back</Button>
                <Button variant='contained' color='success' className='m-3' onClick={() => { window.print() }}>Download</Button>
            </div>

        </div>
    )
}

export default ReceipeeDetails