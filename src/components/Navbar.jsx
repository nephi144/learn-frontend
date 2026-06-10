import { Link } from "react-router-dom"

function Navbar() {

  function handleLogout() {

    localStorage.removeItem("token")

    window.location.href =
      "/login"
  }

  return (
    <nav className="navbar">

      <div>

        <Link to="/">
          Home
        </Link>

        <Link to="/posts">
          Posts
        </Link>

        <Link to="/assignments">
          Assignments
        </Link>

      </div>

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