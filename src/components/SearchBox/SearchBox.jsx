import React from 'react'
import './SearchBox.css'
const SearchBox=({onInputChange})=>{
    return (
        <div className="search-container">
            {/* curly braces means an expression inside jsx */}
            <input onChange={(event)=>{
                  onInputChange(event.target.value);  
            }} placeholder="Type Keywords" className="search-input"/>
        </div>
    )
};  

export default SearchBox