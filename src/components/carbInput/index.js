import React from 'react';
import { Field, reduxForm } from 'redux-form';
// import 'carbInput.css';

const CarbInput = props => {
  const { handleSubmit, pristine, reset, submitting, value, onChange } = props;
  // const { input: { value, onChange } } = props;
  console.log(pristine, submitting);
  const setMacro = value => {
    console.log('onKeyPress', value);
  };
  return (
    <form className="carb-input">
      <div>
        <label>Carbohydrate</label>
        <div>
          <Field
            name="carb"
            component="input"
            type="text"
            placeholder="40 grams"
            className="inputbox"
          />
        </div>
      </div>
      <div>
        <button
          type="button"
          className={'clear-btn ' + (pristine ? 'hidden' : 'show')}
          disabled={pristine || submitting}
          onClick={reset}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'carb' // a unique identifier for this form
})(CarbInput);
