import React from 'react';
import '../../styles/about.css';

const About = () => (
  <div id="about-container">
    <h1>About</h1>
    <div className="content-border">
      <div className="content-block col divider">
        <h3>Purpose</h3>
        <p>
          Provide users to search nutrition information based on restaurant and
          calorie range inputs selected by the user.
        </p>
      </div>

      <div className="col">
        <div className="content-block">
          <h3>Features</h3>
          <ol>
            <li>Search for a restaurant</li>
            <li>Define calorie range</li>
            <li>Filter menu items based on macros</li>
            <li>Add food items to list to review</li>
            <li>Remove food items from review list</li>
          </ol>
        </div>

        <div className="content-block">
          <h3>Technology</h3>
          <ol>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Nutritionix API</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
);

export default About;
