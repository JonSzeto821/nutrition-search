import React from 'react';

const Restaurant = props => {
  // console.log(props);
  let restaurants = props.brands.map((restaurant, i) => {
    return (
      <li
        onClick={() => {
          props.setRestaurant(restaurant);
        }}
        key={i}>
        {/*ID: {brand.fields._id} <br />*/}
        Restaurant: {restaurant.fields.name}
      </li>
    );
  });

  return (
    <div>
      <h1>Food Page</h1>
      <h3>Select restaurant from list below</h3>
      <p>Currently viewing: {props.restaurant.fields.name}</p>
      <ul>{restaurants}</ul>
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
