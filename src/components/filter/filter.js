import React from 'react';
import ProteinInput from '../proteinInput';
import CarbInput from '../carbInput';
import FatInput from '../fatInput';

const Filter = props => (
  <div>
    <p>Note: Just input the integer, no need to input 'grams'</p>
    <ProteinInput props={props} />
    <CarbInput props={props} />
    <FatInput props={props} />
  </div>
);

export default Filter;
