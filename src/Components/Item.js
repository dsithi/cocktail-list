import React from 'react';

const Item = ({ data, onTabChange, setCocktail }) => {
    return (
        <div className="item" 
             onClick={() => {
                 onTabChange(1);
                 setCocktail(data);
             }}>
            <div className="info">
                <h2 className="drink-name">{data.strDrink}</h2>
                <div className="type">
                    <p>{data.strAlcoholic}</p>
                    <p>{data.strCategory}</p>
                    <p>{data.strGlass}</p>
                </div>
            </div>
            <div >
                <img className="thumbnail" src={data.strDrinkThumb} />
            </div>
            
        </div>
    )
}

export default Item;