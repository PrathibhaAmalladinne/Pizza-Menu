import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  

function App(){
return (
  <div className="container" >
    <Header />
     <Menu />
     <Footer />
  </div>
);
}
function Header(){
  //const styl = {color : "red", fontSize :"60px" , textTransform:"uppercase"};
   const styl = {};
   return (
   <header className = "header">
   <h1 style = {styl} className ="header">React Pizza Co.</h1>
   </header>
   );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className ="menu" >
     <h2>our Menu</h2>

       {numPizzas > 0  ? (
        <>
         <p>
         Authentic Italian cuisine. All baked in our stone oven,all organic,all delishaasss!
       </p>
       <ul className = "pizzas">
       {pizzas.map((pizzaObj)=> (
         <Pizza curr={pizzaObj} key={pizzaObj.name} />
        ))}
     </ul> 
     </> 
     ) : (
      <p>We're still working on our menu.Please come back later</p>)
     }
    </main>
  );
}

function Pizza({curr}){

  //if(curr.soldOut) return null;
  
  return(
    <li className = {`pizza ${curr.soldOut ? "sold-out" : ""}`}>
        <img src={curr.photoName} alt = {curr.name} />
       <div>
       <h3>{curr.name}</h3>
       <p>{curr.ingredients}</p>
       <span>{curr.soldOut ? "Sold Out" : curr.price}</span>
    </div> 
    </li>
  );
}

function Footer() {
  const hour =  new Date().getHours();
  const openHour = 11;
  const closeHour = 22;
  const ps = pizzaData;
 const nums = ps.length;
 console.log(nums);
  const isOpen = hour >= openHour && hour <= closeHour;

  return( 
     <footer className = "footer">
     {isOpen && nums>0 ? 
      <Order closeHour={closeHour} nums={nums} />
      : 
      <Bw closeHour={closeHour} openHour={openHour} />
     }
     </footer> 
  );
}

function Bw({openHour , closeHour}){
  return(
    <div className="bwOrder">
        We're closed!! You can visit us between {openHour}:00 and {closeHour}:00.
        <p><button className="bwOrderBtn">Order</button></p>
      </div>
  )
}

function Order({closeHour , nums}){
  return(
<div className="order">
        We're open until {closeHour}:00 !! Come visit us or order online.
        { nums>0 && <button className="orderButton"> Order</button>}
      </div>
  );
}

//react v18
const root = ReactDOM.createRoot(document
    .getElementById("root"));
root.render(
<React.StrictMode>
   <App/>
</React.StrictMode>
);