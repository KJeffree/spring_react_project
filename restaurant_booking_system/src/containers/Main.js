import React, {Component, Fragment} from "react"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import BookingContainer from "./BookingContainer";
import TableContainer from "./TableContainer"
import NavBar from "../components/NavBar.js"
import NewTable from "../components/NewTable.js"
import NewBooking from "../components/NewBooking.js"



class Main extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    handleTableSubmit(submittedTable) {
        const url = "http://localhost:8080/seatings"
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(submittedTable),
            headers: { 'Content-Type': 'application/json'}
        })
            .then(response => response.json())
    }

    handleBookingSubmit(submittedBooking){
        console.log(submittedBooking);
        
        const url = "http://localhost:8080/bookings"
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(submittedBooking),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
    }



    render() {
        return (
            <Router>
                <Switch>
                <Fragment>
                    <NavBar/>
                    <h1>Restaurant Booking System</h1>
                    <Route exact path="/bookings" component={BookingContainer}/>
                    <Route exact path="/tables" render={() => <TableContainer/>}/>
                    <Route 
                        exact path="/new-table"
                        render={() => <NewTable onTableSubmit={this.handleTableSubmit}/>}
                    />
                    <Route 
                    exact path="/new-booking"
                    render={() => <NewBooking onBookingSubmit={this.handleBookingSubmit}/>}
                />
                </Fragment>
                </Switch>
            </Router>
        )
    }
}

export default Main