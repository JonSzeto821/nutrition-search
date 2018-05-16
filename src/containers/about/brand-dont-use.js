import React from 'react';
{
  /*need to figure out how to get the response data to display in the console to figure out what key value pairs can be used; once figured out, pass into variables used in <li>*/
}
const Brand = props => {
  console.log(props);
  let brand = props.brand.map((frog, i) => {
    return (
      <li key={i}>
        ID: {frog.fields._id} <br />
        Restaurant: {frog.fields.name}
      </li>
    );
  });

  return (
    <div>
      <ul>{brand}</ul>
    </div>
  );
};

export default Brand;
