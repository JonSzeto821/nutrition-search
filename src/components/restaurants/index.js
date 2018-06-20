import React from 'react';
import '../../styles/step1/restaurants.css';

const Restaurant = props => {
  // console.log(props);
  let restaurants = props.brands.map((restaurant, i) => {
    return (
      <li
        onClick={() => {
          props.setRestaurant(restaurant);
          props.jumpToStep(1);
        }}
        key={i}
        className="bold">
        {restaurant.fields.name}
      </li>
    );
  });

  return (
    <div>
      <ul>{restaurants}</ul>
    </div>
  );
};

export default Restaurant;
