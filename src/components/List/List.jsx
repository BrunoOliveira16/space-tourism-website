import PropTypes from 'prop-types';

const List = ({filterItems, navList}) => {
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
    filterItems: PropTypes.func.isRequired,
    navList: PropTypes.func.isRequired
  };

export { List };