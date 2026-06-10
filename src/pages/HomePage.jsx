import Navbar from "../components/Navbar"


function HomePage() {
  const token = localStorage.getItem("token")
  {
  !token && (
    <a
      href="/login"
      className="btn"
    >
      Get Started
    </a>
  )
}
  return (
    <div className="container">

      <Navbar />

      <div className="hero">

        <h1 className="hero-title">
           Welcome to Amping
        </h1>

        <p className="hero-subtitle">
          Empowering counselors to support
          student wellness through meaningful
          activities and guidance.
        </p>

      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <h2>12</h2>
          <p>Wellness Posts</p>
        </div>

        <div className="stat-card">
          <h2>35</h2>
          <p>Assignments Created</p>
        </div>

        <div className="stat-card">
          <h2>120</h2>
          <p>Students Supported</p>
        </div>

      </div>

    </div>
  )
}

export default HomePage