export default function ContactSection() {
  const inputStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '1px solid white',
    borderRadius: 0,
    color: 'white',
    padding: '10px 0',
  };

  const placeholderStyle = `
    ::placeholder {
      color: white !important;
      opacity: 1;
    }
  `;

  const topLinks = ['Events', 'Gen AI', 'Careers', 'Case study', 'SME Talks'];
  const bottomLinks = ['About', 'Insights', 'Community', 'Privacy & Policies'];

  return (
    <section className="container-fluid bg-black text-white py-5 px-4" style={{ fontFamily: 'Inter, sans-serif' }}>
      <style>{placeholderStyle}</style>

      <div className="row">
        {/* Left Column */}
        <div className="col-md-6 mb-4 d-flex flex-column justify-content-between">
          {/* Top Nav */}
          <div className="d-flex flex-wrap mb-5 gap-4">
            {topLinks.map((item) => (
              <span key={item} className="fw-medium" style={{ fontSize: '1.2rem', whiteSpace: 'nowrap' }}>
                {item}
              </span>
            ))}
          </div>

          {/* Text Content */}
          <div className="mb-5">
            <p style={{ fontSize: '1.5rem', fontWeight: 500, lineHeight: '1.6' }}>
              For any collaborative projects or enquiries feel free to connect with us.
            </p>
            <h4 className="fw-bold mt-3 mb-4">vayuz.com</h4>
          </div>

          {/* Footer Nav */}
          <div className="d-flex flex-wrap gap-4">
            {bottomLinks.map((item) => (
              <span key={item} className="fw-medium" style={{ fontSize: '1.1rem', whiteSpace: 'nowrap' }}>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="col-md-6">
          <h3 className="text-uppercase fw-bold mb-4">Connect With Us</h3>
          <form className="row g-3">
            <div className="col-12">
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
                style={inputStyle}
              />
            </div>
            <div className="col-12">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                style={inputStyle}
              />
            </div>
            <div className="col-12">
              <input
                type="tel"
                className="form-control"
                placeholder="Phone Number"
                style={inputStyle}
              />
            </div>
            <div className="col-12">
              <button
                type="submit"
                className="btn btn-info text-white w-100 rounded-pill fw-semibold mt-2"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
