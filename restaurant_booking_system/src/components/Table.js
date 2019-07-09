import React from 'react'

const Table = ({table}) => {
    return (
        <div>
            <p>Table Number: {table.id}</p>
            <p>Number of Seats: {table.seats}</p>
        </div>
    )
}

export default Table