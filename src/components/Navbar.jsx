import { Link } from "react-router-dom"

function Navbar() {

  const token = localStorage.getItem("token")

  function handleLogout() {

    localStorage.removeItem("token")

    alert("Logged Out")

    window.location.href = "/login"
  }

  return (
    
    <nav className="navbar">
      

      <div className="nav-left">
          <div className="nav-brand">
    🌿 Amping
  </div>
        

        <Link to="/">
          Home
        </Link>
        

        {token && (
          <>
            <Link to="/posts">
              Posts
            </Link>

            <Link to="/assignments">
              Assignments
            </Link>
          </>
        )}

      </div>

      <div className="nav-right">

        {!token ? (

          <Link
            to="/login"
            className="nav-login"
          >
            Login
          </Link>

        ) : (

          <button
            className="nav-logout"
            onClick={handleLogout}
          >
            Logout
          </button>

        )}

      </div>

    </nav>
  )
}

export default Navbar