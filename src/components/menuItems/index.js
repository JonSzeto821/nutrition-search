import React from 'react';
import '../../styles/menuItems.css';

const MenuItems = props => {
  let foodItems = props.foodItems.map((item, i) => {
    return (
      <div id="item-container">
        <li key={i}>
          <div className="item-name">{item.fields.item_name}</div>
          <ul>
            <li>
              <span className="bold">Calories:</span> {item.fields.nf_calories}
            </li>
            <li>
              <span className="bold">Fats:</span> {item.fields.nf_total_fat} g
            </li>
          </ul>
          <ul>
            <li>
              <span className="bold">Carbs:</span>{' '}
              {item.fields.nf_total_carbohydrate} g
            </li>
            <li>
              <span className="bold">Proteins:</span> {item.fields.nf_protein} g
            </li>
          </ul>
        </li>
      </div>
    );
  });

  return (
    <div>
      <ul id="menu-items">{foodItems}</ul>
    </div>
  );
};

export default MenuItems;
