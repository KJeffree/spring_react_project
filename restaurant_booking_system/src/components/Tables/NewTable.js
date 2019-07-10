import React from 'react'

class NewTable extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            seats: ''
        }
        this.handleSeatsChange = this.handleSeatsChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        const seats = this.state.seats.trim();
        if(!seats) {
            return
        }
        this.props.onTableSubmit({seats: seats})
        this.setState({seats: ''});
    }

    handleSeatsChange(event) {        
        this.setState({seats: event.target.value})
    }

    render() {
        return(
                    
                    <form className="new-table-form" onSubmit={this.handleSubmit}>
                        <input
                            type="number"
                            placeholder="Number of Seats"
                            value={this.state.seats}
                            onChange={this.handleSeatsChange}
                        />
                        <input 
                            type="submit"
                            value="Enter"
                        />
                    </form>
        )
    }
}

export default NewTable