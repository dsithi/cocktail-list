import React from 'react';

const ItemPage = () => {
    return (
        <div className="item-page">
            <div className="item-page-info">
                <h2 className="item-page-title">Amaretto And Cream</h2>
                <div className="item-page-desc">
                    <p>Alcoholic</p>
                    <p>Ordinary Drink</p>
                    <p>Cocktail glass</p>
                </div>
                <div className="item-page-text">
                    <h2 className="item-page-subtitle">Ingredients:</h2>
                    <ul> 
                        <li>1 1/2 oz Amaretto</li>
                        <li>1 1/2 oz Light cream</li>
                    </ul>
                    <h2 className="item-page-subtitle">Directions:</h2>
                    <ol>
                        <li>Shake well with cracked ice, strain contents into a cocktail glass, and serve.</li>
                        <li>Shake well with cracked ice, strain contents into a cocktail glass, and serve.</li>
                        <li>Shake well with cracked ice, strain contents into a cocktail glass, and serve.</li>
                    </ol>
                </div>
            </div>
            <div className="item-page-image">
                <img src="https://www.thecocktaildb.com/images/media/drink/dj8n0r1504375018.jpg" />
            </div>
        </div>
    )
}

export default ItemPage;