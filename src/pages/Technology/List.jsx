import { useState } from 'react';
import PropTypes from 'prop-types';
import { technology } from '../../data/data.json'

const List = ({ filterItems }) => {
    const navList = [...new Set(technology.map((technologies) => technologies.name))];
    const [ active, setActive ] = useState(0);

    return (
        <nav className="technology__nav row">
        <ul className="technology__list row">
            {navList.map((name, index) => {
            return (
                <button 
                className={active === index ? "active__work--technology" : "technology__item"} 
                key={index} 
                onClick={() => {
                    setActive(index);
                    filterItems(name);
                }}
                >
                {index + 1}
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

export { List };