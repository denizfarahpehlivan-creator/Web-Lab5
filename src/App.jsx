
import { useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [showProducts, setShowProducts] = useState(true);
  const [name, setName] = useState("");/*name is for keeping the name that the user enter */

  /*setshowproduct and setname used for update the values */

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>React Product Dashboard</h1>

      <div>
        <label htmlFor="name">Your name: </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}/*update*/
          placeholder="Enter your name"
        />
      </div>

      <p>Hello, {name}</p>

      <button onClick={() => setShowProducts(!showProducts)}> 
        {/*when we click showProducts it reverse the value*/}
        {showProducts ? "Hide Products" : "Show Products"}
      </button>

      {showProducts && <ProductList />}
    </div>
  );
}

export default App;

