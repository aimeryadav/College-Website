// src/components/ReadMore.jsx
import React, { useState } from "react";

function ReadMore({ text, limit = 220 }) {
  const [expanded, setExpanded] = useState(false);

  if (!text) return null;

  // If text is already short, just show it normally
  if (text.length <= limit) {
    return (
      <p style={{ lineHeight: "1.6", textAlign: "justify", marginTop: 12 }}>
        {text}
      </p>
    );
  }

  const preview = text.slice(0, limit) + "... ";

  return (
    <p style={{ lineHeight: "1.6", textAlign: "justify", marginTop: 12 }}>
      {expanded ? text + " " : preview}
      <span
        onClick={() => setExpanded(!expanded)}
        style={{
          color: "var(--primary)",
          cursor: "pointer",
          fontWeight: 600,
        }}
      >
        {expanded ? "Show less" : "Read more"}
      </span>
    </p>
  );
}

export default ReadMore;
