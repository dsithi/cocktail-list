import React from 'react';

const Item = ({ data }) => {
    return (
        <div className="item">
            <div className="info">
                <h2 className="drink-name">Gin</h2>
                <div className="type">
                    <p>Alcoholic</p>
                    <p>Ordinary Drink</p>
                </div>
            </div>
            <div className="thumbnail">
            <img src="https://www.thecocktaildb.com/images/ingredients/gin-Small.png" />
            </div>
            
        </div>
    )
}

export default Item;