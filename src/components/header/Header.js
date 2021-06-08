import React from 'react';
import '../Css/Header.css';
const Header = (props) => {
  return (
    <header className="main-heading">

      <h1>{props.text}</h1>
    </header>
  );
};

export default Header;
