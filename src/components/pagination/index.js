import React from 'react';
// import MenuItems from '../../components/menuItems';
import '../../styles/pagination.css';

class Pagination extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this); //old way of binding
  }

  // next = () => { //new way of binding
  //   console.log(this.state.currentPage);
  //   this.setState({
  //     currentPage: this.state.currentPage + 1
  //   });
  // }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    console.log(this);
    const foodItems = this.props.foodItems;
    console.log(this.props.foodItems);
    const currentPage = this.props.pagination.fields.currentPage;
    const itemsPerPage = this.props.pagination.fields.itemsPerPage;

    console.log(foodItems, currentPage, itemsPerPage);
    // Logic for displaying current foodItems
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = foodItems.slice(indexOfFirstItem, indexOfLastItem);
    console.log(currentItems);

    let renderTodos = currentItems.map((item, i) => {
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
              </tr>
            </tbody>
          </table>
        </li>
      );
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(foodItems.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li key={number} id={number} onClick={this.handleClick}>
          {number}
        </li>
      );
    });

    return (
      <div>
        <ul id="menu-items">{renderTodos}</ul>

        <ul id="page-numbers">
          <button onClick={this.props.prevPage}>&#8592;</button>
          {renderPageNumbers}
          <button onClick={this.props.nextPage}>&#8594;</button>
        </ul>
      </div>
    );
  }
}

export default Pagination;
