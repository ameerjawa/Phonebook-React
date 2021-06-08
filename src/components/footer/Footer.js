import React from 'react';
import '../Css/Footer.css'

const Footer = props => {
  return (
    <footer className="Footer">
      {/* inside {} we write JavaScript */}
      &copy; {props.year} {props.name}
    </footer>
  );
};

export default Footer;
