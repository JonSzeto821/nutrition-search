import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import CalorieInput from '../calories';
import ReviewCals from '../review';
import '../../styles/navLinks.css';

const App = () => (
  <div>
    <header>
      <table id="nav-links">
        <tbody>
          <tr>
            <td>
              <Link to="/">Home</Link>
            </td>
            <td>
              <Link to="/about-us">About App</Link>
            </td>
            <td>
              <Link to="/calorie-input">Calories</Link>
            </td>
            <td>
              <Link to="/review-total">Food Total</Link>
            </td>
            <td>
              <Link to="/Nutritionix">Nutritionix API</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/calorie-input" component={CalorieInput} />
      <Route exact path="/review-total" component={ReviewCals} />
      <Route
        exact
        path="/Nutritionix"
        component={() =>
          (window.location = 'https://developer.nutritionix.com/docs/v1_1')
        }
      />
    </main>
  </div>
);

export default App;
