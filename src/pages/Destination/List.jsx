import PropTypes from 'prop-types';
import { destinations } from '../../data/data.json';

const List = ({ filterItems }) => {
  const navList = [...new Set(destinations.map((destination) => destination.name))];

  return (
    <nav className="destination__nav row">
      <ul className="destination__list row">
        {navList.map((name, index) => {
          return (
            <button 
              className="destination__item" 
              key={index} 
              onClick={() => {
                filterItems(name)
              }}
            >
              {name}
            </button>
          )}
        )}
      </ul>
    </nav>
  )
}

List.propTypes = {
  filterItems: PropTypes.func.isRequired
};

export default List;