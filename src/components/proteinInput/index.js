import React from 'react';
import { Field, reduxForm } from 'redux-form';
import '../../styles/step2/macroInputs.css';

const ProteinInput = props => {
  return (
    <form id="protein-input">
      <div>
        <label>Proteins</label>
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
  form: 'protein'
})(ProteinInput);
