import React, { useContext, useState, useEffect } from 'react'
import { receipeeContext } from '../helpers/Context'
import { FoodList } from '../containers/ReceippeList'
import { Button } from '@mui/material'
import '../assets/App6.css'

const ReceipeeAuther = () => {

  const { setState, index } = useContext(receipeeContext);

  const [cook] = useState(3);
  const [num, setNum] = useState(0);


  useEffect(() => {
    const lastNum = 2;

    if (num < 0) {
      setNum(lastNum)
    }
    if (num > lastNum) {
      setNum(0)
    }
  }, [num, cook])


  useEffect(() => {
    let slider = setInterval(() => {
      setNum(num + 1)
    }, 5000);
    return () => {
      clearInterval(slider)
    }
  }, [num])

  return (
    <div>

      <section className='section-i'>
        <div className='section-center-i'>
          {FoodList.filter(list => list.auther === FoodList[index].auther).map((item, i) => {

            return (
              <div key={i}>

               <h1>Best Receipee : {item.name}</h1>  

               <h1>Cook Details</h1>
               <ul>
                 <li>Cook Name: {item.auther}</li>
                 <li>Cook Age: {item.age}</li>
                 <li>Cook Gender: {item.gender}</li>
               </ul>
               <h1>Other Receipees Made by {item.auther}</h1>    

                <section className='section'>
                  <div className='section-center'>
                    {item.item.map((sub, i) => {
                      let position = "nextSlide";
                      if (i === num) {
                        position = "activeSlide"
                      }
                      if (i === num - 1 || (num === 0 && i === 2)) {
                        position = "lastSlide"
                      }
                      return (
                        <article className={position} key={i}>
                          <h4 className='m-2'> {sub.iname}</h4>
                          <p className='p-3'>{sub.idis}</p>
                        </article>
                      )
                    })}
                    <Button variant='contained' color='error' className='next m-3' onClick={() => { setNum(num + 1) }}>Next</Button>
                    <Button variant='contained' color='error' className='prev m-3' onClick={() => { setNum(num - 1) }}>Prev</Button>
                  </div>
                </section>

              </div>
            )
          })}
        </div>
      </section>





      <Button variant='contained' color='error' className='m-3' onClick={() => { setState("menu") }}>Back</Button>
    </div>
  )
}

export default ReceipeeAuther