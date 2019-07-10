import React from 'react'
import Popup from "reactjs-popup"
import NewBooking from '../Bookings/NewBooking';

const Table = ({table, bookings, date, time, onBookingSubmit}) => {  
    
    var className = "tableView"
    var booking=""        

    for (var i = 0; i < bookings.length; i++){
        console.log("current time", time);
        console.log("booking time", bookings[i].time);
        
        
        if (bookings[i].seating.id === table.id && date === bookings[i].date && time === bookings[i].time){
            className= "booked"
            booking=bookings[i]
        }
    }    
    

    function renderBooking () {        
        if (booking){
            return (
                <div className="booking">
                <p>Name: {booking.customerName}</p>
                <p>Guests: {booking.guests}</p>
                <p>Time: {booking.time}</p>
                <p>PhoneNumber: {booking.phoneNumber}</p>
                </div>
                
            )
        } else {
            return <NewBooking onBookingSubmit={onBookingSubmit} date={date} table={table.id}/>
        }
    }
    return (
        
            <Popup
                trigger={<div className={className}>
                <p>{table.id}</p>
                <p>Max: {table.seats}</p>
                </div>}
                modal
            >
            <div className="booking">
                {renderBooking()}
            </div>

            </Popup>
            
        
    )
}

export default Table