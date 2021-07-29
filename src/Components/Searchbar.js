import React from 'react';

const Searchbar = () => (
    <form className="form">
        <label className="label" htmlFor="query"> Cocktail</label>
        <input className="input" type="text" name="query" placeholder="Margarita" />
        <button className="button" type="submit">Search</button>
    </form>
)

export default Searchbar;