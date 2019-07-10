import React from 'react';
import TableList from '../components/Tables/TableList';

class TableContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <TableList onBookingSubmit={this.props.onBookingSubmit} date={this.props.date} time={this.props.time} bookings={this.props.bookings} tables={this.props.tables}/>
            </div>
            )
    }
}

export default TableContainer