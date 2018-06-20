import React from 'react';
import { Field, reduxForm } from 'redux-form';
import '../../styles/step1/inputForm.css';

const SimpleForm = props => {
  // console.log(props, props.onSubmit, props.handleSubmit, props.submit);
  // console.log(props.onSubmit);
  // console.log(props.handleSubmit);
  // console.log(props.submit);
  const { handleSubmit, pristine, reset, submitting } = props;
  // console.log(handleSubmit);
  return (
    <form onSubmit={handleSubmit} id="brand-search">
      <div>
        <label>Search Restaurant</label>
        <div>
          <Field
            name="restaurant"
            component="input"
            type="text"
            placeholder="McDonald's"
            id="searchbox"
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className={'submit-btn ' + (pristine ? 'hidden' : 'show')}
          disabled={pristine || submitting}>
          Search
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
