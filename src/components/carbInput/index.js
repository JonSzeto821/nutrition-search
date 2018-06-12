import React from 'react';
import { Field, reduxForm } from 'redux-form';
import '../../styles/macroInputs.css';

const CarbInput = props => {
  // const { pristine, submitting } = props;
  // console.log(pristine, submitting);

  return (
    <form id="carb-input">
      <div>
        <label>Carbohydrate</label>
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
      <div>
        {/*        <button
          type="button"
          className="clear-btn show"
          // disabled={pristine || submitting}
          onClick={reset}>
          Clear
        </button>*/}
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'carb' // a unique identifier for this form
})(CarbInput);
