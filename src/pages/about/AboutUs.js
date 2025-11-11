import "../../App.css";

export default function AboutUs() {
  return (
    <div
      className="about-page min-vh-100 d-flex flex-column justify-content-center align-items-center text-white"
      style={{
        backgroundColor: "#ffffffff", 
        backgroundImage:
          "linear-gradient(135deg, #cdbfb0ff 100%)",
        padding: "60px 20px",
      }}
    >
      <div className="container text-center">
        {/* Title */}
        <h1 className="fw-bold mb-4" style={{ color: "#E8D8B9" }}>
          About <span className="text-white">ShopSeller</span>
        </h1>

        {/* Description */}
        <p className="lead mb-5" style={{ color: "#f1f1f1" }}>
          Welcome to <strong>ShopSeller</strong> — your trusted online store for
          quality products at affordable prices. We’re dedicated to providing an
          effortless shopping experience that brings your favorite items right
          to your doorstep.
        </p>

        {/* Info Cards */}
        <div className="row g-4">
          <div className="col-md-4">
            <div
              className="p-4 h-100 shadow rounded-4"
              style={{
                backgroundColor: "#E8D8B9",
                color: "#4B3B35",
              }}
            >
              <h4 className="fw-bold mb-3">Our Mission</h4>
              <p>
                To make online shopping simple, fast, and reliable — connecting
                customers with quality products at their fingertips.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="p-4 h-100 shadow rounded-4"
              style={{
                backgroundColor: "#E8D8B9",
                color: "#4B3B35",
              }}
            >
              <h4 className="fw-bold mb-3">Our Vision</h4>
              <p>
                To be one of the most trusted and customer-loved online shopping
                destinations known for quality, service, and value.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="p-4 h-100 shadow rounded-4"
              style={{
                backgroundColor: "#E8D8B9",
                color: "#4B3B35",
              }}
            >
              <h4 className="fw-bold mb-3">Our Values</h4>
              <p>
                Honesty, customer satisfaction, and excellence in service are
                the core principles that guide our journey every day.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-5">
          <h5 className="fw-bold" style={{ color: "#E8D8B9" }}>
            Contact Us
          </h5>
          <p className="mt-2" style={{ color: "#f1f1f1" }}>
            📧 support@shopseller.com <br />
            📞 +1234567890
          </p>
        </div>
      </div>
    </div>
  );
}
