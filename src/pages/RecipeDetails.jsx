 import "../Style/RecipeDetails.css"
function RecipeDetails({ recipe }) {
  if (!recipe) {
    return (
        <div className="page-wrapper">
        <h2>No recipe selected!</h2>
        </div>
    
    );
  }

  return (

    <div className="content-wrapper">
      <h1>{recipe.name}</h1>
      <img src={recipe.image} width="400" alt={recipe.name} />

      <p><strong>MealType: </strong> {recipe.mealType.join(", ")}</p>
      <p><strong>Cuisine: </strong> {recipe.cuisine}</p>
      <p> <strong>Ingredients: </strong>{recipe.ingredients}</p>
      <p> <strong>Rating: </strong>{" "} <span style={{color: recipe.rating >3?"green":"red"}}>{recipe.rating}</span></p>
      <p> <b>prepTimeMinutes: </b> {recipe.prepTimeMinutes}</p>
      <p> <b>cookTimeMinutes: </b>{recipe.cookTimeMinutes}</p>
    </div>
  );
}

export default RecipeDetails;



