import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => {
    return (
        <div className="item-list">
            {items.map(data => (
                <Item data={data} key={data.idDrink}/>
            ))}
        </div>
    )
}

export default ItemList;