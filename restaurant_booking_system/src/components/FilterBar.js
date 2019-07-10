import React from 'react'

const FilterBar = (props) => {

    function handleDateChange(event){
        props.onDateChange(event)
    }

    function handleTimeChange(event){
        props.onTimeChange(event)
    }
    return(
        <div>
            <input
                type="date"
                onChange={handleDateChange}
                />

            <input
                type="time"
                onChange={handleTimeChange}/>
        </div>
    )
}

export default FilterBar