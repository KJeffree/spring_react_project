import React from 'react';
import BookingList from '../components/Bookings/BookingList';
import NewBooking from '../components/Bookings/NewBooking';

class BookingContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        

    }

    

    render() {
        return (
            <div>
                <NewBooking onBookingSubmit={this.props.onBookingSubmit}/>
                <BookingList bookings={this.props.bookings}/>
            </div>    
        )
    }
}

export default BookingContainer