import "./Login.css"

function Login() {
  return (
    <div>
      <form className="form">
        <p className="form-title">Sign in to your account</p>
        <div className="input-container">
          <input type="email" placeholder="Enter email" />
          <span></span>
        </div>
        <div className="input-container">
          <input type="password" placeholder="Enter password" />
        </div>
        <button type="submit" className="submit">
          Sign in
        </button>

        <p className="signup-link">
          No account?
          <a href="">Sign up</a>
        </p>
      </form>
    </div>
  )
}

export default Login
