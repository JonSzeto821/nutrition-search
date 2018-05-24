import React from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import '../../styles/slider.css';

const Slider = props => {
  // console.log(this, props);
  let max = props.calories.fields.cal_max;
  let min = props.calories.fields.cal_min;
  // console.log({max, min});
  // console.log(props.values);
  let obj = { max, min };
  // console.log(obj);
  return (
    <InputRange
      id="slider"
      maxValue={1200}
      minValue={0}
      formatLabel={calories => `${calories} cal`}
      value={obj} //try {props.calories.fields} - doesnt work
      // calories={props.calories}
      onChange={calories => props.setCals(calories)} //props.setState breaks functionality
      // onChangeComplete={calories => props.setCals(calories)}
      step={5}
    />
  );
};

export default Slider;
