import React from 'react'
import Counter from "./components/Counter";
const { useState, useEffect } = React
function App() {
  const [showCounter, setToggel] = useState(true)
  const toggelButton = () => {
      setToggel(preventShowCount=>!preventShowCount)
  }
  return (
      <div className="appContainer  d-flex flex-column justify-conten-start align-items-center text-center bg-info bg-opacity-10">
          <button className="btn btn-outline-success" onClick={toggelButton}>{showCounter ? "Hide Counter" : "Show Counter"}</button>
          {showCounter && <Counter />}
      </div>
  );
}

export default App;
