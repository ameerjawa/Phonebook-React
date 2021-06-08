import React from 'react';

import Card from '../card/Card';
import cardsInfo from './cardsInfo';
import Actionsheader from './actions-Header/actions-header';
import '../Css/Main.css'

const Main = () => {
  const cards = cardsInfo.map(card => (
    // unique key is required for array
    <Card details={card} key={card.id}/>
  ));

  return (
    <article className='main'>
    <Actionsheader/>
      <div className='contacts'>
        {cards}
        {/* {cards}  array - each element with unique key */}
      </div>
      
    </article>
  );
};

export default Main;
