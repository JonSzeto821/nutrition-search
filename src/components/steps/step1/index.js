import React from 'react';
import Form from '../../../components/searchInput';
import Restaurant from '../../../components/restaurants';

const Step1 = props => {
  console.log(props);
  return (
    <div id="step1-container">
      <h1>Nutrition Search</h1>
      <Form onSubmit={props.submit} />
      <h3>Select restaurant from list below</h3>
      {/*				<p>
				Currently viewing:{' '}
				<span className="bold">{props.restaurant.fields.name}</span>
				</p>*/}
      <Restaurant
        setRestaurant={props.setRestaurant}
        restaurant={props.restaurant}
        brands={props.brands}
        jumpToStep={props.jumpToStep}
      />
    </div>
  );
};

export default Step1;
