import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReviewTable from '../../components/reviewTable';
import {
  submit,
  setRestaurant,
  setCals,
  getFoodItems,
  applyFilter
} from '../../actions/formActions';
import {
  prevPage,
  nextPage,
  handleClick
} from '../../actions/paginationActions';
import { addToTotal } from '../../actions/macroTotalActions';

const ReviewCals = props => (
  <div>
    <h1>Review Calorie Total</h1>
    <p>Table below totals calories and macros for all food items selected</p>

    <ReviewTable selectedItems={props.selectedItems} totals={props.totals} />
  </div>
);

const mapStateToProps = state => ({
  foods: state.reducer.foods,
  brands: state.reducer.brands,
  restaurant: state.reducer.restaurant,
  calories: state.reducer.calories,
  foodItems: state.reducer.foodItems,
  value: state.reducer.value,
  pagination: state.reducer.pagination,
  selectedItems: state.reducer.selectedItems,
  totals: state.reducer.totals
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      submit,
      setRestaurant,
      setCals,
      getFoodItems,
      applyFilter,
      prevPage,
      nextPage,
      handleClick,
      addToTotal,
      changePage: () => push('/about-us')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ReviewCals);
