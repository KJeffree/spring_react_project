import React from 'react'
import Booking from './Booking';

const BookingList = ({bookings}) => {

    const bookingComponents = bookings.map((booking, index) => {
        return <Booking 
            booking={booking}
            key={index}
            />
    })

    return (
        <div>
            <h1>Booking List</h1>
            {bookingComponents}
        </div>
    )
}

export default BookingList
