import React from 'react';
import { Field, reduxForm } from 'redux-form';
import '../../styles/step1/inputForm.css';

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <form onSubmit={handleSubmit} id="brand-search">
      <div>
        <label>Search restaurant</label>
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
  form: 'simple'
})(SimpleForm);
