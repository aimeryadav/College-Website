// src/pages/Courses.jsx
import React, { useEffect, useState } from "react";
import api from "../api";
import { useAuth } from "../context/AuthContext.jsx";

export default function Courses() {
  const { user } = useAuth();
  const [role, setRole] = useState(null);
  const [semester, setSemester] = useState(""); // "" = all
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);

        // if you want to double-check from backend:
        const meRes = await api.get("/auth/me");
        setRole(meRes.data.role);

        const params = semester ? { semester } : {};
        const courseRes = await api.get("/courses", { params });
        setCourses(courseRes.data || []);
      } catch (err) {
        console.error(err);
        if (err.response?.status === 401) {
          setRole("guest");
        } else {
          setError("Could not load courses.");
        }
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [semester]);

  if (role === "guest") {
    return (
      <>
        <section className="page-hero">
          <div className="container">
            <h1>Programs &amp; Courses</h1>
            <p>Login to view the detailed syllabus and Google Site links.</p>
          </div>
        </section>
        <section style={{ paddingBlock: 28 }}>
          <div className="container">
            <div className="simple-card">
              <p>You are not logged in. Please login as student or faculty.</p>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Programs &amp; Courses</h1>
          
        </div>
      </section>

      <section style={{ paddingBlock: 28 }}>
        <div className="container">
          <div
            className="simple-card"
            style={{ marginBottom: 20, display: "flex", gap: 12 }}
          >
            <label>
              Semester&nbsp;
              <select
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
              >
                <option value="">All</option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
              </select>
            </label>
            {role && (
              <span className="small" style={{ marginTop: "auto" }}>
                Logged in as <strong>{role}</strong>
              </span>
            )}
          </div>

          {loading && <p>Loading courses...</p>}
          {error && <p style={{ color: "crimson" }}>{error}</p>}
          {!loading && !error && courses.length === 0 && (
            <p>No courses found for this semester.</p>
          )}

          <div className="grid-3">
            {courses.map((c) => (
              <article key={c._id} className="card">
                <div className="thumb" />
                <div className="body">
                  <h3>
                    {c.code} — {c.name}
                  </h3>
                  <p>
                    Semester: <strong>{c.semester}</strong>
                  </p>
                  {c.googleSiteLink && (
                    <p>
                      <a
                        href={c.googleSiteLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Open course Google Site
                      </a>
                    </p>
                  )}
                  <div className="meta">
                    <span>Last updated:</span>
                    <span>
                      {c.updatedAt
                        ? new Date(c.updatedAt).toLocaleDateString("en-IN")
                        : "—"}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
