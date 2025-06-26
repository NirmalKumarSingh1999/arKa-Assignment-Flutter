import React from "react";

export default function FluttersDawn() {
  return (
    <section className="bg-black text-white py-5 px-4">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side Title */}
          <div className="col-md-4 text-start">
            <h2 className="fw-bold display-5">Flutter's Dawn</h2>
            <h4 className="fw-semibold">History of Flutter</h4>
          </div>

          {/* Center Description */}
          <div className="col-md-6">
            <p className="lead text-center">
              Uncover the fascinating story of Flutter in <strong>'Flutter's Dawn: History of Flutter.'</strong>
              From humble origins to global acclaim, delve into its captivating narrative. Explore milestones,
              triumphs, and challenges. Whether tech enthusiast or curious mind, join us on this captivating journey!
              <span className="text-info fw-semibold"> Click to begin!</span>
            </p>
          </div>

          {/* Right Side Button */}
          <div className="col-md-2 d-flex justify-content-end">
            <button
              className="btn btn-info text-white rounded-pill d-flex align-items-center justify-content-center gap-2 px-4 fw-semibold"
              style={{ height: "50px" }}
            >
              BEGIN
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ transform: "rotate(120deg)" }}
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
