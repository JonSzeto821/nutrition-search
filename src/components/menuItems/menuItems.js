import React from 'react';
import '../../styles/menuItems.css';

const MenuItems = props => {
  let foodItems = props.foodItems.map((item, i) => {
    return (
      <li key={i} className="border">
        {item.fields.item_name}
        <ul>
          <li>
            <span className="bold">Calories:</span> {item.fields.nf_calories}
          </li>
          <li>
            <span className="bold">Fats:</span> {item.fields.nf_total_fat} g
          </li>
          <li>
            <span className="bold">Carbs:</span>{' '}
            {item.fields.nf_total_carbohydrate} g
          </li>
          <li>
            <span className="bold">Proteins:</span> {item.fields.nf_protein} g
          </li>
        </ul>
      </li>
    );
  });

  return (
    <div>
      <ul className="remove-bullet" id="menu-items">
        {foodItems}
      </ul>
    </div>
  );
};

export default MenuItems;
