import React, { useEffect, useState } from 'react'
import {FormControl, NativeSelect} from '@mui/material';
import { countries } from '../containers/api';

const Country = ({handleCountryChange}) => {

  const [country,setCountry] = useState([]);

  useEffect (()=>{
    const fetchCountry = async ()=>{
       setCountry(await countries())
    }
    fetchCountry();
  })
  return (
    <div className='text-center mt-3 mb-3'>
       <FormControl>
           <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
             <option value='global'>Global</option>
             {country.map((country,i) => <option key={i} value={country}>{country}</option>)}
           </NativeSelect>
       </FormControl>
    </div>
  )
}

export default Country
