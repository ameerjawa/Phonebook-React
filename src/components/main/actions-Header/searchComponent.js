import React from 'react'

function SearchComponent() {
    return (
             <li>
            <input
           
              id="searchbar"
              onkeyup="searchfunction()"
              class="searchbar"
              placeholder="search"
            />
          </li>
    )
}

export default SearchComponent
