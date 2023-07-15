import React,{useState} from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";


function App() {

  const [CartState,setCartState]=useState(false)

    const CartHandler=()=>{
        setCartState(true)
    }
   
  const CancelHandler=()=>{
    setCartState(false)
  }  

  return (
    <React.Fragment>
      {CartState && <Cart onCancel={CancelHandler} />}
      <Header onShow={CartHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
