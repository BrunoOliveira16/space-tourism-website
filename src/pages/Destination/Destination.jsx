import './destination.css';
import Moon from '../../assets/destination/image-moon.png'
import List from './List';

const Destination = () => {
  return (
    <section className="destination column bg">
      <h1 className='destination__title title'><span>01</span>Pick your destination</h1>

      <div className="destination__image">
        <img src={Moon} alt="lua" />
      </div>

      <List />

      <h1 className='destination__subtitle'>Moon</h1>

      <p className="destination__description">
        See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
      </p>

      <div className="destination__info column">
        <p className='destination__info--title'>AVG. DISTANCE</p>
        <h1 className='destination__info--value'>384,400 km</h1>
      </div>

      <div className="destination__info column">
        <p className='destination__info--title'>Est. travel time</p>
        <h1 className='destination__info--value'>3 days</h1>
      </div>
    </section>
  );
};

export default Destination;
