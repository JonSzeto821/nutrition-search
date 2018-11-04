import React from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import '../../styles/step2/slider.css';

const Slider = props => {
  let max = props.calories.fields.cal_max;
  let min = props.calories.fields.cal_min;
  let obj = { max, min };

  return (
    <div id="slider-wrap">
      <InputRange
        id="slider"
        maxValue={1200}
        minValue={0}
        formatLabel={calories => `${calories} cal`}
        value={obj}
        onChange={calories => props.setCals(calories)}
        step={10}
      />
    </div>
  );
};

export default Slider;
