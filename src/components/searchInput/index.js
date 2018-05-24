import React from 'react';
import { Field, reduxForm } from 'redux-form';
import '../../styles/inputForm.css';

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  // console.log(pristine, submitting);
  return (
    <form onSubmit={handleSubmit} className="brand-search">
      <div>
        <label>Search Restaurant</label>
        <div>
          <Field
            name="restaurant"
            component="input"
            type="text"
            placeholder="McDonald's"
            className="inputbox"
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className={'submit-btn ' + (pristine ? 'hidden' : 'show')}
          disabled={pristine || submitting}>
          Search Brand
        </button>
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
  form: 'simple' // a unique identifier for this form
})(SimpleForm);
