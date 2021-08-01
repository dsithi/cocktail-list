import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import ItemList from './Components/ItemList';
import ItemPage from './Components/ItemPage';
import FilterPage from './Components/FilterPage';
import Filter from './Components/Filter';

function App() {
  // re render component
  const handleRefresh = () => {
    setCocktails([]);
    generateItems();
  }

  /* --- keep track of current page ---*/
  // state for active tab to display correct page
  const [activeTab, setTab] = useState(0);

  // state for clicked cocktail
  const [currentCocktail, setCocktail] = useState([]);

  // States for filter
  const [url, setUrl] = useState("");
  const [filterName, setFilterName] = useState("");

  // function to handle tab changes, pass to navbar
  const handleTabChange = (index) => {
    setTab(index);
  }

  // switch statement to determine which page is rendered
  const renderContent = () => {
    switch(activeTab) {
      default:
      case 0: // return to start page with previous random cocktails
          return (
            <>
              <p style={{textAlign: "center"}}>Cocktails</p>
              <ItemList items={cocktails} onTabChange={handleTabChange} setCocktail={setCocktail}/>
            </>
          );
      case 1: // Item page
          return (
            <ItemPage data={currentCocktail}/>
          );
      case 2: // generate new random cocktails
            return (
            <>
              <p className="page-title" style={{textAlign: "center"}}>Random Cocktails</p>
              <ItemList items={cocktails} onTabChange={handleTabChange} setCocktail={setCocktail}/>
            </>
            );
      case 3: // Search results page
              return (
                <>
                  <ItemList items={cocktails} onTabChange={handleTabChange} setCocktail={setCocktail}/>
                </>
              );
      case 4: // Filters Page
                return (
                  <>
                    <Filter onTabChange={handleTabChange} setUrl={setUrl} setFilterName={setFilterName} />
                  </>
                );
      case 5: // Filter Items Page
                return (
                  <>
                    <FilterPage onTabChange={handleTabChange} setCocktail={setCocktail} cocktails={cocktails} setCocktails={setCocktails} cocktails={cocktails} url={url} filterName={filterName} />
                  </>
                );
    }
  }

  /* --- Generate random cocktails --- */
  // states for random cocktails
  const [cocktails, setCocktails] = useState([]);


  // function to generate cocktails
const generateItems = () => {
      // reset state to generate new cocktails
      if (cocktails.length >= 8) {
        setCocktails([]);
      } 

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
  
      // 4 random cocktails
      for (let i = 0; i < 8; i++) {
          randomItems();
      }
  
     
}

  // call function on render with useEffect
  useEffect(() => {
    generateItems();
  }, []);


  return (
    <div className="container">
      <Navbar activeTab={activeTab} onTabChange={handleTabChange} handleRefresh={handleRefresh} setCocktails={setCocktails} />
      { /*
        <p style={{textAlign: "center"}}>Random Cocktails</p>
        <ItemList items={cocktails}/>
      */ }
      {renderContent()}
    </div>
  );
}

export default App;
