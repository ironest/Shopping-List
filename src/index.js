import React from "react";
import { render } from "react-dom";
import Test from "./Test";

const App = () => (
  <div>
    <h1 style={{color:'#abcedf'}}>This is my shopping list</h1>
    <Test title="What to buy"/>
  </div>
);

render(<App />, document.getElementById("root"));
