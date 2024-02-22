import React, { useState } from 'react'

const Tour = ({tour}) => {

  const [showFullText, setShowFullText] = useState(false);

  const handleRead = () => {
    setShowFullText(!showFullText);
  }

  const info = tour.info;

 

  const trimmedInfo = info.substring(0,100);
  return (
    <div className='  bg-white m-4   p-2 rounded-xl h-[95%] w-[90%]'>
        <img className='h-[200px] w-[250px] m-6 rounded-xl' src={tour.image}/>
        <h2 className='text-red-400 m-6'>{tour.name}</h2>
        {
          showFullText ? 
          <p className='m-6'>{info}<button onClick={handleRead}><b>read less</b></button></p>
          :
          <p className='m-6'>{trimmedInfo}...<button onClick={handleRead}><b>read more</b></button></p>
        }
        
    </div>
  )
}

export default Tour;