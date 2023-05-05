import './technology.css';
import ImagemLandscape from '/public/assets/technology/image-launch-vehicle-landscape.jpg'
import ImagemPortrait from '/public/assets/technology/image-launch-vehicle-portrait.jpg'

const Technology = () => {
  return (
    <section className="technology column bg">
      <h1 className="destination__title title"><span>03</span>SPACE LAUNCH 101</h1>
      <div className="technology__conteiner column">
        <picture className="technology__image">
          <source media="(min-width: 768px)" srcSet={ImagemPortrait} />
          <img src={ImagemLandscape} alt="imagem" />
        </picture>

        <div className="technology__information">
          <p className="technology__information--subtitle">THE TERMINOLOGY…</p>
          <h1 className="technology__information--title">LAUNCH VEHICLE</h1>
          <p className="technology__information--text">
            A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earths surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it quite an awe-inspiring sight on the launch pad!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Technology;