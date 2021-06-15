import SearchComponent from './searchComponent'
import AddnewpersonWidget from '../../popup/addnewpersonWidget'
import React, { useState  } from "react";








function Actionsheader(props) {












    return (
             <header className="actions">
        <ul>
         <SearchComponent/>
          
          <li>
            <button onClick={props.onclickadd} id="addcontact" className="addcontact">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <g>
                  <rect fill="none" height="24" width="24" />
                </g>
                <g>
                  <path
                    d="M13,8c0-2.21-1.79-4-4-4S5,5.79,5,8s1.79,4,4,4S13,10.21,13,8z M15,10v2h3v3h2v-3h3v-2h-3V7h-2v3H15z M1,18v2h16v-2 c0-2.66-5.33-4-8-4S1,15.34,1,18z"
                  />
                </g>
              </svg>
            </button>
          </li>
          <li>
            <button id="deleteAll" onClick={()=>props.ondeleteall()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"
                />
              </svg>
            </button>
          </li>
         
        </ul>
      </header>
    )
}

export default Actionsheader
