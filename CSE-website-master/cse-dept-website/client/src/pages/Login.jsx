// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { useAuth } from "../context/AuthContext.jsx";

function Login() {
  const [email, setEmail] = useState("faculty@test.com");
  const [password, setPassword] = useState("faculty123");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { setUser } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await api.post("/auth/login", { email, password });
      setUser(res.data.user); // { id, role, name, ... }

      alert("Logged in as: " + res.data.user.role);
      navigate("/notices");
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message || "Login failed. Please check credentials."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Page hero */}
      <section className="page-hero">
        <div className="container">
          <h1>Login</h1>
          <p>Sign in to access student resources and faculty tools.</p>
        </div>
      </section>

      {/* Centered card */}
      <section className="auth-section">
        <div className="container auth-wrapper">
          <div className="auth-card">
            <h2 className="auth-title">Welcome Back</h2>

            {error && <p className="auth-error">{error}</p>}

            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                />
              </div>

              <button className="login-btn" type="submit" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
