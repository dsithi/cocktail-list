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
                        {data.strMeasure1 ? <li>{data.strMeasure1} {data.strIngredient1}</li> : null}
                        {data.strMeasure2 ? <li>{data.strMeasure2} {data.strIngredient2}</li> : null}
                        {data.strMeasure3 ? <li>{data.strMeasure3} {data.strIngredient3}</li> : null}
                        {data.strMeasure4 ? <li>{data.strMeasure4} {data.strIngredient4}</li> : null}
                        {data.strMeasure5 ? <li>{data.strMeasure5} {data.strIngredient5}</li> : null}
                        {data.strMeasure6 ? <li>{data.strMeasure6} {data.strIngredient6}</li> : null}
                        {data.strMeasure7 ? <li>{data.strMeasure7} {data.strIngredient7}</li> : null}
                        {data.strMeasure8 ? <li>{data.strMeasure8} {data.strIngredient8}</li> : null}
                        {data.strMeasure9 ? <li>{data.strMeasure9} {data.strIngredient9}</li> : null}
                        {data.strMeasure10 ? <li>{data.strMeasure10} {data.strIngredient10}</li> : null}
                        {data.strMeasure11 ? <li>{data.strMeasure11} {data.strIngredient11}</li> : null}
                        {data.strMeasure12 ? <li>{data.strMeasure12} {data.strIngredient12}</li> : null}
                        {data.strMeasure13 ? <li>{data.strMeasure13} {data.strIngredient13}</li> : null}
                        {data.strMeasure14 ? <li>{data.strMeasure14} {data.strIngredient14}</li> : null}
                        {data.strMeasure15 ? <li>{data.strMeasure15} {data.strIngredient15}</li> : null}
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