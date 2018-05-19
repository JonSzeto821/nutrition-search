import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Brand from '../about/brands';
import Form from '../form';
import MacroForm from '../macroForm';
import {
  submit,
  setBrand,
  setCals,
  getFoodItems,
  setVals
} from '../../modules/counter';
import Slider from '../about/slider';

const Home = props => (
  <div>
    <Brand
      setBrand={props.setBrand}
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
      />
    </div>
    {/*<button onClick={() => props.getFoodItems(props.brand)} foods={props.foods}>Get Nutrition</button>*/}
    <button onClick={props.getFoodItems}>Get Nutrition</button>
    {/*<h2>Macros</h2>
    <h3>Protein</h3>
    <Form />

    <h3>Carbohydrates</h3>
    <Form />

    <h3>Fats</h3>
    <Form />*/}
  </div>
);

const mapStateToProps = state => ({
  count: state.counter.count,
  name: state.counter.name,
  strain: state.counter.strain,
  foods: state.counter.foods,
  brands: state.counter.brands,
  brand: state.counter.brand,
  values: state.counter.values
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      submit,
      setBrand,
      setCals,
      getFoodItems,
      setVals,
      changePage: () => push('/about-us')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
