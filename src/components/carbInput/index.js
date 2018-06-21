import React from 'react';
import { Field, reduxForm } from 'redux-form';
import '../../styles/step2/macroInputs.css';

const CarbInput = props => {
  return (
    <form id="carb-input">
      <div>
        <label>Carbohydrates</label>
        <div>
          <Field
            name="nf_total_carbohydrate"
            component="input"
            type="text"
            placeholder="40g"
            className="inputbox border box-size"
          />
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'carb'
})(CarbInput);
