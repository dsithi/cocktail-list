import React from 'react';

const Item = ({ data }) => {
    return (
        <div className="item">
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