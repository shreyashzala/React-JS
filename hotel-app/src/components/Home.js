import { DirectionsCar, Flight, LocalHotel, LocalTaxi, Person } from '@mui/icons-material'
import {Alert} from '@mui/material'
import DateRangeIcon from '@mui/icons-material/DateRange';
import React, { useState } from 'react'
import Navbar from './Navbar'
import '../assets/home.css'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'
import ImageTabs from './Tabs';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();
    const [error, setError] = useState(false)
    const [place, setPlace] = useState("")
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [openDate, setOpenDate] = useState(false);
    const [select, setSelect] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const handleSearch = () => {
        if (place === "") {
            setError(true);
        } else {
            navigate("/hotel", { state: { place, date, options } })
        }


    }

    const handleopt = (name, op) => {
        setOptions(prev => {
            return {
                ...prev, [name]: op === "i" ? options[name] + 1 : options[name] - 1
            }
        })
    }
    return (
        <div>
            <Navbar />

            <div className='header'>
                <div className="headerContainer">
                    <div className='headerList'>
                        <div className='headerListItem active'>
                            <LocalHotel /><span>Stays</span>
                        </div>
                        <div className='headerListItem'>
                            <Flight /><span>Flights</span>
                        </div>
                        <div className='headerListItem'>
                            <DirectionsCar /><span>Car Rentals</span>
                        </div>
                        <div className='headerListItem'>
                            <LocalHotel /><span>Attractions</span>
                        </div>
                        <div className='headerListItem'>
                            <LocalTaxi /><span>Airport Taxis</span>
                        </div>
                    </div>
                    <h1 className="headerTitle">Welcome To Hotel Booking !!!!</h1>
                    <p className='headerDes'>Get Rewarded From your travels - unlock instant saving of 10% or more with online booking</p>
                    <button className='headerBtn'>Sign in / Register</button>
                    <div className='headerSearch'>
                        <div className='headerSearchItem'>
                            <LocalHotel className='headerIcon' />
                            <input type="text" placeholder='Where are you going ?' className='headerSearchInput' onChange={e => setPlace(e.target.value)} />
                        </div>
                        <div className='headerSearchItem'>
                            <DateRangeIcon className='headerIcon' />
                            <span onClick={() => { setOpenDate(!openDate) }} className='headerSearchText'>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")} `}</span>
                            {openDate && <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className='date'
                            />}
                        </div>
                        <div className='headerSearchItem'>
                            <Person className='headerIcon' />
                            <span className='headerSearchText' onClick={() => { setSelect(!select) }}>{`${options.adult} adult | ${options.children} children | ${options.room} rooms`}</span>
                            {select && <div className='Options'>
                                <div className='OptionsItem'>
                                    <span className='OptionText'>Adult</span>
                                    <div className='optCounter'>
                                        <button className='optionButton'
                                            disabled={options.adult <= 1} onClick={() => { handleopt("adult", "d") }}>-</button>
                                        <span className='optionNumber'>{options.adult}</span>
                                        <button className='optionButton' onClick={() => { handleopt("adult", "i") }}>+</button>
                                    </div>

                                </div>
                                <div className='OptionsItem'>
                                    <span className='OptionText'>Children</span>
                                    <div className='optCounter'>
                                        <button className='optionButton' disabled={options.children <= 0} onClick={() => { handleopt("children", "d") }}>-</button>
                                        <span className='optionNumber'>{options.children}</span>
                                        <button className='optionButton' onClick={() => { handleopt("children", "i") }}>+</button>
                                    </div>

                                </div>
                                <div className='OptionsItem'>
                                    <span className='OptionText'>Room</span>
                                    <div className='optCounter'>
                                        <button className='optionButton' disabled={options.room <= 1} onClick={() => { handleopt("room", "d") }}>-</button>
                                        <span className='optionNumber'>{options.room}</span>
                                        <button className='optionButton' onClick={() => { handleopt("room", "i") }}>+</button>
                                    </div>

                                </div>
                            </div>}

                        </div>
                        <div className='headerSearchItem'>
                            <button className='headerBtn' onClick={handleSearch}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
            {error && <Alert className='mt-5' severity="error" variant='filled'>Please Enter The Location</Alert>}
            <ImageTabs />
            <Footer />

        </div>
    )
}

export default Home