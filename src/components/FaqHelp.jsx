// src/components/FaqAccordion.js
import React, { useState } from 'react';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const FaqAccordion = ({data}) => {
  const {question,answer}=data
  console.log(data)
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b mb-10">
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleAccordion}>
        <h3 className="text-lg font-medium">{question}</h3>
        <FontAwesomeIcon icon={faAngleDown} className={`h-5 w-5 ${isOpen ? 'transform rotate-180' : ''}`} />
      </div>
      {isOpen && <p className="text-gray-600 mt-2">{answer}</p>}
    </div>

    
  );
};

export default FaqAccordion;
