import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RecipeDetails from "./pages/RecipeDetails"
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useState } from "react";

function App() {

  const [SelectedRecipe, setSelectedRecipe] = useState(null)
  return (
    <div className="App">
      <Router>
        <Navbar/>


        <Routes>
          <Route path="/" element={<Home setSelectedRecipe={setSelectedRecipe}/>}/>
          <Route path="menu" element={<Menu/>}/>
           <Route path="/RecipeDetails/" element={<RecipeDetails recipe={SelectedRecipe}/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
         

        </Routes>

        <Footer/>
      </Router>
      
    
    </div>
  );
}

export default App;
