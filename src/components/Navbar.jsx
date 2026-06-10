import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/assignments">Assignments</Link>
      
    </nav>
    
  )
  
}

export default Navbar