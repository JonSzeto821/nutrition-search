import React from 'react';
import '../../styles/restaurants.css';

const Restaurant = props => {
  // console.log(props);
  let restaurants = props.brands.map((restaurant, i) => {
    return (
      <li
        onClick={() => {
          props.setRestaurant(restaurant);
        }}
        key={i}>
        Restaurant: {restaurant.fields.name}
      </li>
    );
  });

  return (
    <div>
      <ul>{restaurants}</ul>
      <p>
        Currently viewing:{' '}
        <span className="bold">{props.restaurant.fields.name}</span>
      </p>
    </div>
  );
};

export default Restaurant;

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <li>{number}</li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }
