import React from 'react';
import ReviewTable from '../../../components/reviewTable';

const Step3 = props => {
  return (
    <div>
      <h1>Review Items</h1>
      <ReviewTable
        selectedItems={props.selectedItems}
        totals={props.totals}
        removeItem={props.removeItem}
        addToTotal={props.addToTotal}
      />
    </div>
  );
};

export default Step3;
