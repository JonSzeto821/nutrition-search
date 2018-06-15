import React from 'react';
import '../../styles/step3/reviewTable.css';

const ReviewTable = props => {
  console.log(props);
  let total = {
    nf_calories: 0,
    nf_total_fat: 0,
    nf_total_carbohydrate: 0,
    nf_protein: 0
  };
  let selectItems = props.selectedItems.map((item, i) => {
    total.nf_calories += item.fields.nf_calories;
    total.nf_total_fat += item.fields.nf_total_fat;
    total.nf_total_carbohydrate += item.fields.nf_total_carbohydrate;
    total.nf_protein += item.fields.nf_protein;

    return (
      <tr key={i} id="list-item">
        <td>{item.fields.item_name}</td>
        <td>{item.fields.nf_calories}</td>
        <td>{item.fields.nf_total_fat}</td>
        <td>{item.fields.nf_total_carbohydrate}</td>
        <td>{item.fields.nf_protein}</td>
        <td>
          <button onClick={() => props.removeItem(i)}>Remove</button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <table id="review-items">
        <thead>
          <tr>
            <td>Item</td>
            <td>Calories</td>
            <td>Fats</td>
            <td>Carbs</td>
            <td>Protein</td>
            <td />
          </tr>
        </thead>
        <tbody>
          {selectItems}
          <tr>
            <td>TOTAL: </td>
            <td>{total.nf_calories}</td>
            <td>{total.nf_total_fat}</td>
            <td>{total.nf_total_carbohydrate}</td>
            <td>{total.nf_protein}</td>
            <td />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ReviewTable;
