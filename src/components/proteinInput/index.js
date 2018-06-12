import React from 'react';
import { Field, reduxForm } from 'redux-form';
import '../../styles/macroInputs.css';

const ProteinInput = props => {
  return (
    <form id="protein-input">
      <div>
        <label>Protein</label>
        <div>
          <Field
            name="nf_protein"
            component="input"
            type="text"
            placeholder="25g"
            className="inputbox border box-size"
          />
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'protein' // a unique identifier for this form
})(ProteinInput);
