import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Brand from '../about/brands';
import Form from '../form';
import MacroForm from '../macroForm';
import { submit, setBrand, setCals } from '../../modules/counter';
import Slider from '../about/slider';

const Home = props => (
  <div>
    {/*<h1>Home</h1>
    <p>Count: {props.count}</p>
    <p>Name: {props.name}</p>
    <p>Strain: {props.strain}</p>
    <p>
      <button onSubmit={props.changeName}>>Change Name</button>
      <button onClick={props.exercise}>Exercise</button>
      <button onClick={props.increment} disabled={props.isIncrementing}>
        penguin
      </button>
      <button onClick={props.incrementAsync} disabled={props.isIncrementing}>
        Increment Async
      </button>
    </p>
    <p>
      <button onClick={props.decrement} disabled={props.isDecrementing}>
        Decrement
      </button>
      <button onClick={props.decrementAsync} disabled={props.isDecrementing}>
        Decrement Async
      </button>
    </p>
    <p>
      <button onClick={() => props.changePage()}>
        Go to about page via redux
      </button>
    </p>
      */}
    <Brand
      setBrand={props.setBrand}
      brand={props.brand}
      brands={props.brands}
    />
    <Form onSubmit={props.submit} />
    <Slider />
  </div>
);

const mapStateToProps = state => ({
  count: state.counter.count,
  name: state.counter.name,
  strain: state.counter.strain,
  brands: state.counter.brands,
  brand: state.counter.brand
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      submit,
      setBrand,
      changePage: () => push('/about-us')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
