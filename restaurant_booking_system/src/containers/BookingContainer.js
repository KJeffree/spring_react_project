import React from 'react';
import BookingList from '../components/BookingList';
import {Link} from 'react-router-dom'

class BookingContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookings: []
        }
    }

    componentDidMount() {
        const url = "http://localhost:8080/bookings/all"
        fetch(url)
            .then(res=>res.json())
            .then(bookings => this.setState({bookings: bookings}))
            .catch(err => console.error)
    }

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/new-booking">New Booking</Link>
                    </li>
                </ul>
                <BookingList bookings={this.state.bookings}/>
            </div>    
        )
    }
}

export default BookingContainer