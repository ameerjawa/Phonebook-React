import React from 'react'

function SearchComponent() {




  const searchfunction=()=>{

  }

    return (
             <li>
            <input
           
              id="searchbar"
              onKeyUp={searchfunction}
              className="searchbar"
              placeholder="search"
            />
          </li>
    )
}

export default SearchComponent
