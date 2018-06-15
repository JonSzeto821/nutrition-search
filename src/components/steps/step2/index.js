import React from 'react';
import Slider from '../../../components/slider';
import Accordion from '../../../components/accordion';
import Pagination from '../../../components/pagination';

const Step2 = props => {
  return (
    <div id="step2-container">
      <h1>Calorie Input</h1>
      <div id="slider-container">
        <p>
          Restaurant:{' '}
          <span className="bold">{props.restaurant.fields.name}</span>
        </p>
        <h3>Select Calorie Range</h3>
        <Slider setCals={props.setCals} calories={props.calories} />
        <br />
        <br />
        <button onClick={props.getFoodItems} id="menu-btn">
          Get Menu Items
        </button>
      </div>

      <div id="menu-container">
        <Accordion applyFilter={props.applyFilter} className="accordion" />
        <h3>Menu Items</h3>
        <Pagination
          prevPage={props.prevPage}
          nextPage={props.nextPage}
          handleClick={props.handleClick}
          pagination={props.pagination}
          foodItems={props.foodItems}
          addToTotal={props.addToTotal}
        />
      </div>
    </div>
  );
};

export default Step2;
