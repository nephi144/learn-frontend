import Navbar from "../components/Navbar"

function LoginPage() {

  function handleLogin() {

    const fakeToken = "sample-jwt-token"

    localStorage.setItem(
      "token",
      fakeToken
    )

    alert("Token Stored")
  }

  return (
    <div className="container">

      <Navbar />

      <h1 className="page-title">
        Login
      </h1>

      <div className="form-card">

        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button
          className="btn"
          onClick={handleLogin}
        >
          Login
        </button>

      </div>

    </div>
  )
}

export default LoginPage