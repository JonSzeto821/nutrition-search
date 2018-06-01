import React from 'react';
import AccordSection from '../accordion-section';
import Filter from '../filter';
import '../../styles/accordion.css';

class Accordion extends React.Component {
  render() {
    console.log(this);
    let props = this.props;
    return (
      <div className="main">
        <div className="title" />
        <AccordSection title="Filter">
          <Filter applyFilter={props.applyFilter} />
        </AccordSection>
      </div>
    );
  }
}

export default Accordion;
