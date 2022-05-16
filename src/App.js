import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Welcome to Testing</h1>
      <div role="dialog">...</div>
      <label id="username-label">Username</label>
      <input placeholder="sample-test" aria-labelledby="username-label" id="username-input" />
      <div data-testid="custom-element" >custom test id </div>
      <span title="Delete" id="2">Title</span>
    </div>
  );
}

export default App;
