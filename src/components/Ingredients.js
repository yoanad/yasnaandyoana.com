import React from 'react';
import './Ingredients.css';
import stack from '../assets/soap-stack.jpg'

const Ingredients = () => {
    return (
      <section className="ingredients-container section">
        <div className="content-container">
          <div className="ingredients-columns">
            <div className="ingredients-column">
              <img src={stack} alt="stack of soaps" loading="lazy" />
            </div>
            <div className="ingredients-column">
              <h1>Our ingredients</h1>
              <ul>
                <li>
                  <strong>Olive oil:</strong> Nourishing, moisturizing,
                  anti-inflammatory
                </li>
                <li>
                  <strong>Coconut oil:</strong> Antibacterial, moisturizing,
                  healing
                </li>
                <li>
                  <strong>Shea butter:</strong> Hydrating, anti-inflammatory,
                  collagen-boosting
                </li>
                <li>
                  <strong>Sunflower oil:</strong> Nourishing, protective,
                  anti-inflammatory
                </li>
                <li>
                  <strong>Clay:</strong> Detoxifying, purifying, exfoliating
                </li>
                <li>
                  <strong>Essential oils:</strong> Moisturizing, toning,
                  fragrant
                </li>
                <li>
                  <strong>Poppy seeds:</strong> Exfoliating, brightening,
                  stimulating
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Ingredients;
