import React from 'react';

const Restaurant = props => {
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
      {props.brands.length > 0 ? <h3>Select restaurant from list</h3> : null }
      <ul>{restaurants}</ul>
    </div>
  );
};

export default Restaurant;
