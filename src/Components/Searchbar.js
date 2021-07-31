import React, {useState} from 'react';

const Searchbar = ({ onTabChange, setCocktails }) => {
    // states for input
    const [query, setQuery] = useState('');

    // states for searched cocktails
    //const [cocktails, setCocktails] = useState([]);

    const searchItems = async (e) => {
        e.preventDefault(); // avoid page refresh
        
        // test query
        //const query = "margarita";

        // api url for search by cocktail name
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`;

        try {
            // wait for promise to finish code
            const res = await fetch(url);
            const data = await res.json(); // return promise

            setCocktails(data.drinks);
        } catch(err) {
            console.log(err);
        }

    }

    return (
        <form className="form" onSubmit={searchItems}>
            <input className="input" type="text" name="query" 
                placeholder="i.e. Margarita" autoComplete="off" 
                value={query} onChange={(e) => setQuery(e.target.value)}
                />
            <button className="button" type="submit" onClick={()=> onTabChange(3)}>Search</button>
        </form>
    )
}

export default Searchbar;