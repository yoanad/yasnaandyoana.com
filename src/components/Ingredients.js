import React from 'react';
import './Ingredients.css';
import stack from '../assets/soap_stack.png'

const Ingredients = () => {
    return (
        <section className="ingredients-container">
            <h3>Our ingredients</h3>
            <div className="ingredients-columns">
                <div className="ingredients-column">
                    <img src={stack} />
                </div>
                <div className="ingredients-column">
                    <p>Text about the ingredients</p>
                </div>
            </div>
        </section>
    );
}

export default Ingredients;
