import React from 'react'



const Booking = ({booking}) => {
    return (
        <div>
            <p>Customer Name: {booking.customerName}</p>
            <p>Booking Date: {booking.date}</p>
            <p>Booking Time: {booking.time}</p>
            <p>Number of Guests: {booking.guests}</p>
            <p>Contact Number: {booking.phoneNumber}</p>
            <p>Table: {booking.seating.id}</p>
        </div>
    )
}

export default Booking