import SearchComponent from './searchComponent'
import AddnewpersonWidget from '../../popup/addnewpersonWidget'
import React, { useState  } from "react";








function Actionsheader() {

const [IsActive, setIsActive] = useState(false)

const onclickadd=()=>
{
  setIsActive(!IsActive)
 
}
    return (
             <header class="actions">
        <ul>
         <SearchComponent/>
          {IsActive?<AddnewpersonWidget/>:''}
          <li>
            <button onClick={onclickadd} id="addcontact" class="addcontact">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
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
            <button id="deleteAll">
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
          <li>
            <button id="saveAll">
              <svg
                id="Capa_1"
                enable-background="new 0 0 512.007 512.007"
                height="24"
                viewBox="0 0 512.007 512.007"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="m511.927 126.537c-.279-2.828-1.38-5.666-3.315-8.027-.747-.913 6.893 6.786-114.006-114.113-2.882-2.882-6.794-4.395-10.612-4.394-9.096 0-329.933 0-338.995 0-24.813 0-45 20.187-45 45v422c0 24.813 20.187 45 45 45h422c24.813 0 45-20.187 45-45 .001-364.186.041-339.316-.072-340.466zm-166.927-96.534v98c0 8.271-6.729 15-15 15h-19v-113zm-64 0v113h-139c-8.271 0-15-6.729-15-15v-98zm64 291h-218v-19c0-8.271 6.729-15 15-15h188c8.271 0 15 6.729 15 15zm-218 161v-131h218v131zm355-15c0 8.271-6.729 15-15 15h-92c0-19.555 0-157.708 0-180 0-24.813-20.187-45-45-45h-188c-24.813 0-45 20.187-45 45v180h-52c-8.271 0-15-6.729-15-15v-422c0-8.271 6.729-15 15-15h52v98c0 24.813 20.187 45 45 45h188c24.813 0 45-20.187 45-45v-98h2.787l104.213 104.214z"
                  />
                </g>
              </svg>
            </button>
          </li>
        </ul>
      </header>
    )
}

export default Actionsheader
