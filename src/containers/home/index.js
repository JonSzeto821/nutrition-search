import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Restaurant from '../../components/restaurants';
import Slider from '../../components/slider';
import Form from '../../components/searchInput';
import Accordion from '../../components/accordion';
import Pagination from '../../components/pagination';
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
import { addToTotal, removeItem } from '../../actions/macroTotalActions';

const Home = props => (
  <div>
    <div id="brand-container">
      <h1>Nutrition Search</h1>
      <Form onSubmit={props.submit} />
      <h3>Select restaurant from list below</h3>
      <Restaurant
        setRestaurant={props.setRestaurant}
        restaurant={props.restaurant}
        brands={props.brands}
        className="center"
      />
      <p>
        Currently viewing:{' '}
        <span className="bold">{props.restaurant.fields.name}</span>
      </p>
      <button>Next &#8594;</button>
    </div>
    <div id="slider-container">
      <h3>Select Calorie Range</h3>
      <Slider setCals={props.setCals} calories={props.calories} />
      <br />
      <br />
      <button onClick={props.getFoodItems} id="menu-btn">
        Get Menu Items
      </button>
    </div>
    {/*<button onClick={() => props.getFoodItems(props.brand)} foods={props.foods}>Get Nutrition</button>*/}
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
    <button className="next-screen">Next &#8594;</button>
    <ReviewTable
      selectedItems={props.selectedItems}
      totals={props.totals}
      removeItem={props.removeItem}
    />
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
      removeItem,
      changePage: () => push('/about-us')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
