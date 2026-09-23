// src/Components/Navbar.jsx
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import api from "../api";

export default function Navbar() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await api.post("/auth/logout");
      setUser(null);
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
      alert("Could not logout. Check console.");
    }
  }

  return (
    <header className="navbar">
      <div className="container inner">
        <NavLink className="brand" to="/" aria-label="CSE Dept Home">
          <img
              src="/assets/images/rvitm-logo.png"   // temporary, use your real logo file
              alt="RVITM Logo"
  style={{
    width: "42px",
    height: "42px",
    borderRadius: "10px",
    objectFit: "cover",
  }}
/>

          <span>CSE Dept</span>
        </NavLink>

        <nav className="navlinks" aria-label="Primary navigation">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/admissions">Admissions</NavLink>
          <NavLink to="/research">Research</NavLink>
          <NavLink to="/placements">Placements</NavLink>
          <NavLink to="/faculty">Faculty</NavLink>

          {/* Only logged-in users can see these */}
          {user && (
            <>
              <NavLink to="/courses">Courses</NavLink>
              <NavLink to="/notices">Notices</NavLink>
            </>
          )}
        </nav>

        <div className="controls">
          {user ? (
            <>
              <span className="small" style={{ marginRight: 8 }}>
                {user.role}
              </span>
              <button className="btn" type="button" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <NavLink className="btn" to="/login">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
}
