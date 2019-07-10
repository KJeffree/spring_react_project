import React from 'react'
import Table from './Table';

const TableList = ({tables, bookings, onBookingSubmit, date, time}) => {

    const tableComponents = tables.map((table, index) => {

        return <Table
            onBookingSubmit={onBookingSubmit}
            date={date}
            time={time}
            bookings={bookings}
            table={table}
            key={index}
            />
        
    })

    return (
        <div>
            <h1>Floor Plan</h1>
            <h2>{date}</h2>
            <h2>{time}</h2>
            <div className="tableList">
                {tableComponents}
            </div>
        </div>
    )
}

export default TableList
