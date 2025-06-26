import { useRef, useEffect, useState as ReactState } from "react";

export default function AccordionSection() {
  const [activeIndex, setActiveIndex] = ReactState(null);
  const leftRef = useRef(null);
  const [leftHeight, setLeftHeight] = ReactState("auto");

  const items = [
    "UI/UX Design",
    "Customization & Integration",
    "Testing & Quality Assurance",
    "Maintenance & Support",
    "Consulting & Training",
    "Migration & Upgrades",
  ];

  useEffect(() => {
    if (leftRef.current) {
      setLeftHeight(leftRef.current.offsetHeight);
    }
  }, []);

  const toggleItem = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section
      className="py-5 px-3 px-md-5 bg-black text-white"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="container-fluid">
        {/* Centered Top Heading */}
        <div className="text-center mb-5">
          <h1 className="fw-bold display-6">Our Dynamic Services Suite!</h1>
          <h3 className="fw-semibold">Embrace Innovation: Let's Create Together!</h3>
          <p className="lead text-white-50 mt-3">
            Step into innovation! Explore our range of services and let's create something extraordinary together.
          </p>
        </div>

        <div className="row">
          {/* Accordion Section */}
          <div className="col-md-6" ref={leftRef}>
            <h3 className="fw-bold mb-3">Flutter App Development</h3>
            <p className="text-light mb-4">
              Unlock endless possibilities with Flutter App Development. Build beautiful, high-performance
              applications for any platform - faster and easier than ever before. {" "}
              <span className="text-info fw-semibold">Let’s get started today!</span>
            </p>

            <div className="accordion-list">
              {items.map((title, index) => (
                <div
                  key={index}
                  onClick={() => toggleItem(index)}
                  className="d-flex justify-content-between align-items-center py-2 border-bottom"
                  style={{ cursor: "pointer" }}
                >
                  <span className="fw-semibold fs-5">{title}</span>
                  <span className="fs-4">{activeIndex === index ? "−" : "+"}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div
            className="col-md-6 d-flex align-items-center justify-content-center"
            style={{ height: leftHeight }}
          >
            <img
              src="/flutter-laptop-phone.png"
              alt="Flutter Devices"
              className="img-fluid rounded"
              style={{ maxHeight: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
