import React from 'react';
import { Field, reduxForm } from 'redux-form';
import '../../styles/macroInputs.css';

const ProteinInput = props => {
  const { pristine, reset, submitting } = props;
  console.log(pristine, submitting);

  return (
    <form id="protein-input">
      <div>
        <label>Protein</label>
        <div>
          <Field
            name="protein"
            component="input"
            type="text"
            placeholder="25 grams"
            className="inputbox border box-size"
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
