import React, { useState } from 'react'
import { crew } from '../../data/data.json'
import { List } from './List'
import './crew.css'

const Crew = () => {
  const [ crewItem, setCrewItem ] = useState(crew.filter((item) => item.name === "Douglas Hurley"));

  const filterItems = (name) => {
    const newCrewItem = crew.filter((item) => item.name === name);
    setCrewItem(newCrewItem);
  };

  return (
    <section className="crew column bg-before">
      <h1 className="crew__title title"><span>02</span>Meet your crew</h1>

      <article className="crew__container">
        <div className="crew__image">
          {crewItem.map((item)=> {
            return (
              <React.Fragment key={item.name}>
                <img src={item.images.png} alt={item.name}/>
              </React.Fragment>
            )
          })}
        </div>
        <div className="crew__content">
          <List filterItems={filterItems} />
          <div className="crew__information">
            {crewItem.map((item)=> {
              return(
                <React.Fragment key={item.name}>
                  <h1 className="crew__information--role">{item.role}</h1>
                  <h1 className="crew__information--name">{item.name}</h1>
                  <p className="crew__information--bio">{item.bio}</p>
                </React.Fragment>
              )
            })}
          </div>
        </div>
      </article>
    </section>
  )
}

export default Crew