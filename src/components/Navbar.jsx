import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "15px",
        backgroundColor: "#e8f0f9",
        borderRadius: "10px",
        marginBottom: "20px",
      }}
    >
      <Link to="/">Home</Link>

      <Link to="/posts">Posts</Link>

      <Link to="/assignments">Assignments</Link>
    </nav>
  )
}

export default Navbar