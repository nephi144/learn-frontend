function App() {
  const name = "Mark"
  const school = "BYU-Hawaii"
  const major = "Computer Science"

  return (
    <div>
      <h1 style={{ color: "blue" }}>
        Hello, my name is {name}
      </h1>

      <p>I study at {school}</p>

      <p>My major is {major}</p>
    </div>
  )
}

export default App