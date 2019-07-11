import React, {Component, Fragment} from "react"

import TableContainer from "./TableContainer"
import FilterBar from "../components/FilterBar";



class Main extends Component {
    constructor() {
        super();
        this.state = {
            bookings: [],
            tables: [],
            date: '',
            time: ''
        }

        this.handleBookingSubmit = this.handleBookingSubmit.bind(this)
        this.handleTableSubmit = this.handleTableSubmit.bind(this)
        this.handleDateChange = this.handleDateChange.bind(this)
        this.handleTimeChange = this.handleTimeChange.bind(this)
    }

    handleDateChange(event) {                
        this.setState({date: event.target.value})
    }

    handleTimeChange(event){        
        this.setState({time: event.target.value})
    }

    handleTableSubmit(submittedTable) {
        const url = "http://localhost:8080/seatings"
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(submittedTable),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(response => {
            const url = "http://localhost:8080/seatings/all"
            fetch(url)
                .then(res=>res.json())
                .then((tables) => 
                {this.setState((prevState) => ({tables: tables}))})
                .catch(err => console.error)
        })
    }

    componentDidMount() {
        var date = new Date().getDate()
        var month = new Date().getMonth() + 1
        if (month < 10){
            month = "0" + month.toString()
        }
        var year = new Date().getFullYear()
        this.setState({date: `${year}-${month}-${date}`})

        var hour = new Date().getHours()
        var minutes = new Date().getMinutes()
        console.log(minutes);
        
        if (minutes < 30){
            minutes = "00"
        } else {
            minutes = "30"
        }
        this.setState({time: `${hour}:${minutes}`})
        const bookingUrl = "http://localhost:8080/bookings/all"
        fetch(bookingUrl)
            .then(res=>res.json())
            .then((bookings) => 
            {this.setState((prevState) => ({bookings: bookings}))})
        
            .catch(err => console.error)

        const tableUrl = "http://localhost:8080/seatings/all"

        fetch(tableUrl)
            .then(res => res.json())
            .then(tables => this.setState({tables: tables}))
            .catch(err => console.error)
    }

    handleBookingSubmit(submittedBooking){
        const url = "http://localhost:8080/bookings"
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(submittedBooking),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                const url = "http://localhost:8080/bookings/all"
                fetch(url)
                    .then(res=>res.json())
                    .then((bookings) => 
                    {this.setState((prevState) => ({bookings: bookings}))})
                    .catch(err => console.error)
            })
    }



    render() {
        return (
                <Fragment>
                    <h1>Restaurant Booking System</h1>
                    <FilterBar onTimeChange={this.handleTimeChange} time={this.state.time} date={this.state.date} onDateChange={this.handleDateChange}/>
                    <TableContainer onTableSubmit={this.handleTableSubmit} date={this.state.date} time={this.state.time} onBookingSubmit={this.handleBookingSubmit} bookings={this.state.bookings} tables={this.state.tables}/>
                </Fragment>
        )
    }
}

export default Main