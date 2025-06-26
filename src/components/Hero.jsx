export default function Hero() {
  return (
    <div className="p-4 text-white bg-dark">
      <p className="text-secondary mb-1">
        Securing Your Flutter App: Best Practices and Techniques
      </p>

      {/* White horizontal line */}
      <hr style={{ borderTop: '2px solid white', width: '100%', marginBottom: '2rem' }} />

      <div className="row align-items-center">
        {/* Left Column */}
        <div className="col-md-6 mb-4">
          <h1 className="display-5 fw-bold">
            Unlock the Potential<br />of Flutter
          </h1>
          <p className="lead text-light">
            Your Premier Partner for Cross-Platform App Excellence!
          </p>
          <button className="btn btn-info fw-bold mt-3">
            UPGRADE YOUR TECH
          </button>
        </div>

        {/* Right Column with layered images */}
        <div className="col-md-6 position-relative d-flex justify-content-center align-items-center">
          {/* Base hero image */}
          <img
            src="/code-hero.png"
            alt="Flutter App Screenshot"
            className="img-fluid rounded shadow"
          />

          {/* Lower layered image - visible on md and up */}
          <img
            src="/lower-code-hero.png"
            alt="Lower Layer"
            className="position-absolute d-none d-md-block"
            style={{
              top: '40%',
              right: '0%',
              width: '180px',
            }}
          />

          {/* Upper layered image - visible on md and up */}
          <img
            src="/upper-code-hero.png"
            alt="Upper Layer"
            className="position-absolute d-none d-md-block"
            style={{
              top: '70%',
              right: '10px',
              width: '220px',
            }}
          />
        </div>
      </div>
    </div>
  );
}
