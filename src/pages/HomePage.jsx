import Navbar from "../components/Navbar"

function HomePage() {
  return (
    <div className="container">

      <Navbar />

      {/* Hero Section */}

      <div className="hero">

        <h1 className="hero-title">
           Amping
        </h1>

        <p className="hero-subtitle">
          Supporting student wellness through
          education, reflection, and counselor guidance.
        </p>

        <div className="hero-buttons">

          <a href="/posts" className="btn">
            View Posts
          </a>

          <a href="/assignments" className="btn-secondary">
            View Assignments
          </a>

        </div>

      </div>

      {/* Stats */}

      <div className="stats-grid">

        <div className="stat-card">
          <h2>48</h2>
          <p>Students Supported</p>
        </div>

        <div className="stat-card">
          <h2>12</h2>
          <p>Wellness Activities</p>
        </div>

        <div className="stat-card">
          <h2>5</h2>
          <p>Active Counselors</p>
        </div>

      </div>

      {/* Features */}

      <div className="card">

        <h2>Platform Features</h2>

        <ul className="feature-list">

          <li>Create wellness posts</li>

          <li>Assign wellness activities</li>

          <li>Support student well-being</li>

          <li>Track engagement</li>

          <li>Connect counselors and students</li>

        </ul>

      </div>

    </div>
  )
}

export default HomePage