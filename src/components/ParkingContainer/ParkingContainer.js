import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import ParkingCards from './ParkingCards/ParkingCards';
import './parkingContainer.css'
function ParkingContainer({reference, click}) {
    const slots = useSelector((state) => state.currentSlots)
    useEffect(() => {
        if(slots.length > 1){
            click()
        }
        
    },[slots])

if(slots.length > 1){click()}
    return(
        <div className="cards-container" ref={reference}>
            {slots.map((s) => <ParkingCards slot={s}></ParkingCards>)}
        </div>
    )
};

export default ParkingContainer;