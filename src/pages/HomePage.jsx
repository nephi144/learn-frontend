import Navbar from "../components/Navbar"

function HomePage() {
  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <Navbar />

      <h1>Welcome to Amping</h1>

      <p>
        A mental wellness platform that helps
        counselors support students through
        wellness posts and personalized
        assignments.
      </p>

      <h2>Features</h2>

      <ul>
        <li>Create wellness posts</li>
        <li>Assign wellness activities</li>
        <li>Track student engagement</li>
        <li>Promote preventive mental wellness</li>
      </ul>
    </div>
  )
}

export default HomePage