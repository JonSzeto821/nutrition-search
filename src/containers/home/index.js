import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Restaurant from '../about/restaurants';
import MenuItems from '../about/menuItems';
import Form from '../form';
// import MacroForm from '../macroForm';
import {
  submit,
  setRestaurant,
  setCals,
  getFoodItems,
  setVals
} from '../../modules/counter';
import Slider from '../about/slider';

const Home = props => (
  <div>
    <Restaurant
      setRestaurant={props.setRestaurant}
      brand={props.brand}
      brands={props.brands}
    />
    <Form onSubmit={props.submit} />
    <h2>Select Calorie Range</h2>
    <div id="slider-wrap">
      <Slider
        setCals={props.setCals}
        setVals={props.setVals}
        values={props.values}
        calories={props.calories}
      />
    </div>
    {/*<button onClick={() => props.getFoodItems(props.brand)} foods={props.foods}>Get Nutrition</button>*/}
    <button onClick={props.getFoodItems}>Get Nutrition</button>
    <MenuItems />
  </div>
);

const mapStateToProps = state => ({
  foods: state.counter.foods,
  brands: state.counter.brands,
  brand: state.counter.brand,
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
