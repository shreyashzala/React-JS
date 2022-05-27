import React, { useState } from 'react'
import Navbar from './Navbar'
import { receipeeContext } from '../helpers/Context'
import ReceipeeMenu from './ReceipeeMenu';
import ReceipeeDetails from './ReceipeeDetails';
import ReceipeeAuther from './ReceipeeAuther';

const ReceipeeApp = () => {

    const [state,setState] = useState("menu");
    const [index,setIndex] = useState(0);

  return (
    <>
      <Navbar  title="Receipee App"/>
      <receipeeContext.Provider value={{state , setState,index,setIndex}}>

          {state === 'menu' && <ReceipeeMenu/>}
          {state === 'detail' && <ReceipeeDetails/>}
          {state === 'auther' && <ReceipeeAuther/>}

      </receipeeContext.Provider>


    </>
  )
}

export default ReceipeeApp
