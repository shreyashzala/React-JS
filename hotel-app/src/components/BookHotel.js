import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Hotels } from '../containers/Hotels'
import '../assets/bookeHotel.css'
import Navbar from './Navbar'
import Footer from './Footer'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import CancelIcon from '@mui/icons-material/Cancel';
import { format } from 'date-fns'
import swal from 'sweetalert'


const BookHotel = () => {
    const location = useLocation();
    const [index] = useState(location.state.index)
    const [room] = useState(location.state.opt);
    const [date] = useState(location.state.date)
    const [city] = useState(location.state.destination)
    
    const [slideNumber, setSlideNumber] = useState(0)
    const [open, setOpen] = useState(false)
    const handleopen = (num) => {
        setSlideNumber(num);
        setOpen(true);
    }

    const photos = [
        {
            src: "../Images/hotel/r-1.png"
        },
        {
            src: "../Images/hotel/b-1.png"
        },
        {
            src: "../Images/hotel/b-2.png"
        },
        {
            src: "../Images/hotel/s-1.png"
        },
        {
            src: "../Images/hotel/s-2.png"
        },
        {
            src: "../Images/hotel/s-3.png"
        },
    ]

    const handleMove = (direction) => {
        let newSlideNumber;

        if (direction === 'l') {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
        } else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
        }

        setSlideNumber(newSlideNumber);
    }

    const pay = () => {
       
        var orderid = Math.floor(1000 + Math.random() * 9000);
        swal("Your Booking Has Confirmed", `Your Order Id is : ORDS${orderid}`, "success");
    }

    


    return (
        <div>

            <Navbar />


            {Hotels.filter((list => list.hotelname === index)).map((item, i) => {
                return (
                    <div key={i}>
                        <div className='hotelContainer'>
                            {open && <div className='slider'>
                                <CancelIcon className='close' onClick={() => { setOpen(false) }} />
                                <ArrowCircleLeftIcon className='arrow' onClick={() => { handleMove("l") }} />
                                <div className='sliderWrapper'>
                                    <img src={photos[slideNumber].src} alt='img' className='sliderImg' />
                                </div>
                                <ArrowCircleRightIcon className='arrow' onClick={() => { handleMove("r") }} />
                            </div>}

                            <div className='hotelWrapper'>
                                <button className='book' data-toggle="modal" data-target="#exampleModalCenter">Book Now</button>
                                <h1 className='Tittle'>Hotel {item.hotelname}</h1>
                                <div className='Address'>{item.address} - {city}</div>
                                <div className='hotelImages'>
                                    {photos.map((photo, i) => {
                                        return (
                                            <div className='ImgWrapper'>
                                                <img className='hotelImg' src={photo.src} alt='img' onClick={() => { handleopen(i) }} />
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className='row'>
                                    <div className='col-md-8 text'>
                                        <h2>About us</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, exercitationem placeat ipsam laborum ipsum rerum quam aperiam dignissimos non obcaecati perspiciatis sequi officia ut quod dolorum quaerat pariatur at qui eos quia quidem.</p>
                                    </div>
                                    <div className='col-md-4 mt-3 hotelprice'>
                                        <h2 className='text-center'>Total Amount  </h2>

                                        <p>No. of Rooms : {room.room} </p>
                                        <p>Cost (1 room) : {item.price}<CurrencyRupeeIcon /></p>
                                        <button>Total - &nbsp;
                                            {`${item.price}` * ` ${room.room}`}
                                            <CurrencyRupeeIcon /></button>
                                    </div>
                                    {/* Start Modal */}

                                    <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLongTitle">Summary</h5>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <p>Please Provide Following Details</p>
                                                    <form autoComplete='off'>
                                                        <div className="form-group">
                                                            <label>Name</label>
                                                            <input type="text" className="form-control" id="name" placeholder="Enter Name" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Email address</label>
                                                            <input type="email"
                                                                className="form-control" id="mail" placeholder="Enter email" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Phone Number</label>
                                                            <input type="number" className="form-control" id="phone" placeholder="Mobile No" />
                                                        </div>

                                                    </form>
                                                    <p>Your Booking Summary</p>
                                                    <p>Hotel Name : {`Hotel - ${item.hotelname}`}</p>
                                                    <p>Check in Date: {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")} `} </p>
                                                    <p>No. Of Person: {`Adult - ${room.adult} & Children - ${room.children}`} </p>
                                                    <p>No. of Rooms : {room.room} </p>
                                                    <p>Cost (1 room) : {item.price}<CurrencyRupeeIcon /></p>

                                                </div>
                                                <div className="modal-footer">
                                                    <button className='btn btn-success' onClick={pay}>Pay - &nbsp;
                                                        {`${item.price}` * ` ${room.room}`}
                                                        <CurrencyRupeeIcon />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* End Modal */}


                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}


            <Footer />

        </div>
    )
}

export default BookHotel