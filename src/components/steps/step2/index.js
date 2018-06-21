import React from 'react';
import Slider from '../../../components/slider';
import Accordion from '../../../components/accordion';
import Pagination from '../../../components/pagination';

const Step2 = props => {
  console.log(props);
  return (
    <div id="step2-container">
      <h1>Macro Input</h1>
      <div id="slider-container">
        <h3 id="calorie-title">Calorie Input</h3>
        <p>
          Restaurant:{' '}
          <span className="bold">{props.restaurant.fields.name}</span>
        </p>
        <p>Adjust slider to desired calorie range.</p>
        <Slider setCals={props.setCals} calories={props.calories} />
        <br />
        <br />
        <button onClick={props.getFoodItems} id="menu-btn">
          Get Menu Items
        </button>
        <Accordion applyFilter={props.applyFilter} />
      </div>
      <div id="menu-container">
        <h3 className="menu-items">Menu Items</h3>
        <p>Add menu items to review list.</p>
        <div className="item-container">
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
    </div>
  );
};

export default Step2;
