import React, { useEffect, useRef, useState } from 'react'

const useTypingEffect = (textToType, speed) => {

    const [currentPosition, setCurrentPosition] = useState(0);
    const currentPositionRef = useRef(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPosition((value) => value + 1)
            currentPositionRef.current += 1;

            if(currentPositionRef.current > textToType.length){
                clearInterval(interval);
            }
        }, speed)

        return () => clearInterval(interval)
    },[speed, textToType]);


  return  textToType.substring(0, currentPosition);
}

export default useTypingEffect