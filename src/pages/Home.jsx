
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Style/Home.css"; 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home({setSelectedRecipe}) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data.recipes.slice(0, 12))) 
}, []);

  return (
    <div className="home-container">

      <h2 className="home-title">🍕 Delicious Recipes</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {recipes.map((recipe) => (
          <Col key={recipe.id}>
            <Card>
              <Card.Img variant="top" src={recipe.image} alt={recipe.name} />
              <Card.Body>
                <Card.Title>{recipe.name}</Card.Title>
                <Card.Text>
                  <strong>Type:</strong> {recipe.mealType.join(", ")}
                </Card.Text>


                 <Button variant="warning" onClick={() => setSelectedRecipe(recipe)}>
                  <Link to="/RecipeDetails" style={{ textDecoration: "none" }}>See More </Link>
                </Button>


              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Home;
