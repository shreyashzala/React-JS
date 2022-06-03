import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../assets/tabs.css'


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const ImageTabs = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ mx: 10, mt: 10, borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab sx={{ width: '20%' }} label="Beach Vacations" {...a11yProps(0)} />
                        <Tab sx={{ width: '20%' }} label="Weekend Gateway" {...a11yProps(1)} />
                        <Tab sx={{ width: '20%' }} label="Mountains Calling" {...a11yProps(2)} />
                        <Tab sx={{ width: '20%' }} label="Stay Like Royals" {...a11yProps(3)} />
                        <Tab sx={{ width: '20%' }} label="Party Destinations" {...a11yProps(4)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Grid container spacing={2}>
                        <Grid item md={3}>
                            <img src="Images/img1.png" alt="img1" className='img' />
                            <h3>Maldives</h3>
                        </Grid>
                        <Grid item md={3}>
                            <img src="Images/img2.png" alt="img1" className='img' />
                            <h3>Krabi</h3>
                        </Grid>
                        <Grid item md={3}>
                            <img src="Images/img3.png" alt="img1" className='img' />
                            <h3>Langkawi</h3>
                        </Grid>
                        <Grid item md={3}>
                            <img src="Images/img4.png" alt="img1" className='img' />
                            <h3>Goa</h3>
                        </Grid>
                    </Grid>

                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Grid container spacing={2}>
                        <Grid item md={3}>
                            <img src="Images/img5.png" alt="img1" className='img' />
                            <h3>Ooty</h3>
                        </Grid>
                        <Grid item md={3}>
                            <img src="Images/img6.png" alt="img1" className='img' />
                            <h3>Chandigardh</h3>
                        </Grid>
                        <Grid item md={3}>
                            <img src="Images/img7.png" alt="img1" className='img' />
                            <h3>Daheradun</h3>
                        </Grid>
                        <Grid item md={3}>
                            <img src="Images/img8.png" alt="img1" className='img' />
                            <h3>Munnar</h3>
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Grid container spacing={2}>
                        <Grid item md={3}>
                            <img src="Images/img5.png" alt="img1" className='img' />
                            <h3>Ooty</h3>
                        </Grid>
                        <Grid item md={3}>
                            <img src="Images/img9.png" alt="img1" className='img' />
                            <h3>Shimla</h3>
                        </Grid>
                        <Grid item md={3}>
                            <img src="Images/img8.png" alt="img1" className='img' />
                            <h3>Munnar</h3>
                        </Grid>
                        <Grid item md={3}>
                            <img src="Images/img10.png" alt="img1" className='img' />
                            <h3>Manali</h3>
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Grid container spacing={2}>
                        <Grid item md={3}>
                            <img src="Images/img11.png" alt="img1" className='img' />
                            <h3>Jodhpur</h3>
                        </Grid>
                        <Grid item md={3}>
                            <img src="Images/img12.png" alt="img1" className='img' />
                            <h3>Udaipur</h3>
                        </Grid>
                        <Grid item md={3}>
                            <img src="Images/img13.png" alt="img1" className='img' />
                            <h3>AbuDhabi</h3>
                        </Grid>
                        <Grid item md={3}>
                            <img src="Images/img14.png" alt="img1" className='img' />
                            <h3>Dubai</h3>
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <Grid container spacing={2}>
                        <Grid item md={3}>
                            <img src="Images/img15.png" alt="img1" className='img' />
                            <h3>Amsterdom</h3>
                        </Grid>
                        <Grid item md={3}>
                            <img src="Images/img16.png" alt="img1" className='img' />
                            <h3>Hong Kong</h3>
                        </Grid>
                        <Grid item md={3}>
                            <img src="Images/img17.png" alt="img1" className='img' />
                            <h3>Mumbai</h3>
                        </Grid>
                        <Grid item md={3}>
                            <img src="Images/img18.png" alt="img1" className='img' />
                            <h3>Bhuvaneswar</h3>
                        </Grid>
                    </Grid>
                </TabPanel>
            </Box>
            <div className='container'>
                <h1 className='mb-3'>Popular Destinations</h1>
                <Grid container spacing={2} mb={3}>
                    <Grid item md={4}>
                        <img src="Images/img-1.png" alt="img1" style={{ width: '100%' }} />
                    </Grid>
                    <Grid item md={4}>
                        <img src="Images/img-2.png" alt="img1" style={{ width: '100%', height: '49%' }} className='mb-2' />
                        <img src="Images/img-3.png" alt="img1" style={{ width: '100%', height: '49%' }} />
                    </Grid>
                    <Grid item md={4}>
                        <img src="Images/img-4.png" alt="img1" style={{ width: '100%', height: '49%' }} className='mb-2' />
                        <img src="Images/img-5.png" alt="img1" style={{ width: '100%', height: '49%' }} />
                    </Grid>

                </Grid>
                <Grid container spacing={2} mb={3}>
                    <Grid item md={4}>
                        <img src="Images/img-7.png" alt="img1" style={{ width: '100%', height: '49%' }} className='mb-2' />
                        <img src="Images/img-8.png" alt="img1" style={{ width: '100%', height: '49%' }} />
                    </Grid>
                    <Grid item md={4}>
                        <img src="Images/img-9.png" alt="img1" style={{ width: '100%', height: '49%' }} className='mb-2' />
                        <img src="Images/img-6.png" alt="img1" style={{ width: '100%', height: '49%' }} />
                    </Grid>
                    <Grid item md={4}>
                        <img src="Images/img-10.png" alt="img1" style={{ width: '100%' }} />
                    </Grid>

                </Grid>
                <Grid container spacing={2} mb={3}>
                    <Grid item md={4}>
                        <img src="Images/img-11.png" alt="img1" style={{ width: '100%' }} />
                    </Grid>
                    <Grid item md={4}>
                        <img src="Images/img-12.png" alt="img1" style={{ width: '100%', height: '49%' }} className='mb-2' />
                        <img src="Images/img-13.png" alt="img1" style={{ width: '100%', height: '49%' }} />
                    </Grid>
                    <Grid item md={4}>
                        <img src="Images/img-14.png" alt="img1" style={{ width: '100%', height: '49%' }} className='mb-2' />
                        <img src="Images/img-15.png" alt="img1" style={{ width: '100%', height: '49%' }} />
                    </Grid>

                </Grid>
            </div>
        </div>
    )
}

export default ImageTabs