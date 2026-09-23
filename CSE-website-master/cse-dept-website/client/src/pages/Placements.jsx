// src/pages/Placements.jsx
import React, { useEffect, useState } from "react";
import api from "../api";

function Placements() {
  const [placements, setPlacements] = useState([]);
  const [batchYear, setBatchYear] = useState(""); // filter
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadPlacements(currentBatch = batchYear) {
    try {
      setLoading(true);
      setError("");

      const params = {};
      if (currentBatch) params.batchYear = currentBatch;

      const res = await api.get("/placements", { params }); // GET /api/placements
      setPlacements(res.data || []);
    } catch (err) {
      console.error(err);
      setError("Could not load placement records.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPlacements();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleFilterSubmit(e) {
    e.preventDefault();
    loadPlacements(batchYear);
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Placements</h1>
          <p>
            Highlights of the companies and roles secured by our CSE students.
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
                Batch year
                <input
                  type="number"
                  placeholder="e.g. 2025"
                  value={batchYear}
                  onChange={(e) => setBatchYear(e.target.value)}
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

            <button type="submit" className="btn">
              Apply filter
            </button>

            {batchYear && (
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => {
                  setBatchYear("");
                  loadPlacements("");
                }}
              >
                Clear
              </button>
            )}
          </form>

          {/* State messages */}
          {loading && <p>Loading placements...</p>}
          {error && <p style={{ color: "crimson" }}>{error}</p>}

          {!loading && !error && placements.length === 0 && (
            <div className="simple-card">
              <p>No placement data found for this filter.</p>
              <p className="small" style={{ opacity: 0.8 }}>
                Insert documents in the <code>placements</code> collection in
                MongoDB to see them here.
              </p>
            </div>
          )}

          {/* Placements list */}
          <div className="stack-4">
            {placements.map((p) => (
              <article key={p._id} className="simple-card">
                <h3 style={{ marginTop: 0 }}>
                  {p.studentName}{" "}
                  {p.usn && (
                    <span className="small" style={{ opacity: 0.7 }}>
                      ({p.usn})
                    </span>
                  )}
                </h3>
                <p style={{ marginBottom: 6 }}>
                  <strong>{p.company}</strong>{" "}
                  {p.role && (
                    <span className="small" style={{ opacity: 0.8 }}>
                      — {p.role}
                    </span>
                  )}
                </p>

                <div className="meta" style={{ marginBottom: 4 }}>
                  {p.batchYear && <span>Batch {p.batchYear}</span>}
                  {typeof p.packageLPA === "number" && (
                    <span>{p.packageLPA} LPA</span>
                  )}
                  {p.type && <span>{p.type}</span>}
                </div>

                <div className="small" style={{ opacity: 0.8 }}>
                  {p.location && <div>Location: {p.location}</div>}
                  {p.offerDate && (
                    <div>
                      Offer date:{" "}
                      {new Date(p.offerDate).toLocaleDateString("en-IN")}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Placements;
