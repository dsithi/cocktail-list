import React, { useState, useEffect } from 'react'
import ItemList from './ItemList';
import Pagination from './Pagination';

// Display All, or filtered cocktails (take in prop to determine)
export const FilterPage = ({ filter, onTabChange, setCocktail, setCocktails, cocktails }) => {
    // Create states
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);

    // Call on mount
    useEffect(() => {
        setCocktails([]);
        const fetchItems = async () => {
            try { 
                setLoading(true);
                const res = await fetch();
                const data = await res.json();
               
                // loop through each item in array and search for its data b/c only partial given
                for (let i = 0; i < data.drinks.length; i++) {
                    const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${data.drinks[i].idDrink}`);
                    const itemData = await res.json();

                    // Push data to cocktails array
                    setCocktails(prevData => [...prevData, ...itemData.drinks]);  
                }

                setLoading(false);

               } catch(err) {
                  console.log(err);
                } 
        };

        fetchItems();
    }, []);
    
    // get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = cocktails.slice(indexOfFirstItem, indexOfLastItem);


    // change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div>
            <div className="filters">
                <h3>Alcoholic:</h3>
                <ul className="filter">
                    <li>Alcoholic</li>
                    <li>Non-Alcoholic</li>
                    <li>Optional Alcohol</li>
                </ul>
                <h3>Category:</h3>
                <ul className="filter">
                    <li>Ordinary Drink</li>
                    <li>Cocktail</li>
                    <li>Milk / Float / Shake</li>
                    <li>Other/Unknown</li>
                    <li>Cocoa</li>
                    <li>Shot</li>
                    <li>Coffee / Tea</li>
                    <li>Homemade Liqueur</li>
                    <li>Punch / Party Drink</li>
                    <li>Beer</li>
                    <li>Soft Drink / Soda</li>
                </ul>
                <h3>Ingredient:</h3>
                <ul className="filter">
                    <li>Light rum</li>
                    <li>Cocktail</li>
                    <li>Milk / Float / Shake</li>
                    <li>Other/Unknown</li>
                    <li>Cocoa</li>
                    <li>Shot</li>
                    <li>Coffee / Tea</li>
                    <li>Homemade Liqueur</li>
                    <li>Punch / Party Drink</li>
                    <li>Beer</li>
                    <li>Soft Drink / Soda</li>
                </ul>
                
            </div>
            {currentItems ?  
            <>
                <ItemList items={currentItems} onTabChange={onTabChange} setCocktail={setCocktail} />
                <Pagination itemsPerPage={itemsPerPage} totalItems={cocktails.length} paginate={paginate} />
            </> : null
            }

        </div>
    )
}

export default FilterPage;