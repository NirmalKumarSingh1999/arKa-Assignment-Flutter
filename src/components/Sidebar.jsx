export default function Sidebar() {
  return (
    <div
      className="d-flex flex-column bg-black text-white p-3 position-relative"
      style={{
        minWidth: '240px',
        minHeight: '100vh',
        borderRight: '2px solid white',
      }}
    >
      <div className="d-flex flex-column align-items-center">
        {/* Centered VAYUZ logo */}
        <img
          src="/vayuz-logo.png"
          alt="VAYUZ"
          className="mb-4"
          style={{ width: 120 }}
        />

        {/* Rounded rainbow border button */}
        <button
          className="btn mb-4 text-white fw-bold px-4"
          style={{
            background: 'transparent',
            border: '2px solid',
            borderImageSlice: 1,
            borderImageSource:
              'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)',
            borderRadius: '50px',
            width: '100%',
          }}
        >
          CONTACT US
        </button>
      </div>

      {/* Navigation links */}
      <nav className="d-flex flex-column gap-2 text-center">
        <a href="#" className="text-white text-decoration-none">
          App Development
        </a>
        <a href="#" className="text-white text-decoration-none">
          Challenges
        </a>
        <a href="#" className="text-white text-decoration-none">
          Hire Developer
        </a>
        <a href="#" className="text-white text-decoration-none">
          Community
        </a>
      </nav>

      {/* Bottom image section */}
      <div
        className="d-flex flex-column align-items-center text-center"
        style={{ marginTop: '300px' }}
      >
        <img
          src="/sidebar-image.png"
          className="img-fluid mb-2 rounded"
          alt="Decorative"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <p className="text-white-50 px-2">
          Lorem ipsum dolor sit amet consectetur. Enim tempor posuere rutrum.
        </p>
      </div>
    </div>
  );
}
