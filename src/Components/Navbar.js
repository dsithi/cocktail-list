import React from 'react';
import Searchbar from './Searchbar';

const Navbar = ({ activeTab, onTabChange, handleRefresh }) => {
    return (
        <div className="nav">
            <h2 className="title" onClick={() => onTabChange(0)}>Cocktail List</h2>
            <h2
                className="nav-item"
                onClick={() => {
                    onTabChange(2);
                    handleRefresh();
                    }}>
                Generate Random Cocktails
            </h2>
            <h2 className="nav-item">All Cocktails</h2>
            <h2 className="nav-item">Filter</h2>
            <Searchbar />
        </div>
    )
}

export default Navbar;

