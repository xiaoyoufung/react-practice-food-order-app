import React, {useState} from "react";
import Header from "./components/Layout/Header";
import MealsSummary from './components/Meals/MealsSummary/MealsSummary';
import AvailbleMeals from "./components/Meals/AvailableMeals";
import Cart from './components/Cart/Cart';
import CartProvider from "./store/CartProvider";

function App() {
  
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = (event) => {
      setCartIsShown(true)
  }

  const hideCartHandler = (event) => {
    setCartIsShown(false)
}

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <MealsSummary ></MealsSummary>
      <AvailbleMeals />
      {/* <MealItem items={DUMMY_MEALS}/> */}
      
    </CartProvider>
  );
}

export default App;
