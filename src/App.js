import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import ItemList from './Components/ItemList';
import ItemPage from './Components/ItemPage';

function App() {
  // states for random cocktails
  const [cocktails, setCocktails] = useState([]);

  // call function on render with useEffect
  useEffect(() => {
    // random cocktail from api
    const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    
    // function to call random items from api
    const randomItems = async () => {
    try {
      const res = await fetch(url);
       const data = await res.json();

      // push new items to array
      setCocktails(prevData => [...prevData, ...data.drinks]);  
     } catch(err) {
        console.log(err);
      } 
    }

    // reset state to generate new cocktails
    if (cocktails.length >= 4) {
      setCocktails([]);
    } 

    // 4 random cocktails
    for (let i = 0; i < 4; i++) {
        randomItems();
    }

    console.log(cocktails);
  }, []);

  return (
    <div className="container">
      <Navbar />
      { /*
        <p style={{textAlign: "center"}}>Random Cocktails</p>
        <ItemList items={cocktails}/>
      */ }
      <ItemPage />
    </div>
  );
}

export default App;
