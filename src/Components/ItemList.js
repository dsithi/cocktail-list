import React from 'react';
import Item from './Item';

const ItemList = ({ items, onTabChange, setCocktail }) => {
    return (
        <div className="item-list">
            {items.map(data => (
                <Item data={data} key={data.idDrink} onTabChange={onTabChange} setCocktail={setCocktail}/>
            ))}
        </div>
    )
}

export default ItemList;