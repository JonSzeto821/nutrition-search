import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Slider from '../../components/slider';
import Accordion from '../../components/accordion';
import Pagination from '../../components/pagination';
import {
  setCals,
  getFoodItems
  // applyFilter
} from '../../actions/formActions';
import {
  prevPage,
  nextPage,
  handleClick
} from '../../actions/paginationActions';
import '../../styles/calorieContainer.css';

const CalorieInput = props => (
  <div id="calorie-container">
    <h1>Calorie Input</h1>
    <p>Move slider to desired calorie range</p>

    <div id="slider-container">
      <h3>Select Calorie Range</h3>
      <Slider setCals={props.setCals} calories={props.calories} />
      <br />
      <br />
      <button onClick={props.getFoodItems} id="menu-btn">
        Get Menu Items
      </button>
    </div>

    <div id="menu-container">
      <Accordion applyFilter={props.applyFilter} />
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
    <button className="next-screen">Review</button>
  </div>
);

const mapStateToProps = state => ({
  calories: state.reducer.calories,
  foodItems: state.reducer.foodItems,
  value: state.reducer.value,
  pagination: state.reducer.pagination
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setCals,
      getFoodItems,
      prevPage,
      nextPage,
      handleClick,
      changePage: () => push('/about-us')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CalorieInput);
