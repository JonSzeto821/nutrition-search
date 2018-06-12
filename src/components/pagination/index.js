import React from 'react';
import '../../styles/pagination.css';
import '../../styles/menuItems.css';

const Pagination = props => {
  const foodItems = props.foodItems;
  const currentPage = props.pagination.fields.currentPage;
  const itemsPerPage = props.pagination.fields.itemsPerPage;

  // Logic for displaying current foodItems
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = foodItems.slice(indexOfFirstItem, indexOfLastItem);

  let renderItems = currentItems.map((item, i) => {
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

  // Logic for displaying page numbers, determines how many pages are needed to display all content
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(foodItems.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  // console.log(pageNumbers.length === currentPage || 1);

  // if (currentPage == page.Numbers.length){ end = true; }

  //renders out the page numbers, but needs a way to direct user to specific page on click
  const renderPageNumbers = pageNumbers.map(number => {
    return (
      <li key={number} id={number} onClick={() => props.handleClick(number)}>
        {number}
      </li>
    );
  });

  return (
    <div>
      <ul id="menu-items">{renderItems}</ul>
      <ul id="page-numbers">
        <button
          disabled={currentPage === 1 ? true : false}
          onClick={props.prevPage}>
          &#8592;
        </button>
        {renderPageNumbers}
        <button
          disabled={currentPage === pageNumbers.length ? true : false}
          onClick={props.nextPage}>
          &#8594;
        </button>
      </ul>
    </div>
  );
};

export default Pagination;
