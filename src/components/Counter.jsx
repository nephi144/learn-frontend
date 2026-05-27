import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "10px", marginBottom: "20px" }}>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={{ marginRight: "10px" }}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default Counter