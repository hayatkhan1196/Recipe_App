import React from "react";
import style from "./recipe.module.css";
const Recipe = (props) => {
  const { title, calories, image, ingredients, login } = props;
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredients) => (
          <li>{ingredients.text}</li>
        ))}
      </ol>
      <p>{calories}</p>
      <img className={style.image} src={image}></img>
      {/* {login} */}
    </div>
  );
};
export default Recipe;
