import React from 'react';
import Searchbar from './Searchbar';

const Navbar = () => {
    return (
        <div className="nav">
            <h2 className="title">Cocktail List</h2>
            <h2>Filter</h2>
            <h2>Random Cocktail</h2>
            <h2>All Cocktails</h2>
            <Searchbar />
        </div>
    )
}

export default Navbar;

