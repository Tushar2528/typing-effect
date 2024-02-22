import React from 'react'
import Tour from './Tour'

const Tours = ({tours}) => {
  return (
    <div className='flex  flex-wrap bg-slate-400 w-[50%] h-[70%] p-8  ml-[30%]'>
        {
            tours.map((tour, index) => (
                <div  key={index}>
                    <Tour tour={tour}/>
                </div>
            ))
        }
    </div>
  )
}

export default Tours