import React, { useState} from 'react'
import FilterPage from './FilterPage';

const Filter = ({ onTabChange, setUrl, setFilterName }) => {
    // Get Filter data for Alcohol type, Category, Ingredient
    const [alcohol, setAlcohols] = useState([]);
    const [category, setCategories] = useState([]);
    const [ingredient, setIngredients] = useState([]);

    // url data
    const alcoholUrl = "https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list";
    const categoryUrl = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
    const ingredientUrl = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list";

    // fetch data from api
    const fetchData = async (url, set) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            set(data.drinks);
        } catch(err) {
            console.log(err);
        }
    };

    // call function for each filter
    fetchData(alcoholUrl, setAlcohols);
    fetchData(categoryUrl, setCategories);
    fetchData(ingredientUrl, setIngredients);

    return (
        <div className="filters">
            <h3>Alcoholic:</h3>
            <ul className="filter">
                {alcohol.map((item, index) => (
                    <li 
                        key={index}
                        onClick={() => {
                            setFilterName(item.strAlcoholic.replace(/ /g, "_"));
                            setUrl("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=");
                            onTabChange(5);
                        }}
                    >
                        {item.strAlcoholic}
                    </li>
                ))}
            </ul>
            <h3>Category:</h3>
            <ul className="filter">
                {category.map((item, index) => (
                    <li 
                    key={index}
                    onClick={() => {
                        setFilterName(item.strCategory.replace(/ /g, "_"));
                        setUrl("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=");
                        onTabChange(5);
                    }}
                >
                    {item.strCategory}
                </li>
                ))}
            </ul>
            <h3>Ingredient:</h3>
            <ul className="filter">
                {ingredient.map((item, index) => (
                    <li 
                    key={index}
                    onClick={() => {
                        setFilterName(item.strIngredient1.replace(/ /g, "_"));
                        setUrl("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=");
                        onTabChange(5);
                    }}
                >
                    {item.strIngredient1}
                </li>
                ))}
            </ul>
        </div>
    )
}

export default Filter;
