import React from 'react';
import '../../styles/menuItems.css';

const MenuItems = props => {
  let foodItems = props.foodItems.map((item, i) => {
    return (
      <li key={i} id="list-item">
        <table>
          <thead>
            <tr>
              <th colSpan="2">
                {item.fields.item_name} ({item.fields.nf_calories} cals)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span className="bold">Fats:</span>
                <div>{item.fields.nf_total_fat} g</div>
              </td>
              <td>
                <span className="bold">Carbs:</span>
                <div>{item.fields.nf_total_carbohydrate} g</div>
              </td>
            </tr>
            <tr>
              <td>
                <span className="bold">Proteins:</span>
                <div>{item.fields.nf_protein} g</div>
              </td>
              <td>
                <button onClick={() => props.addToTotal(item)}>
                  Add to Total
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </li>
    );
  });

  return (
    <div>
      <ul id="menu-items">{foodItems}</ul>
    </div>
  );
};

export default MenuItems;
