// src/pages/Home.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Small helper component for truncating long text
function ReadMore({ text, limit = 220 }) {
  const [expanded, setExpanded] = useState(false);

  if (!text) return null;

  // If already short, just show it
  if (text.length <= limit) {
    return (
      <p
        style={{
          marginTop: 10,
          fontSize: 13,
          color: "#666",
          lineHeight: "1.6",
          textAlign: "justify",
        }}
      >
        {text}
      </p>
    );
  }

  const visible = expanded ? text : text.slice(0, limit) + "…";

  return (
    <p
      style={{
        marginTop: 10,
        fontSize: 13,
        color: "#666",
        lineHeight: "1.6",
        textAlign: "justify",
      }}
    >
      {visible}{" "}
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

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="container inner">
          <div>
            <h1>
              Build, Research, and{" "}
              <span style={{ color: "var(--primary)" }}>Innovate</span> at RVITM
              CSE
            </h1>
            <p className="lead">
              The CSE Department at RVITM blends strong fundamentals with modern technologies.
Our curriculum, labs, and research culture prepare students for real-world engineering.
From AI and cybersecurity to full-stack development, we train future-ready innovators.
            </p>
          </div>
          <div>

  <img
    src="/assets/images/college.jpeg"
    alt="RVITM Campus"
    style={{
      width: "100%",
      height: "350px",
      borderRadius: "18px",
      objectFit: "cover",
      boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
    }}
  />


</div>

           
           
        </div>
      </section>

      {/* LEADERSHIP TEAM */}
      <section
        id="leadership-team"
        style={{ padding: "40px 0", background: "#f7f7fb" }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 16px",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: 24 }}>
            Leadership Team
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              justifyContent: "center",
            }}
          >
            {/* Principal */}
            <div
              style={{
                flex: "0 1 260px",
                background: "white",
                borderRadius: 10,
                padding: 16,
                boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
                textAlign: "center",
              }}
            >
              <img
                src="https://www.rvitm.edu.in/wp-content/uploads/2024/07/Principal_Rvitm.jpg"
                alt="Principal"
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginBottom: 12,
                }}
              />
              <h3 style={{ margin: "6px 0 4px" }}>Dr. Nagashettappa Biradar </h3>
              <p style={{ margin: 0, fontSize: 14, color: "#555" }}>
              Principal & Professor
              </p>

              <ReadMore
                text={`With my experience as the youngest Principal of a reputed Engineering College in Kalyan Karnataka Region and also as a youngest Administrator of a 61-year-old educational society with 19 plus institutions under its umbrella, and also Director of University Academic Administration of two skill universities and a small period as Vice Chancellor, I shall work to take the institute reach next level of imparting quality technical education using innovative teaching learning practices through a flexible system, encouraging and motivating team work, adhering to professional ethics, resulting in production of highly competent human resources meeting industrial standards, and contributing to the overall development of the society. I will put to use the 25 years’ experience as an academician in developing innovative teaching learning process and igniting research mind set among students by embedding the disciplined research culture acquired during 4 years regular study at Indian Institute of Technology, Roorkee, guiding 9 scholars to pursue research for award of doctoral degree and implementation of research projects worth 86.5 lakhs sanctioned by various funding agencies. Efforts will be made to develop the entrepreneurial spirit by using the knowledge acquired in starting a startup M/s V3MNS Smartech Solutions Pvt. Ltd. Bhalki for development of software for assessment of valvular abnormality. The next level in the growth of the institute is autonomy which will be aided by experience as Academic Senate Member of the university, Chairman, Board of Studies, Institutional NAAC and Departmental NBA coordinator, senior Principal, Vice Chairman, IETE and other responsibilities shouldered successfully.`}
                limit={260}
              />
            </div>

            {/* Dean */}
            <div
              style={{
                flex: "0 1 260px",
                background: "white",
                borderRadius: 10,
                padding: 16,
                boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
                textAlign: "center",
              }}
            >
              <img
                src="https://www.rvitm.edu.in/wp-content/uploads/2022/11/Dr-Malini-M-Patil-scaled.jpg"
                alt="Dean"
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginBottom: 12,
                }}
              />
              <h3 style={{ margin: "6px 0 4px" }}>Dr. Malini M Patil </h3>
              <p style={{ margin: 0, fontSize: 14, color: "#555" }}>
                Professor &amp; Dean CSE Cluster
              </p>

              <ReadMore
                text={`Dr Malini M Patil has 28 years of academic and 13 years of research experience. Presently, she is working as professor in Department of Computer Science and Engineering. She obtained her UG degree from Karnataka University, Dharwad, PG degree from Shivaji University, Kolhapur, and Ph. D. from Bharathiar University, Tamil Nadu. She has published more than 65 research articles in reputed international journals and conferences in India and abroad. Presently, she is guiding four research scholars, three scholars awarded with PhD degree. She has authored five book chapters. She is a member of professional societies, Senior Member IEEE, Member of Women in Engineering (WIE), LMCSI, LMIEI, LMISTE, Member ACM, and actively involved in all the professional society activities. She has delivered many webinars / seminars as an invited speaker across India. She visited Hong Kong, Dubai, Sri Lanka, and Malaysia to attend and present her research papers in international conferences. She received the best paper presentation award in conferences and received the award for paper presenter at international conference at the 53rd Annual Convention of the Computer Society of India at Kalinga Institute of Industrial Technology, Bhubaneshwar, Odisha. She received the “Distinguished Women in Science” Award from Venus International Foundation for the year 2017.`}
                limit={260}
              />
            </div>

            {/* HOD */}
            <div
              style={{
                flex: "0 1 260px",
                background: "white",
                borderRadius: 10,
                padding: 16,
                boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
                textAlign: "center",
              }}
            >
              <img
                src="https://www.rvitm.edu.in/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-18-at-4.43.36-PM.jpeg"
                alt="Head of Department"
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginBottom: 12,
                }}
              />
              <h3 style={{ margin: "6px 0 4px" }}>Dr.Hema M S</h3>
              <p style={{ margin: 0, fontSize: 14, color: "#555" }}>
                Professor &amp; I/C HOD/CSE
              </p>

              <ReadMore
                text={`Dr. M.S. Hema, Professor in Computer Science and Engineering at RVITM, has 26 years of academic experience. She holds a B.E. degree from Bharathiar University, Coimbatore, an M.E. degree from Anna University, Chennai, and a Ph.D. from Anna University, Chennai.`}
                limit={260}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
