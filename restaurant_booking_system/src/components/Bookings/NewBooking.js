import React from 'react'

class NewBooking extends React.Component {

    constructor(props){
        super(props);
        this.state = {
                customerName: '',
                date: this.props.date,
                time: this.props.time,
                guests: '',
                phoneNumber: '',
                seating: `http://localhost:8080/seatings/${this.props.table.id}`,
                tables: []
        }

        this.handleCustomerChange = this.handleCustomerChange.bind(this)
        this.handleGuestChange = this.handleGuestChange.bind(this)
        this.handleNumberChange = this.handleNumberChange.bind(this)
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
        
    }

    handleCustomerChange(event) {
        this.setState({customerName: event.target.value})
    }
    handleGuestChange(event) {
        this.setState({guests: event.target.value})
    }
    handleNumberChange(event) {
        this.setState({phoneNumber: event.target.value})
    }


    render() {
        return(
                    
            <form className="new-booking-form"
                onSubmit={this.handleSubmit}>
                <br/>
                <input
                    type="text"
                    placeholder="Customer Name"
                    value={this.state.customerName}
                    onChange={this.handleCustomerChange}
                />
                <br/>
                <input
                    type="number"
                    max={this.props.table.seats}
                    placeholder="Number of Guests"
                    value={this.state.guests}
                    onChange={this.handleGuestChange}
                />
                <br/>
                <input
                    type="text"
                    placeholder="Contact Number"
                    value={this.state.phoneNumber}
                    onChange={this.handleNumberChange}
                />
                <br/>
                <input 
                    type="submit"
                    value="Enter"
                />
            </form>
        )
    }
}

export default NewBooking