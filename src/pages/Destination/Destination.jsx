import React from 'react';
import { destinations } from '../../data/data.json';
import { useState } from 'react';

import './destination.css';
import List from './List';

const Destination = () => {
  const [ destinationItem, setDestinationItem] = useState(destinations.filter((item)=> item.name === "Moon"))

  // Filtra os itens em destinations com o atributo name igual ao nome fornecido
  // e atualiza o estado destinationItem com os itens filtrados
  const filterItems = (name) => {
    const newDestinationItem = destinations.filter((item) => item.name === name);
    setDestinationItem(newDestinationItem);
  };


  return (
    <section className="destination column bg">
      <h1 className='destination__title title'><span>01</span>Pick your destination</h1>

      <div className="wrapper">
        <div className="destination__image">
          {destinationItem.map((item, index) => {
            return <img src={item.images.png} alt={item.name} key={index} />
          })}
          
        </div>

        <div className="destination__content column">
          <List filterItems={filterItems} />
          {destinationItem.map((item)=> {
            return (
            <React.Fragment key={item.name}>
              <h1 className='destination__subtitle'>{item.name}</h1>
              <p className="destination__description">
                {item.description}
              </p>
              <div className="destination__box-info">
                <div className="destination__info column">
                  <p className='destination__info--title'>AVG. DISTANCE</p>
                  <h1 className='destination__info--value'>{item.distance}</h1>
                </div>
                <div className="destination__info column">
                  <p className='destination__info--title'>Est. travel time</p>
                  <h1 className='destination__info--value'>{item.travel}</h1>
                </div>
              </div>
            </React.Fragment>
            );
          })}        
        </div>
      </div>
    </section>
  );
};

export default Destination;
