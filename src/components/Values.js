import React from 'react';
import './Values.css';

const Values = () => {
  return (
    <section className="values-container">
      <h3>WHAT WE STAND FOR</h3>
      <div className="value-columns">
        <div className="value-column">
          {/* Add icon */}
          <p>Text for the first value</p>
        </div>
        <div className="value-column">
          {/* Add icon */}
          <p>Text for the second value</p>
        </div>
        <div className="value-column">
          {/* Add icon */}
          <p>Text for the third value</p>
        </div>
      </div>
    </section>
  );
}

export default Values;
