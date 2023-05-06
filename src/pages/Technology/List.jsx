import PropTypes from 'prop-types';
import { technology } from '../../data/data.json'

const List = ({ filterItems }) => {
    const navList = [...new Set(technology.map((technologies) => technologies.name))];

    return (
        <nav className="technology__nav row">
        <ul className="technology__list row">
            {navList.map((name, index) => {
            return (
                <button 
                className="technology__item" 
                key={index} 
                onClick={() => {
                    filterItems(name)
                }}
                >
                {index}
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

export { List };