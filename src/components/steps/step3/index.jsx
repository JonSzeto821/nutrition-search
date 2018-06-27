import React from 'react';
import ReviewTable from '../../../components/reviewTable';

const Step3 = props => {
  return (
    <div id="step3-container">
      <h1>Review Items</h1>
      <ReviewTable
        selectedItems={props.selectedItems}
        totals={props.totals}
        removeItem={props.removeItem}
      />
      <button 
        onClick={() => props.jumpToStep(0)} 
        id="reset-btn">
        Search Again
      </button>
      <br />
    </div>
  );
};

export default Step3;
