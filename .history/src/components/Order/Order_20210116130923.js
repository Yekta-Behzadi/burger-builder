import React from "react";
import classes from "./Order.css";

function Order(props) {
  const ingredients = [];
  for (let ingredientName in ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }
  const ingredientOutPut = ingredients.map((ing) => {
    return 
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px",
        }}
        key={ing.name}
      >
        {ing.name} ({ing.amount})
      </span>
    ;
  });
  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutPut} </p>
      <p>
        Price : <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
}

export default Order;
