import PropTypes from 'prop-types';
import { destinations } from '../../data/data.json';
import { useState } from 'react';

const List = ({ filterItems }) => {
  const navList = [...new Set(destinations.map((destination) => destination.name))];
  const [active, setActive] = useState(0);

  return (
    <nav className="destination__nav row">
      <ul className="destination__list row">
        {navList.map((name, index) => {
          return (
            <button 
              className={active === index ? "active__work--destination" : "destination__item"} 
              key={index} 
              onClick={() => {
                setActive(index);
                filterItems(name);
              }}
            >
              {name}
            </button>
          )}
        )}
      </ul>
    </nav>
  );
};

List.propTypes = {
  filterItems: PropTypes.func.isRequired
};

export default List;