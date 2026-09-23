// src/pages/Admissions.jsx
import React from "react";

function Admissions() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <h1>Admissions — Computer Science &amp; Engineering</h1>
          <p>
            Ready to join our CSE program? Find eligibility, process, important
            dates and contact details below.
          </p>
        </div>
      </section>

      {/* MAIN ADMISSIONS CONTENT */}
      <section style={{ paddingBlock: 28 }}>
        <div
          id="cse-admissions"
          className="container"
          style={{
            marginTop: 24,
            marginBottom: 40,
            padding: 28,
            borderRadius: 12,
            background: "#ffffff",
            boxShadow: "0 6px 24px rgba(16,24,40,0.06)",
            maxWidth: 900,
          }}
        >
          <h2 style={{ fontSize: 28, margin: "0 0 8px 0", color: "#111827" }}>
            Admissions — Computer Science &amp; Engineering
          </h2>
          <p style={{ margin: "0 0 16px 0", color: "#6b7280" }}>
            Ready to join our CSE program? Find eligibility, process, important
            dates and contact details below.
          </p>

          {/* CTA BUTTONS */}
          <div
            style={{
              display: "flex",
              gap: 12,
              marginBottom: 18,
              flexWrap: "wrap",
            }}
          >
            {/* TODO: Update hrefs to correct application / brochure URLs */}
            <a
              href="/files/Sample-Application-form-RVITM.pdf"
              style={{
                display: "inline-block",
                padding: "10px 18px",
                borderRadius: 10,
                background: "var(--primary)",
                color: "white",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              APPLY
            </a>
            
           
          </div>

          {/* ELIGIBILITY */}
          <h3
            style={{
              fontSize: 18,
              margin: "18px 0 8px 0",
              color: "#111827",
            }}
          >
            Eligibility Criteria
          </h3>
          <ul
            style={{
              margin: "0 0 12px 20px",
              color: "#374151",
            }}
          >
            <li>
              Entrance-based admissions: CET / COMEDK / National-level scores
              accepted where applicable.
            </li>
            <li>
              For PG (M.Tech/MCA): Relevant Bachelor’s degree + valid entrance
              score (GATE/College PG entrance).
            </li>
            <li>
              Lateral Entry: Diploma holders in relevant fields — as per
              university regulations.
            </li>
          </ul>

          {/* PROCESS */}
          <h3
            style={{
              fontSize: 18,
              margin: "12px 0 8px 0",
              color: "#111827",
            }}
          >
            Admission Process (Step-by-step)
          </h3>
          <ol
            style={{
              margin: "0 0 12px 20px",
              color: "#374151",
            }}
          >
            <li>Fill the online application form on the college portal.</li>
            <li>Upload scanned documents (see Documents Required).</li>
            <li>Pay the application fee online.</li>
            <li>Shortlisting / Merit list or Entrance test results published.</li>
            <li>Counseling and seat allotment (if applicable).</li>
            <li>
              Report to college for document verification and fee payment to
              confirm admission.
            </li>
          </ol>

          {/* DOCUMENTS REQUIRED */}
          <h3
            style={{
              fontSize: 18,
              margin: "12px 0 8px 0",
              color: "#111827",
            }}
          >
            Documents Required
          </h3>
          <ul
            style={{
              margin: "0 0 12px 20px",
              color: "#374151",
            }}
          >
            <li>10th Marksheet</li>
            <li>12th Marksheet (or equivalent)</li>
            <li>Transfer Certificate (TC)</li>
            <li>Migration Certificate (if required)</li>
            <li>Entrance Score Card (CET/GATE/COMEDK etc.)</li>
            <li>Caste / Income Certificate (if applicable)</li>
            <li>Aadhar / ID Proof</li>
            <li>Passport-size photographs (4-6 copies)</li>
          </ul>

          {/* FEES */}
          <h3
            style={{
              fontSize: 18,
              margin: "12px 0 8px 0",
              color: "#111827",
            }}
          >
            Fee Structure (Indicative)
          </h3>
          <p
            style={{
              margin: "0 0 12px 0",
              color: "#374151",
              fontSize: 14,
            }}
          >
            Tuition Fee (per year):{" "}
            <strong>As per college sanction</strong>
            <br />
            Hostel Fee (if applicable):{" "}
            <strong>Separate charges</strong>
            <br />
            One-time Admission Charges: <strong>Contact to college Admission department </strong>
          </p>
          <p
            style={{
              fontSize: 12,
              color: "#6b7280",
              marginBottom: 12,
            }}
          >
            
          </p>

          {/* SCHOLARSHIPS */}
          <h3
            style={{
              fontSize: 18,
              margin: "12px 0 8px 0",
              color: "#111827",
            }}
          >
            Scholarships &amp; Financial Aid
          </h3>
          <ul
            style={{
              margin: "0 0 12px 20px",
              color: "#374151",
            }}
          >
            <li>Merit-based scholarships for top performers.</li>
            <li>Government scholarships (state/national schemes).</li>
            <li>Need-based fee concessions on case-by-case basis.</li>
            <li>
              Special scholarships for wards of defence / ex-servicemen /
              minority categories (if applicable).
            </li>
          </ul>

          {/* PDF BROCHURES */}
          <h3
            style={{
              fontSize: 18,
              margin: "0 0 8px 0",
              color: "#111827",
            }}
          >
            Download PDF Brochures
          </h3>
          <div
            style={{
              marginTop: 12,
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            {/* Make sure these files exist in your public/ or appropriate folder */}
            <a
              href="/files/comedk_brochure.pdf"
              style={{
                display: "inline-block",
                padding: "10px 16px",
                borderRadius: 8,
                background: "#4f46e5",
                color: "white",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Download COMEDK Brochure
            </a>
            <a
              href="/files/management_brochure.pdf"
              style={{
                display: "inline-block",
                padding: "10px 16px",
                borderRadius: 8,
                background: "#16a34a",
                color: "white",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Download MANAGEMENT Brochure
            </a>
            <a
              href="/files/kcet_brochure.pdf"
              style={{
                display: "inline-block",
                padding: "10px 16px",
                borderRadius: 8,
                background: "#dc2626",
                color: "white",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Download KCET Brochure
            </a>
            <a
              href="/files/lateral_entry_brochure.pdf"
              style={{
                display: "inline-block",
                padding: "10px 16px",
                borderRadius: 8,
                background: "#0891b2",
                color: "white",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Download LATERAL ENTRY Brochure
            </a>
          </div>

          {/* WHY CSE */}
          <h3
            style={{
              fontSize: 18,
              margin: "18px 0 8px 0",
              color: "#111827",
            }}
          >
            Why Choose CSE at Our College?
          </h3>
          <ul
            style={{
              margin: "0 0 12px 20px",
              color: "#374151",
            }}
          >
            <li>Experienced &amp; industry-connected faculty.</li>
            <li>Modern labs and well-equipped infrastructure.</li>
            <li>Strong placement support &amp; internship pipeline.</li>
            <li>Active student clubs, hackathons and research cell.</li>
            <li>Industry-oriented curriculum and guest lectures.</li>
            <li>Startup &amp; incubation support for student projects.</li>
          </ul>

          {/* CONTACT */}
          <h3
            style={{
              fontSize: 18,
              margin: "12px 0 8px 0",
              color: "#111827",
            }}
          >
            Contact — Admissions Office
          </h3>
          <div
            style={{
              display: "flex",
              gap: 18,
              flexWrap: "wrap",
              color: "#374151",
            }}
          >
          
            <div style={{ minWidth: 220 }}>
              <p style={{ margin: "0 0 6px 0" }}>
                <strong>Postal Address:</strong>
              </p>
              <address style={{ margin: 0, color: "#6b7280" }}>
                CSE Department Office
                <br />
                RV INSTITUTE OF TECHNOLOGY AND MANAGEMENT
                <br />
                Bengaluru — 560076
              </address>
              
             
            </div>
          </div>

          {/* FAQ */}
          <h3
            style={{
              fontSize: 18,
              margin: "18px 0 8px 0",
              color: "#111827",
            }}
          >
            Quick FAQ
          </h3>
          <div style={{ color: "#374151" }}>
            <p style={{ margin: "6px 0" }}>
              <strong>Q:</strong> Can I apply through management quota? <br />
              <strong>A:</strong> Yes — management quota seats (if available)
              follow college policy.
            </p>
            <p style={{ margin: "6px 0" }}>
              <strong>Q:</strong> When will I get the merit list? <br />
              <strong>A:</strong> Merit/shortlist dates will be displayed on the
              portal and communicated by email/SMS.
            </p>
            <p style={{ margin: "6px 0" }}>
              <strong>Q:</strong> How can I check my application status? <br />
              <strong>A:</strong> Login to the applicant dashboard with your
              email and application ID.
            </p>
          </div>

          <p
            style={{
              fontSize: 12,
              color: "#9ca3af",
              marginTop: 14,
              textAlign: "right",
            }}
          >
            Last updated: Replace-with-date
          </p>
        </div>
      </section>
    </>
  );
}

export default Admissions;
