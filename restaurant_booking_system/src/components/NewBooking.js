import React from 'react'

class NewBooking extends React.Component {

    constructor(props){
        super(props);
        this.state = {
                customerName: '',
                date: '',
                time: '',
                guests: '',
                phoneNumber: '',
                seating: '',
                tables: []
        }

        this.handleCustomerChange = this.handleCustomerChange.bind(this)
        this.handleDateChange = this.handleDateChange.bind(this)
        this.handleTimeChange = this.handleTimeChange.bind(this)
        this.handleGuestChange = this.handleGuestChange.bind(this)
        this.handleNumberChange = this.handleNumberChange.bind(this)
        this.handleTableChange = this.handleTableChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    componentDidMount() {
        const tableUrl = "http://localhost:8080/seatings/all"
        fetch(tableUrl)
            .then(res => res.json())
            .then(tables => this.setState({tables: tables}))
            .catch(err => console.error)
    }

    handleSubmit(event) {
        event.preventDefault();
        const customerName = this.state.customerName.trim();
        const date = this.state.date.trim();
        const time = this.state.time.trim();
        const guests = this.state.guests.trim();
        const phoneNumber = this.state.phoneNumber.trim();
        const seating = this.state.seating.trim();

        if (!customerName || !date || !time || !guests || !phoneNumber || !seating){
            return
        }
        this.props.onBookingSubmit({
            customerName: customerName,
            date: date,
            time: time,
            guests: guests,
            phoneNumber: phoneNumber,
            seating: seating
        });
        this.setState({
            customerName: '',
            date: '',
            time: '',
            guests: '',
            phoneNumber: '',
            seating: ''
        })
    }

    handleCustomerChange(event) {
        this.setState({customerName: event.target.value})
    }
    handleDateChange(event) {
        this.setState({date: event.target.value})
    }
    handleTimeChange(event) {
        this.setState({time: event.target.value})
    }
    handleGuestChange(event) {
        this.setState({guests: event.target.value})
    }
    handleNumberChange(event) {
        this.setState({phoneNumber: event.target.value})
    }
    handleTableChange(event) {
        this.setState({seating: event.target.value})   
    }


    render() {
        return(
                    
            <form className="new-booking-form"
                onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Customer Name"
                    value={this.state.customerName}
                    onChange={this.handleCustomerChange}
                />
                <input
                    type="date"
                    placeholder="Booking Date"
                    value={this.state.date}
                    onChange={this.handleDateChange}
                />
                <input
                    type="text"
                    placeholder="Booking Time"
                    value={this.state.time}
                    onChange={this.handleTimeChange}
                />
                <input
                    type="number"
                    placeholder="Number of Guests"
                    value={this.state.guests}
                    onChange={this.handleGuestChange}
                />
                <input
                    type="text"
                    placeholder="Contact Number"
                    value={this.state.phoneNumber}
                    onChange={this.handleNumberChange}
                />
                <select onChange={this.handleTableChange}>
                    <option>Select a Table</option>
                    {this.state.tables.map((table, index) => {
                    return <option key={index} value={`http://localhost:8080/seatings/${table.id}`}>Table: {table.id} Seats: {table.seats}</option>})}
                </select>
                <input 
                    type="submit"
                    value="Enter"
                />
            </form>
        )
    }
}

export default NewBooking