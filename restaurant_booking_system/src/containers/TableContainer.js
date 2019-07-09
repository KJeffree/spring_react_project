import React from 'react';
import TableList from '../components/TableList';
import {Link} from 'react-router-dom'

class TableContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tables: []
        }
    }

    componentDidMount() {
        const url = "http://localhost:8080/seatings/all"

        fetch(url)
            .then(res => res.json())
            .then(tables => this.setState({tables: tables}))
            .catch(err => console.error)
    }

    

    render() {
        return (
            <div>
                <ul>
                    <li>
                    <Link to="/new-table">New Table</Link>
                    </li>
                </ul>
                <TableList tables={this.state.tables}/>
            </div>
            )
    }
}

export default TableContainer