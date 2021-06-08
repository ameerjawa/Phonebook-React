
/*****************************************
 * * IMPORT LIBRARIES
 *****************************************/

 // react libraries
import React from 'react';

// import components
import Header from '../header/Header';
import MainContent from '../main/Main'; // we can rename what was defined with default export
import Footer from '../footer/Footer';


import '../Css/App.css';
/*****************************************
 * * COMPONENT
 *****************************************/

const App = () => {
  const date = new Date();
  return (
    <div className="app">
      <Header text="Phone Book"/>
      <MainContent />
      <Footer year={date.getFullYear()} name="Ameer && Ziki"/>
    </div>
  );
}

export default App;
