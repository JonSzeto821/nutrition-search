import React from 'react';
import { Field, reduxForm } from 'redux-form';
import '../../styles/step2/macroInputs.css';

const FatInput = props => {
  return (
    <form id="fat-input">
      <div>
        <label>Fats</label>
        <div>
          <Field
            name="nf_total_fat"
            component="input"
            type="text"
            placeholder="10g"
            className="inputbox border box-size"
          />
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'fats'
})(FatInput);
