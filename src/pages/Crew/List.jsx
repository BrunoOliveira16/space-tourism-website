import PropTypes from 'prop-types';
import { crew } from '../../data/data.json'
import { useState } from 'react';

const List = ({ filterItems }) => {
    const navList = [...new Set(crew.map((crews) => crews.name))]
    const [ active, setActive ] = useState(0);

    return (
        <nav className="crew__nav row">
        <ul className="crew__list row">
            {navList.map((name, index) => {
            return (
                <button 
                className={active === index ? "active-work" : "button__circle"}
                key={index} 
                onClick={() => {
                    setActive(index);
                    filterItems(name);
                }}
                >
                </button>
            )}
            )}
        </ul>
        </nav>
    );
}

List.propTypes = {
    filterItems: PropTypes.func.isRequired
  };

export { List };