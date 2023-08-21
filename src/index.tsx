import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaBrandIcons from '@fortawesome/free-brands-svg-icons';
import * as FaSolidIcons from '@fortawesome/free-solid-svg-icons';
import MeImg from './img/me.jpg';
import './scss/main.scss';

const App: React.FC<{}> = () => {
  return (
    <div className="content">
      <div className="intro-container">
        <h1>Hello there!</h1>
        <p>
          Welcome to my landing page. Please follow one of the links below to
          look at one of my creations.
        </p>
      </div>
      <div className="bottom-part">
        <div className="image-wrapper">
          <img src={MeImg} />
        </div>
        <div className="links-container">
          <ul>
            <li>
              <a href="https://dutchblitz.peetjvv.co.za">
                Dutch Blitz Calculator
              </a>
            </li>
            <li>
              <a
                className="disabled"
                href="https://recipes.peetjvv.co.za"
                onClick={e => e.preventDefault()}
              >
                <FontAwesomeIcon icon={FaSolidIcons.faHammer} />
                Open Recipes
              </a>
            </li>
            <li>
              <a
                className="disabled"
                href="https://formula.peetjvv.co.za"
                onClick={e => e.preventDefault()}
              >
                <FontAwesomeIcon icon={FaSolidIcons.faHammer} />
                Formula Racing Map
              </a>
            </li>
          </ul>
          <div className="social-links">
            <a href="https://www.github.com/peetjvv">
              <FontAwesomeIcon icon={FaBrandIcons.faGithub} />
            </a>
            {/* <a href="https://www.npmjs.com/~peetjvv">
              <FontAwesomeIcon icon={FaBrandIcons.faNpm} />
            </a> */}
            <a href="https://www.linkedin.com/in/peetjvv/">
              <FontAwesomeIcon icon={FaBrandIcons.faLinkedin} />
            </a>
            {/* <a href="https://www.twitch.tv/peetjvv">
              <FontAwesomeIcon icon={FaBrandIcons.faTwitch} />
            </a>
            <a href="https://www.instagram.com/peetjvv">
              <FontAwesomeIcon icon={FaBrandIcons.faInstagram} />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const container = document.getElementById('app');
const root = createRoot(container!); // eslint-disable-line @typescript-eslint/no-non-null-assertion
root.render(<App />);
