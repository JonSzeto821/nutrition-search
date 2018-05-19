import React from 'react';
import { Field, reduxForm } from 'redux-form';

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Restaurant</label>
        <div>
          <Field
            name="restaurant"
            component="input"
            type="text"
            placeholder="Restaurant"
          />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Search Brand
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(SimpleForm);
