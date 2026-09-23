// src/pages/Research.jsx
import React, { useEffect, useState } from "react";
import api from "../api";

function Research() {
  const [projects, setProjects] = useState([]);
  const [year, setYear] = useState("");      // filter: year
  const [domain, setDomain] = useState("");  // filter: domain
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadResearch(currentYear = year, currentDomain = domain) {
    try {
      setLoading(true);
      setError("");

      const params = {};
      if (currentYear) params.year = currentYear;
      if (currentDomain) params.domain = currentDomain;

      const res = await api.get("/research", { params }); // GET /api/research
      setProjects(res.data || []);
    } catch (err) {
      console.error(err);
      setError("Could not load research projects.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadResearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleFilterSubmit(e) {
    e.preventDefault();
    loadResearch(year, domain);
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Research</h1>
          <p>
            Projects and publications from the CSE department. Data is fetched
            directly from the <code>Research</code> collection in MongoDB
            through the backend API.
          </p>
        </div>
      </section>

      <section style={{ paddingBlock: 28 }}>
        <div className="container">
          {/* Filters */}
          <form
            onSubmit={handleFilterSubmit}
            className="simple-card"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              alignItems: "flex-end",
              marginBottom: 20,
            }}
          >
            <div>
              <label className="small">
                Year
                <input
                  type="number"
                  placeholder="e.g. 2024"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  style={{
                    width: "160px",
                    marginTop: 4,
                    padding: "8px 10px",
                    borderRadius: 10,
                    border: "1px solid var(--border)",
                  }}
                />
              </label>
            </div>

            <div>
              <label className="small">
                Domain
                <input
                  type="text"
                  placeholder="AI/ML, Systems, Security..."
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  style={{
                    width: "220px",
                    marginTop: 4,
                    padding: "8px 10px",
                    borderRadius: 10,
                    border: "1px solid var(--border)",
                  }}
                />
              </label>
            </div>

            <button type="submit" className="btn">
              Apply filters
            </button>

            {(year || domain) && (
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => {
                  setYear("");
                  setDomain("");
                  loadResearch("", "");
                }}
              >
                Clear
              </button>
            )}
          </form>

          {/* State messages */}
          {loading && <p>Loading research projects...</p>}
          {error && <p style={{ color: "crimson" }}>{error}</p>}

          {!loading && !error && projects.length === 0 && (
            <div className="simple-card">
              <p>No research projects found for the selected filters.</p>
              <p className="small" style={{ opacity: 0.8 }}>
                Insert documents in the <code>researches</code> collection in
                MongoDB to see them here.
              </p>
            </div>
          )}

          {/* Projects grid */}
          {projects.length > 0 && (
            <div className="grid-3">
              {projects.map((p) => (
                <article key={p._id} className="card">
                  <div className="thumb" />
                  <div className="body">
                    <h3>{p.title}</h3>
                    {p.description && (
                      <p style={{ marginBottom: 8 }}>{p.description}</p>
                    )}

                    <div className="meta" style={{ marginBottom: 6 }}>
                      {p.domain && <span>{p.domain}</span>}
                      {p.year && <span>{p.year}</span>}
                    </div>

                    <div className="small" style={{ opacity: 0.85 }}>
                      {p.faculty && (
                        <div>
                          <strong>Faculty:</strong> {p.faculty}
                        </div>
                      )}
                      {Array.isArray(p.students) && p.students.length > 0 && (
                        <div>
                          <strong>Students:</strong> {p.students.join(", ")}
                        </div>
                      )}
                      {p.status && (
                        <div>
                          <strong>Status:</strong> {p.status}
                        </div>
                      )}
                    </div>

                    {p.link && (
                      <p style={{ marginTop: 8 }}>
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noreferrer"
                          className="tag"
                        >
                          View project / paper
                        </a>
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Research;
