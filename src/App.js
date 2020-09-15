import React, { useEffect, useState } from "react";
import "./App.css";

import Recipe from "./component/Recipe";
import Login from "./component/Login";
import Share from "./component/Share";

const App = () => {
  const APP_ID = "b277aade";
  const APP_KEY = "becfb5bcf7d2060c50810ac6ad7e882c";
  const [recipe, setRecipe] = useState(null);
  const [search, setSearch] = useState("chicken");
  const [data, setData] = useState("");
  useEffect(() => {
    getRecipe();
    // console.log("hello effect====");
  }, [search]);

  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    // console.log("data", data);
    setRecipe(data.hits);
    // console.log(data.hits);
  };
  const setdata = (e) => {
    setData(e.target.value);
  };
  const setsearch = (e) => {
    e.preventDefault();
    setSearch(data);
    // console.log("object");
  };

  return (
    <div className="App">
      {/* <Login />
      <Share /> */}
      <form className="search-form" onSubmit={setsearch}>
        <input
          className="input-search"
          type="text"
          value={data}
          onChange={setdata}
        />
        <button className="search-button" type="submit">
          search
        </button>
      </form>

      <div className="recipe ">
        {/* {console.log(recipe)} */}

        {recipe &&
          recipe.map((recipe) => (
            <Recipe
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              // login={<Login />}
            />
          ))}
      </div>
    </div>
  );
};
export default App;
