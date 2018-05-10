import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Food from '../about/foods';
import Form from '../form';
import MacroForm from '../macroForm';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  exercise,
  submit,
  submitMacro
} from '../../modules/counter';

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
    <Food brand="Mcdonalds" foods={props.foods} />
    <Form onSubmit={props.submit} />
    <MacroForm onSubmit={props.submitMacro} />
  </div>
);

// class Board extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             cards: [{
//                 text: 'Example card 1'
//             }, {
//                 text: 'Example card 2'
//             }, {
//                 text: 'Example card 3'
//             }]
//         }
//     }

//   componentDidMount() {
//     let link = 'https://api.nutritionix.com/v1_1/search';
//       let data =  {
//         "query":"dominos",
//         "appId":"a49ed4c7",
//         "appKey":"393944159c41c173ad29ff4a1d08ad97",
//       };
//       fetch(link, {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: new Headers({
//           'Content-Type': 'application/json',
//         })
//       })
//       .then(function(response) {
//         console.log(response);
//         return response.json();
//       })
//       .then(function(myJson) {
//         console.log(myJson);
//     });
//   }

//   render() {
//     return(
//       <p>CardBoard</p>
//       )
//   }
// }

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing,
  name: state.counter.name,
  strain: state.counter.strain,
  foods: state.counter.foods
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      exercise,
      submit,
      submitMacro,
      changePage: () => push('/about-us')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
