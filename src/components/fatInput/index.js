import React from 'react';
import { Field, reduxForm } from 'redux-form';
// import 'fatsInput.css';

const FatInput = props => {
  const { pristine, reset, submitting } = props;
  // const { input: { value, onChange } } = props;
  console.log(pristine, submitting);

  return (
    <form className="carb-input">
      <div>
        <label>Fats</label>
        <div>
          <Field
            name="fats"
            component="input"
            type="text"
            placeholder="10 grams"
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
  form: 'fats' // a unique identifier for this form
})(FatInput);
