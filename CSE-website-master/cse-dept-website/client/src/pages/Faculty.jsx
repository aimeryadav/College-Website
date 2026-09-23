// src/pages/Faculty.jsx
import React, { useEffect, useState } from "react";
import api from "../api";

function Faculty() {
  const [faculty, setFaculty] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [expanded, setExpanded] = useState({}); // 🔥 Track which card is expanded

  useEffect(() => {
    async function loadFaculty() {
      try {
        setLoading(true);
        const res = await api.get("/faculty");
        setFaculty(res.data || []);
      } catch (err) {
        console.error(err);
        setError("Could not load faculty right now.");
      } finally {
        setLoading(false);
      }
    }
    loadFaculty();
  }, []);

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Faculty Directory</h1>
          <p>Browse our faculty </p>
        </div>
      </section>

      <section style={{ paddingBlock: 28 }}>
        <div className="container">
          {loading && <p>Loading faculty...</p>}
          {error && <p style={{ color: "crimson" }}>{error}</p>}

          <div className="faculty-scroll">
            <div className="scroll-inner">
              {faculty.map((f) => {
                const isExpanded = expanded[f._id];
                const profileText = f.profile || "";

                const shortText =
                  profileText.length > 180
                    ? profileText.substring(0, 180) + "..."
                    : profileText;

                return (
                  <div key={f._id} className="faculty-card">
                    <div className="faculty-header">
                      <img
                        src={f.photoUrl || "/default-avatar.png"}
                        alt={f.name}
                        className="faculty-photo"
                      />
                      <div>
                        <h3>{f.name}</h3>
                        <p className="designation">
                          {f.designation || "Faculty Member"}
                        </p>
                        <p className="email">
                          <a href={`mailto:${f.email}`}>{f.email}</a>
                        </p>
                      </div>
                    </div>

                    <div className="faculty-body">
                      <p>{isExpanded ? profileText : shortText}</p>

                      {profileText.length > 180 && (
                        <button
                          onClick={() => toggleExpand(f._id)}
                          className="read-btn"
                        >
                          {isExpanded ? "Read Less ▲" : "Read More ▼"}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faculty;
