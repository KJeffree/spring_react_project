import React from 'react'
import Table from './Table';

const TableList = ({tables}) => {

    const tableComponents = tables.map((table, index) => {
        return <Table 
            table={table}
            key={index}
            />
    })

    return (
        <div>
            <h1>Table List</h1>
            {tableComponents}
        </div>
    )
}

export default TableList
