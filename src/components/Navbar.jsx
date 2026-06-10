import { Link } from "react-router-dom"

function Navbar() {

  function handleLogout() {

    localStorage.removeItem("token")

    alert("Logged Out")

    window.location.href = "/login"
  }

  return (
    <nav className="navbar">

      <Link to="/">Home</Link>

      <Link to="/posts">Posts</Link>

      <Link to="/assignments">Assignments</Link>

      <Link to="/login">Login</Link>

      <button
        className="btn"
        onClick={handleLogout}
      >
        Logout
      </button>

    </nav>
  )
}

export default Navbar