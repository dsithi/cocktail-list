import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => {
    return (
        <div className="item-list">
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    )
}

export default ItemList;