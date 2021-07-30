import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import ItemList from './Components/ItemList';
import ItemPage from './Components/ItemPage';

function App() {
  /* --- keep track of current page ---*/
  // state for active tab to display correct page
  const [activeTab, setTab] = useState(0);

  // state for clicked cocktail
  const [currentCocktail, setCocktail] = useState([]);

  // function to handle tab changes, pass to navbar
  const handleTabChange = (index) => {
    setTab(index);
  }

  // switch statement to determine which page is rendered
  const renderContent = () => {
    switch(activeTab) {
      default:
      case 0: // Random Cocktails
          return (
            <>
              <p style={{textAlign: "center"}}>Random Cocktails</p>
              <ItemList items={cocktails} onTabChange={handleTabChange} setCocktail={setCocktail}/>
            </>
          );
      case 1: // Item page
          return (
            <ItemPage data={currentCocktail}/>
          );
    }
  }

  /* --- Generate random cocktails --- */
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
    for (let i = 0; i < 8; i++) {
        randomItems();
    }

    console.log(cocktails);
  }, []);

  return (
    <div className="container">
      <Navbar activeTab={activeTab} onTabChange={handleTabChange} />
      { /*
        <p style={{textAlign: "center"}}>Random Cocktails</p>
        <ItemList items={cocktails}/>
      */ }
      {renderContent()}
    </div>
  );
}

export default App;
