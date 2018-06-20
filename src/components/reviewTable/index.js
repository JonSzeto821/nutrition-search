import React from 'react';
import RemoveIcon from '../../styles/step3/remove_icon.svg';
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
        <td>
          <div id="item-name">{item.fields.item_name}</div>
        </td>
        <td>{item.fields.nf_calories}</td>
        <td>{item.fields.nf_total_fat}</td>
        <td>{item.fields.nf_total_carbohydrate}</td>
        <td>{item.fields.nf_protein}</td>
        <td>
          <button
            onClick={() => props.removeItem(i)}
            className="hide-btn-outline">
            <img id="removeIcon" src={RemoveIcon} alt="Remove Icon" />
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div id="review-container">
      <table id="review-items">
        <thead>
          <tr>
            <th>Item</th>
            <th>Calories</th>
            <th>Fats</th>
            <th>Carbs</th>
            <th>Protein</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {selectItems}
          <tr id="macro-total">
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
