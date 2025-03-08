import React, { useState } from 'react'

const FilterBtn = ({ onFilterChange }) => {
    const handleChange = (e) => {
        onFilterChange(e.target.value)
    }
    
    
  return (
    <div className="col-12 col-md-3">
        <select className="form-select form-select-sm filter" onChange={handleChange}>
            <option value="All">Filter by status</option>
            <option value="Pending">Pending</option>
            <option value="Started">Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
        </select>
    </div>
  )
}

export default FilterBtn