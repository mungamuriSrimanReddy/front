import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function Increment() {
    return (
      <form>
        <div>
          <h2>counter</h2>
          <h3>{count}</h3>
          <p>Increment</p>
          <button type="button" onClick={() => setCount(count + 1)}>+</button>
          <p>Decrement</p>
          <button type="button" onClick={() => setCount(count - 1)}>-</button>
        </div>
      </form>
    )
  }

  function Decrement() {
    return (
      <form>
        <h2>counter</h2>
        <h3>{count}</h3>
        <div>
          <p>Increment</p>
          <button type="button" onClick={() => setCount(count + 1)}>+</button>
          <p>Decrement</p>
          <button type="button" onClick={() => setCount(count - 1)}>-</button>
        </div>
      </form>
    )
  }

  return (
    <form>
      <h2>counter</h2>
      <h3>{count}</h3>
      <div>
        <p>Increment +</p>
        <button type="button" onClick={() => setCount(count + 1)}>+</button>
        <p>Decrement -</p>
        <button type="button" onClick={() => setCount(count - 1)}>-</button>
      </div>
    </form>
  )
}

export default App