import React from 'react';
import ProteinInput from '../proteinInput';
import CarbInput from '../carbInput';
import FatInput from '../fatInput';
import '../../styles/step2/macroInputs.css';

const Filter = props => (
  <div id="filter-wrap">
    <p>
      <span className="bold">Note:</span> Unit of measurement ('g', or 'grams')
      not needed
    </p>
    <div>
      <table id="macro-input">
        <tbody>
          <tr>
            <td>
              <FatInput props={props} />
            </td>
            <td>
              <CarbInput props={props} />
            </td>
          </tr>
          <tr>
            <td>
              <ProteinInput props={props} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <button onClick={props.applyFilter} id="filter-btn">
      Apply
    </button>
  </div>
);

export default Filter;
