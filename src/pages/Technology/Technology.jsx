import './technology.css';
import React, { useState } from 'react';
import { List } from './List';
import { technology } from '../../data/data.json';

const Technology = () => {
  const [ technologyItem, setTechnologyItem ] = useState(technology.filter((item) => item.name === "Launch vehicle"));

  const filterItems = (name) => {
    const newTechnologyItem = technology.filter((item) => item.name === name);
    setTechnologyItem(newTechnologyItem)
  }

  return (
    <section className="technology column bg">
      <h1 className="technology__title title"><span>03</span>SPACE LAUNCH 101</h1>
      <div className="technology__conteiner column">
        <picture className="technology__image">
          {technologyItem.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <source media="(min-width: 769px)" srcSet={item.images.portrait} />
                <img src={item.images.landscape} alt={item.name} />
              </React.Fragment>
            )
          })}
        </picture>

        <List filterItems={filterItems} />

        <div className="technology__information">
          {technologyItem.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <p className="technology__information--subtitle">THE TERMINOLOGY…</p>
                <h1 className="technology__information--title">{item.name}</h1>
                <p className="technology__information--text">{item.description}</p>
              </React.Fragment>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Technology;