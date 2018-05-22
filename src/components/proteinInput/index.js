import React from 'react';
import { Field, reduxForm } from 'redux-form';
// import 'proteinInput.css';

const ProteinInput = props => {
  const { handleSubmit, pristine, reset, submitting, value, onChange } = props;
  // const { input: { value, onChange } } = props;
  console.log(pristine, submitting);
  const setMacro = value => {
    console.log('onKeyPress', value);
  };
  return (
    <form className="protein-input">
      <div>
        <label>Protein</label>
        <div>
          <Field
            name="protein"
            component="input"
            type="text"
            placeholder="25 grams"
            className="inputbox"
            // onChange={ ()=> setMacro(this.value) }
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
  form: 'protein' // a unique identifier for this form
})(ProteinInput);
