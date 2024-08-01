import { useEffect, useState, useContext } from "react";
import axios from "axios";
import "./main.css";
import Pagination from "./pagination";
import React from "react";

//API : https://dummyjson.com/recipes
const Recipe = ({ search, cuisine }) => {
  const [recipe, setRecipe] = useState([]);
  const [page, setPage] = useState(1);
  const [perpage, setPerPage] = useState(3);


  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const response = await axios.get("https://dummyjson.com/recipes");
    setRecipe(response.data.recipes);
  };

  const lastIndex = page * perpage;
  const firstIndex = lastIndex - perpage;

  const filteredRecipes = recipe
    .filter(
      (recipe) =>
        recipe.name.toLowerCase().includes(search) &&
        (cuisine
          ? recipe.cuisine.toLowerCase() === cuisine.toLowerCase()
          : true)
    )
    .slice(firstIndex, lastIndex);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <>
      <div className="comp-data">
        {filteredRecipes.map((each, index) => (
          <div className="recipe-data" key={each.id}>
            <img src={each.image} alt={each.name} />

            <h1>{each.name}</h1>
            <h2>Ingredients</h2>
            {each.ingredients.map((eaching, index) => (
              <p key={index}>
                {index + 1} : {eaching}
              </p>
            ))}
            <h2>Instructions</h2>
            {each.instructions.map((ins, index) => (
              <p key={index}>
                {index + 1} : {ins}
              </p>
            ))}
          </div>
        ))}
      </div>

      <Pagination
        recipe={recipe.length}
        perpage={perpage}
        pageChange={handlePageChange}
      />
    </>
  );
};

export default React.memo(Recipe);
