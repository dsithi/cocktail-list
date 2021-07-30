import React from 'react';

const ItemPage = ({ data }) => {
    return (
        <div className="item-page">
            <div className="item-page-info">
                <h2 className="item-page-title">{data.strDrink}</h2>
                <div className="item-page-desc">
                    <p>{data.strCategory}</p>
                    <p>{data.strAlcoholic}</p>
                    <p>{data.strGlass}</p>
                </div>
                <div className="item-page-text">
                    <h2 className="item-page-subtitle">Ingredients:</h2>
                    <ul> 
                        <li>{data.strIngredient1}  {data.strMeasure1}</li>
                        <li>{data.strIngredient2} {data.strMeasure2}</li>
                    </ul>
                    <h2 className="item-page-subtitle">Directions:</h2>
                    <ul>
                        <li>{data.strInstructions}</li>
                    </ul>
                </div>
            </div>
            <div className="item-page-image">
                <img src={data.strDrinkThumb} />
            </div>
        </div>
    )
}

export default ItemPage;