import React from 'react';
import Searchbar from './Searchbar';

const Navbar = ({ activeTab, onTabChange }) => {
    return (
        <div className="nav">
            <h2 className="title">Cocktail List</h2>
            <h2
                className="nav-item"
                onClick={() => onTabChange(0)}>
                Random Cocktails
            </h2>
            <h2 className="nav-item">Filter</h2>
            <h2 className="nav-item">All Cocktails</h2>
            <h2 
                className="nav-item"
                onClick={() => onTabChange(1)}>
                TEST PAGE
            </h2>
            <Searchbar />
        </div>
    )
}

export default Navbar;

