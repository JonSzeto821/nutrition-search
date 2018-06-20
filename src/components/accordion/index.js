import React from 'react';
import AccordSection from '../accordion-section';
import Filter from '../filter';
import '../../styles/step2/accordion.css';

const Accordion = props => {
  return (
    <div className="main">
      <AccordSection title="Filter">
        <Filter applyFilter={props.applyFilter} />
      </AccordSection>
    </div>
  );
};

export default Accordion;
