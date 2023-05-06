import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
  const navigate = useNavigate();
  const handlenavigate = () => navigate('/destination');

  return (
    <section className='home column bg'>
        <div className="home__content column">
          <h2 className='home__subtitle'>SO, YOU WANT TO TRAVEL TO</h2>
          <h1 className='home__title'>Space</h1>
          <p className="home__text">
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <button className='home__button' type='button' onClick={handlenavigate}>EXPLORE</button>
    </section>
  )
};

export default Home;