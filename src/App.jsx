import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CheckOutStepper from "./components/CheckOutStepper";

function App() {
  const checkoutSteps = [
    {  id:1,
      name: "Customer Info",
      Component: () => <div>Provide your contact details.</div>,
    },
    {  id:2,
      name: "Shipping Information",
      Component: () => <div>Enter Your shipping address.</div>,
    },
    { id:3,
      name: "Payment Information",
      Component: () => <div>Provide your contact details.</div>,
    },
    { id:4,
      name: "Delivered",
      Component: () => <div>Enter Your shipping address.</div>,
    },
  ];
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Checkout</h2>
      <CheckOutStepper configinfo={checkoutSteps}/>
    </div>
  );
}

export default App;
