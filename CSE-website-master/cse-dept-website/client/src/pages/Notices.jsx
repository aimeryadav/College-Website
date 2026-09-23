// src/pages/Notices.jsx
import React, { useEffect, useState } from "react";
import api from "../api";
import { useAuth } from "../context/AuthContext.jsx";

function Notices() {
  const { user } = useAuth(); // { id, role } or null

  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // form state for new notice
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [visibleTo, setVisibleTo] = useState("all");
  const [pinned, setPinned] = useState(false);

  // ------------------ load notices ------------------
  useEffect(() => {
    async function loadNotices() {
      try {
        setLoading(true);
        const res = await api.get("/notices"); // -> /api/notices
        setNotices(res.data || []);
      } catch (err) {
        console.error(err);
        setError("Could not load notices right now.");
      } finally {
        setLoading(false);
      }
    }
    loadNotices();
  }, []);

  // ------------------ helpers ------------------
  const canEdit = user && (user.role === "faculty" || user.role === "admin");
  const canAdd = canEdit; // same rule

  async function handleAdd(e) {
    e.preventDefault();
    if (!title.trim()) return alert("Please enter a title");

    try {
      const res = await api.post("/notices", {
        title,
        content,
        visibleTo:
          visibleTo === "students"
            ? "students"
            : visibleTo === "faculty"
            ? "faculty"
            : "all",
        pinned,
      });

      setNotices((prev) => [res.data, ...prev]);
      setTitle("");
      setContent("");
      setVisibleTo("all");
      setPinned(false);
    } catch (err) {
      console.error(err);
      alert(
        err.response?.data?.message ||
          "Could not add notice. Check console for details."
      );
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Delete this notice?")) return;
    try {
      await api.delete(`/notices/${id}`);
      setNotices((prev) => prev.filter((n) => n._id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete notice.");
    }
  }

  async function handleEdit(n) {
    const newTitle = window.prompt("Edit title:", n.title);
    if (newTitle === null) return; // cancel
    const newContent = window.prompt("Edit content:", n.content || "");
    if (newContent === null) return;

    try {
      const res = await api.put(`/notices/${n._id}`, {
        ...n,
        title: newTitle,
        content: newContent,
      });

      setNotices((prev) =>
        prev.map((x) => (x._id === n._id ? res.data : x))
      );
    } catch (err) {
      console.error(err);
      alert("Failed to update notice.");
    }
  }

  function formatDate(d) {
    if (!d) return "";
    const dt = new Date(d);
    return dt.toLocaleString();
  }

  // ------------------ UI ------------------
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Notice Board</h1>
          <p>
            Important announcements for students and faculty. Data is loaded
            from the <code>Notice</code> collection in MongoDB.
          </p>
        </div>
      </section>

      <section style={{ paddingBlock: 28 }}>
        <div className="container">
          {/* ---------- Add Notice form (faculty/admin only) ---------- */}
          {canAdd && (
            <div className="notice-form-card">
              <h2 style={{ marginTop: 0, marginBottom: 4 }}>Add New Notice</h2>
              <span className="pill pill-small">faculty</span>

              <form
                onSubmit={handleAdd}
                className="notice-form"
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0, 2fr) minmax(0, 3fr)",
                  gap: "16px 24px",
                  marginTop: 16,
                }}
              >
                <div style={{ gridColumn: "1 / -1" }}>
                  <label className="field-label">
                    Title
                    <input
                      className="field-input"
                      placeholder="Exam schedule, workshop, event…"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </label>
                </div>

                <div style={{ gridColumn: "1 / -1" }}>
                  <label className="field-label">
                    Content
                    <textarea
                      className="field-input"
                      rows={3}
                      placeholder="Detailed description of the notice…"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    />
                  </label>
                </div>

                <div>
                  <label className="field-label">
                    Visible to
                    <select
                      className="field-input"
                      value={visibleTo}
                      onChange={(e) => setVisibleTo(e.target.value)}
                    >
                      <option value="all">Everyone</option>
                      <option value="students">Students only</option>
                      <option value="faculty">Faculty only</option>
                    </select>
                  </label>
                  <label
                    style={{ display: "flex", gap: 8, marginTop: 8 }}
                    className="field-label"
                  >
                    <input
                      type="checkbox"
                      checked={pinned}
                      onChange={(e) => setPinned(e.target.checked)}
                    />
                    Pin to top
                  </label>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "flex-start",
                  }}
                >
                  <button className="btn" type="submit">
                    Add Notice
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* ---------- Status messages ---------- */}
          {loading && <p>Loading notices...</p>}
          {error && <p style={{ color: "crimson" }}>{error}</p>}
          {!loading && !error && notices.length === 0 && (
            <p>No notices available.</p>
          )}

          {/* ---------- Notice cards ---------- */}
          <div className="notice-list">
            {notices.map((n) => (
              <article key={n._id} className="notice-card">
                <div className="notice-header">
                  <div>
                    <h3>{n.title}</h3>
                    <div className="muted small">
                      {formatDate(n.createdAt) || "—"}
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    {n.pinned && (
                      <span className="pill pill-small pill-accent">Pinned</span>
                    )}
                    {/* Edit/Delete for faculty+admin only */}
                    {canEdit && (
                      <>
                        <button
                          type="button"
                          className="btn-ghost small"
                          onClick={() => handleEdit(n)}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="btn-ghost small danger"
                          onClick={() => handleDelete(n._id)}
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                </div>

                {n.content && (
                  <p style={{ marginTop: 8, marginBottom: 12 }}>{n.content}</p>
                )}

                <div className="notice-footer-row">
                  <span className="pill pill-small">
                    {n.visibleTo === "students"
                      ? "Students"
                      : n.visibleTo === "faculty"
                      ? "Faculty"
                      : "Everyone"}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Notices;
