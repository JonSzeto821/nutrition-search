import React from 'react';

const Food = props => {
  console.log(props);
  let foods = props.foods.map((food, i) => {
    return (
      <li key={i}>
        ID: {food.fields._id}
        <br /> Restaurant: {food.fields.name}
      </li>
    );
  });

  return (
    <div>
      <h1>Food Page: {props.brand}</h1>
      <ul>{foods}</ul>
    </div>
  );
};

export default Food;

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <li>{number}</li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }
