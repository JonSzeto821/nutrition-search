import React from 'react';
import '../../styles/restaurants.css';

const Restaurant = props => {
  let restaurants = props.brands.map((restaurant, i) => {
    return (
      <li
        onClick={() => {
          props.setRestaurant(restaurant);
        }}
        key={i}>
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
