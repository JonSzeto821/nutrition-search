import React from 'react';

const Brand = props => {
  // console.log(props);
  let brands = props.brands.map((brand, i) => {
    return (
      <li
        onClick={() => {
          props.setBrand(brand);
        }}
        key={i}>
        {/*ID: {brand.fields._id} <br />*/}
        Restaurant: {brand.fields.name}
      </li>
    );
  });

  return (
    <div>
      <h1>Food Page: {props.brand.fields.name}</h1>
      <h3>Select restaurant from list below</h3>
      <ul>{brands}</ul>
    </div>
  );
};

export default Brand;

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <li>{number}</li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }
