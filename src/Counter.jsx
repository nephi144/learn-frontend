import ProfileCard from "./ProfileCard"
import Counter from "./Counter"

function App() {
  return (
    <div>
      <h1>Learning React</h1>

      <Counter />

      <ProfileCard
        name="Mark Nephi Simene"
        major="Computer Science"
        school="BYU-Hawaii"
      />
    </div>
  )
}

export default App