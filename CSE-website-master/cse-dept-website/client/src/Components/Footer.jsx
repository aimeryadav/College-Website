import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-grid">

        {/* LEFT COLUMN */}
        <div className="footer-col">
          <div className="brand-row">
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
            <strong>RVITM CSE</strong>
          </div>
          <p>Department of Computer Science &amp; Engineering. Bengaluru, India.</p>
          <p className="small" style={{ opacity: 0.8 }}>
            © {new Date().getFullYear()} RVITM CSE
          </p>
        </div>

        {/* MIDDLE COLUMN → Explore */}
        <div className="footer-col">
          <h4>Explore</h4>
          <ul className="footer-links">
            <li><Link to="/placements">Placements</Link></li>
            <li><Link to="/research">Research</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
          </ul>
        </div>

        {/* RIGHT COLUMN → Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <address className="footer-address">
            <div>
              <a href="mailto:info.rvitm@rvei.edu.in">info.rvitm@rvei.edu.in</a><br />
              <a href="tel:+91 8951758140">+91 8951758140</a>
            </div>
            <div>
              RV Institute of Technology &amp; Management<br />
              Department of CSE<br />
              Bengaluru, Karnataka, India
            </div>
            <div className="small" style={{ opacity: 0.8 }}>
              Office hours: Mon–Fri, 9:30 AM – 5:30 PM
            </div>
          </address>
        </div>

      </div>
    </footer>
  );
}
