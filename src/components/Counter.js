import React from 'react'
import ReactDOM from 'react-dom'
export default function Counter() {
  const [count, setCount] = React.useState(0)
  const [tapes, setTapes] = React.useState(0)

  const handleIncrement = () => {
    setTapes(preventTapes => preventTapes + 1)
    setCount(preventCount => preventCount + 1
    )
  }
  const handleDecrement = () => {
    setTapes(preventTapes => preventTapes + 1)
    setCount(preventCount => {
      if (preventCount > 0) {
        return preventCount - 1
      }
      return preventCount
    })

  }
  const resetAll = () => {
    setCount(0)
    setTapes(0)
  }
  const resetCount = () => {
    setCount(0)
  }

  return (
    <div className="d-flex flex-column justify-justify-content-around align-items-center  border border-3 alert alert-danger">
      <h1>Counter</h1>
      <h2 className="mb-3">{count}</h2>
      <h4 className="mb-3">Total taps: {tapes} </h4>
      <div>
        <button className ="btn btn-outline-primary" onClick={handleDecrement} >Decrement -</button>
        <button className="btn btn-outline-secondary"onClick={handleIncrement}>Increment +</button>
      </div>
      <div>
        <button className="btn btn-outline-danger" onClick={resetCount} >Reset Count</button>
        <button className="btn btn-outline-dark" onClick={resetAll} >Reset All</button>
      </div>
    </div>
  )
}
