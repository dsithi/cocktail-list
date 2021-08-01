import React from 'react';
import Item from './Item';

const ItemList = ({ items, onTabChange, setCocktail }) => {
    return (
        <div className="item-list">
            {items ? 
                items.map(data => (
                    <Item data={data} key={data.idDrink} alt={data.strDrink} onTabChange={onTabChange} setCocktail={setCocktail}/>
                )) :
                <p>No results found</p>
            }

        </div>
    )
}

export default ItemList;