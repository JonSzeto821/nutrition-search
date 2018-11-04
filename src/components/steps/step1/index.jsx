import React from 'react';
import Form from '../../../components/searchInput';
import Restaurant from '../../../components/restaurants';

const Step1 = props => {
  return (
    <div id="step1-container">
      <div id="step1-head">
        <h1>Nutrition Search</h1>
        <p>Enter restaurant name</p>
        <Form
          onSubmit={props.submit}
         />
      </div>
      <div id="step1-body">
        <Restaurant
          setRestaurant={props.setRestaurant}
          restaurant={props.restaurant}
          brands={props.brands}
          jumpToStep={props.jumpToStep}
        />
      </div>
    </div>
  );
};

export default Step1;
