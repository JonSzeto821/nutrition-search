// import React from 'react';
// import InputRange from 'react-input-range';
// import 'react-input-range/lib/css/index.css';
// import './slider.css'

// class Slider extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       value1: {
//         min: 200,
//         max: 800
//       },
//       // value5: {
//       //   min: 3,
//       //   max: 7
//       // }
//     };
//   }

//   render() {
//     return (
//       <form className="form">
//         <InputRange
//           id='slider'
//           maxValue={1500}
//           minValue={0}
//           formatLabel={value => `${value} cals`}
//           value={this.state.value1}
//           onChange={value => this.setState({ value1: value })}
//           onChangeComplete={value => props.setCals(value)}
//         />
//         {/* import a function through the props (import slider props, then set values as state)*/}
//       </form>
//     );
//   }
// }

// // class Slider extends React.Component {
// //   constructor(props) {
// //     super(props);

// //     this.state = {
// //       value: { min: 2, max: 10 },
// //     };
// //   }

// //   render() {
// //     return (
// //       <InputRange
// //         maxValue={20}
// //         minValue={0}
// //         value={this.state.value}
// //         onChange={value => this.setState({ value })} />
// //     );
// //   }
// // }

// //set slider input to accept the param upper and lower limits

// export default Slider;

import React from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './slider.css';

const Slider = props => {
  // console.log(this, props);
  return (
    <InputRange
      id="slider"
      maxValue={1500}
      minValue={0}
      // formatLabel={value => `${value} cals`}
      value={props.values}
      onChange={value => props.setVals(value)}
      onChangeComplete={value => props.setCals(value)}
    />
  );
};

export default Slider;
