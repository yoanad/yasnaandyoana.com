import React from 'react';
import './Values.css';
import hands from '../assets/hands.svg'
import trees from '../assets/trees.svg'
import perfume from '../assets/perfume.svg'

const Values = () => {
  return (
    <section className="values-container section">
      <div className="content-container">
        <h1>WHAT WE STAND FOR</h1>
        <div className="value-columns">
          <div className="value-column">
            <img src={hands} />
            <p className="headline">100% handmade</p>
            <p className="text">
              Each of our soaps is made by hand with care and attention to
              detail, ensuring a high-quality product.
            </p>
          </div>
          <div className="value-column">
            <img src={trees} />
            <p className="headline">Natural ingredients</p>
            <p className="text">
              Our soaps are made with only natural ingredients, carefully
              selected for their nourishing and beneficial properties.
            </p>
          </div>
          <div className="value-column">
            <img src={perfume} />
            <p className="headline">No artifical fragrances</p>
            <p className="text">
              We do not use any synthetic fragrances in our soaps, we rely only
              on natural ingredients for pure, gentle scents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;
