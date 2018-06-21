import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import '../../styles/navLinks.css';
import homeIcon from '../../styles/home_icon.svg';
import aboutIcon from '../../styles/about_icon.svg';

const App = () => (
  <div>
    <div id="header">
      <header>
        <table id="nav-links">
          <tbody>
            <tr>
              <td>
                <Link className="link" to="/">
                  <img id="homeIcon" src={homeIcon} alt="Home Icon" />Home
                </Link>
              </td>
              <td>
                <Link className="link" to="/about">
                  <img id="aboutIcon" src={aboutIcon} alt="About Icon" />About
                  App
                </Link>
              </td>
              <td>
                <Link className="link" to="/Nutritionix">
                  Nutritionix
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>

    <div id="content">
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route
          exact
          path="/Nutritionix"
          component={() =>
            (window.location = 'https://developer.nutritionix.com/docs/v1_1')
          }
        />
      </main>
    </div>
  </div>
);

export default App;
