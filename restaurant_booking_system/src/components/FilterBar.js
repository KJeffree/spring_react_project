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
                value={props.date}
                onChange={handleDateChange}
                />

            <select onChange={handleTimeChange} value={props.time}>
                <option value="9:00">9:00</option>
                <option value="9:30">9:30</option>
                <option value="15:00">15:00</option>
                <option value="15:30">15:30</option>
                <option value="16:00">16:00</option>
                <option value="16:30">16:30</option>
                <option value="17:00">17:00</option>
                <option value="17:30">17:30</option>
                <option value="18:00">18:00</option>
                <option value="18:30">18:30</option>
                <option value="19:00">19:00</option>
                <option value="19:30">19:30</option>
                <option value="20:00">20:00</option>
                <option value="20:30">20:30</option>
                <option value="21:00">21:00</option>

            </select>
        </div>
    )
}

export default FilterBar