import { useState } from "react";
import "./App.css";

function App() {
  const [toggle, setToggle] = useState("Marco");
  const [toggle2, setToggle2] = useState("Polo");
  const button_click = () => {
    setToggle("Polo");
    let res = toggle;
    let res2 = toggle2;
    res === "Marco" ? setToggle("Polo") : setToggle("Marco");
    res2 === "Polo" ? setToggle2("Marco") : setToggle2("Polo");
  };
  return (
    <div className="App">
      <h1 id="marco-polo">{toggle}</h1>
      <button id="marco-polo-toggler" onClick={button_click}>
        {toggle2}
      </button>
    </div>
  );
}

export default App;
