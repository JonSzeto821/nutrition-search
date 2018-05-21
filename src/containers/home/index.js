import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Restaurant from '../about/restaurants';
import Slider from '../about/slider';
import Form from '../form';
import MenuItems from '../about/menuItems';
import {
  submit,
  setRestaurant,
  setCals,
  setVals,
  getFoodItems
} from '../../modules/counter';

const Home = props => (
  <div>
    <Form onSubmit={props.submit} />
    <Restaurant
      setRestaurant={props.setRestaurant}
      restaurant={props.restaurant}
      brands={props.brands}
    />
    <div id="slider-wrap">
      <h2>Select Calorie Range</h2>
      <Slider
        setCals={props.setCals}
        calories={props.calories}
        setVals={props.setVals}
        values={props.values}
      />
      <br />
      <br />
      <button onClick={props.getFoodItems}>Get Menu Items</button>
    </div>
    {/*<button onClick={() => props.getFoodItems(props.brand)} foods={props.foods}>Get Nutrition</button>*/}
    <MenuItems />
  </div>
);

const mapStateToProps = state => ({
  foods: state.counter.foods,
  brands: state.counter.brands,
  restaurant: state.counter.restaurant,
  values: state.counter.values,
  calories: state.counter.calories
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      submit,
      setRestaurant,
      setCals,
      getFoodItems,
      setVals,
      changePage: () => push('/about-us')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
