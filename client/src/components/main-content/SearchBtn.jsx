import React from 'react'

const SearchBtn = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="col-12 col-md-5">
        <div className="input-group input-group-sm search">
            <input 
            type="text" 
            className="form-control" 
            placeholder="Search..."  
            value={searchTerm}
            onChange={onSearchChange}/>
            {/* <button className="btn btn-secondary" type="button">Search</button> */}
        </div>
    </div>
  )
}

export default SearchBtn