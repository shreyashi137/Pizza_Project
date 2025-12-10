import { useState } from "react";

import "../Style/Menu.css";


function Menu() {
  const [Pizzas] = useState([
    { name: "Margherita Pizza", image: "/src/assets/Pizza1.jpg", Price: 400 },
    { name: "Farmhouse Pizza", image: "/src/assets/Pizza2.jpg", Price: 299 },
    { name: "Veggie Pizza", image: "/src/assets/Pizza3.jpg", Price: 99 },
    { name: "Peppy Paneer", image: "/src/assets/Pizza4.jpg", Price: 199 },
    { name: "Cheese Burst", image: "/src/assets/Pizza5.jpg", Price: 599 },
    { name: "Mexican Green Wave", image: "/src/assets/Pizza6.jpg", Price: 399 },
    { name: "Deluxe Veggie", image: "/src/assets/Pizza7.jpg", Price: 1000 },
    { name: "Tandoori Paneer", image: "/src/assets/Pizza8.jpg", Price: 199 },
    { name: "Corn & Cheese", image: "/src/assets/Pizza9.jpg", Price: 299 },
    { name: "Mushroom Feast", image: "/src/assets/Pizza10.jpg", Price: 499 },
    { name: "Double Cheese", image: "/src/assets/Pizza11.jpg", Price: 500 },
    { name: "BBQ Chicken Pizza", image: "/src/assets/Pizza12.jpg", Price: 700 },
  ]);

  const [SelectedPizzas, SetSelectedPizzas] = useState([]);

  const HandleSelect = (pizza) => {
    if (SelectedPizzas.includes(pizza)) {
      SetSelectedPizzas(SelectedPizzas.filter((p) => p !== pizza));
    } else {
      SetSelectedPizzas([...SelectedPizzas, pizza]);
    }   
  };


 
 
const TotalPrice = SelectedPizzas.reduce(
    (total, pizza) => total + pizza.Price,0);



  return (
    
    <div className="menu-container">
      
      {/* Left Side – Pizza Menu */}

      <div className="menu-left">
        <h1> Our Pizza Menu 🍕</h1>

        <div className="pizza-grid">


          {Pizzas.map((pizza, index) => (

            <div key={index} onClick={() => HandleSelect(pizza)}
              className={`pizza-card ${SelectedPizzas.includes(pizza) ? "selected" : ""}`}>

              <img src={pizza.image}/>

              {SelectedPizzas.includes(pizza) && (<span className="tick">✅</span>)}
              
              <h3>{pizza.name}</h3>
              <p>₹{pizza.Price}</p>

            </div>
          ))}
        </div>
      </div>



      {/* Right Side – Selected Pizzas */}
      <div className="menu-right">

        <h2>🛒 Selected Pizzas</h2>

        {SelectedPizzas.length === 0 ? 
        (<p>No pizza selected yet!</p>) : 
        
       (<ul>
            {SelectedPizzas.map((pizza, i) => (
              <li key={i}>
                <span>{pizza.name}</span>
                <span>₹{pizza.Price}</span>
              </li>
            ))}
          </ul>
        )}

        


        <h3 className="total">Total: ₹{TotalPrice} 
          ({SelectedPizzas.length} items)</h3>
      </div>
    </div>
  );
}

 
export default Menu;
