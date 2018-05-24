import React from 'react';
import ProteinInput from '../proteinInput';
import CarbInput from '../carbInput';
import FatInput from '../fatInput';
import '../../styles/macroInputs.css';

const Filter = props => (
  <div id="filter-wrap">
    <h3>Macro Filters</h3>
    <p>
      <span className="bold">Note:</span> Input the amount in grams, unit of
      measurement ('g', or 'grams') not needed
    </p>
    <div>
      <FatInput props={props} />
      <CarbInput props={props} />
      <ProteinInput props={props} />
    </div>
  </div>
);

export default Filter;
