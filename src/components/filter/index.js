import React from 'react';
import ProteinInput from '../proteinInput';
import CarbInput from '../carbInput';
import FatInput from '../fatInput';
import '../../styles/macroInputs.css';

const Filter = props => (
  <div id="filter-wrap">
    <h3>Macro Input</h3>
    <p>
      <span className="bold">Note:</span> Input the amount in grams, unit of
      measurement ('g', or 'grams') not needed
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
