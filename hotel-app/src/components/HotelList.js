import React, { useState } from 'react'
import Navbar from './Navbar'
import '../assets/List.css'
import { format } from 'date-fns'
import { useLocation, useNavigate } from 'react-router-dom'
import { Hotels } from '../containers/Hotels'
import Footer from './Footer'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const HotelList = () => {
  const back = useNavigate();
  const submit = useNavigate();
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.place);
  const [date, setDate] = useState(location.state.date);
  const [opt, setOpt] = useState(location.state.options);
  const [index,setIndex] = useState("hotel");


  const backtohome = () => {
    setDestination("");
    setDate("");
    setOpt("");
    back('/');
  }

  const bookhotel = ()=>{
         
         submit('/hotel/book',{state:{index,destination,opt,date}})
  }

  return (
    <div>
      <Navbar />


      <div className='listContainer'>
        <div className='listWrapper'>
          <div className='listSearch'>
            <h1 className='lsTitle'>Search</h1>
            <div className='lsItem'>
              <label>Destination</label>
              <input type='text' placeholder={destination} readOnly />
            </div>
            <div className='lsItem'>
              <label>Check-in Date</label>
              <span>
                {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")} `}</span>
            </div>
            <div className='lsItem'>
              <label>Options</label>
              <div className='lsOptItem'>
                <span className='text'>Adult</span>
                <input type='number' className='input' placeholder={opt.adult} readOnly />
              </div>
              <div className='lsOptItem'>
                <span className='text'>Children</span>
                <input type='number' className='input' placeholder={opt.children} readOnly />
              </div>
              <div className='lsOptItem'>
                <span className='text'>Room</span>
                <input type='number' className='input' placeholder={opt.room} readOnly />
              </div>
            </div>
            <button className='btn btn-primary' style={{ width: '100%' }} onClick={backtohome}>Back</button>
          </div>
          <div className='listResult'>

            {Hotels.filter((list => list.city === destination)).length > 0 ? '' : 'No Hotels Found Please Select another Location'}

            {Hotels.filter((list => list.city === destination)).map((item, i) => {
              return (
                <div key={i}>
                  <div className="Item">
                    <img src={item.img} alt="htl" className='h-img' />
                    <div className='Desc'>
                      <h1 className='Title'>Hotel {item.hotelname}</h1>
                      <span className='dis'>{item.address}</span>
                      <span className='features text-secondary'>Fully AC Rooms & Free Internet</span>
                      <span className='features text-secondary'>Doctor On Call</span>
                      <span className='features text-danger'>Couple Freindly</span>
                      <span className='taxi'>Free Cancellation</span>
                      <span className='features text-success'>Includes all Taxes and Fees</span>
                    </div>
                    <div className='Details'>
                      <div className='rating'>
                        <span>Rating : <button>{item.rating}/5</button></span>
                      </div>
                      <div className='price'>
                        <h3 className='text-dark font-wieght-bold'>{item.price}<CurrencyRupeeIcon/> </h3>
                        <span className='features'> (1 room per night)</span>
                        
                        <button className='checkBtn' onMouseOver={()=>{setIndex(`${item.hotelname}`)}} onClick={bookhotel}>Book Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}



          </div>
        </div>
      </div>

      <Footer/>
      


    </div>
  )
}

export default HotelList