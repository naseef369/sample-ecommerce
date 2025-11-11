import React from "react";
import "../App.css";


export default function ContactUs() {
  return (
    <div
      className="contact-page min-vh-100 d-flex align-items-center justify-content-center text-white"
      style={{
        background: "linear-gradient(135deg, #cdbfb0ff 100%,)",
        padding: "60px 20px",
      }}
    >
      <div className="container text-center">
        { /* Title */ }
        <h1 className="fw-bold mb-4" style={{ color: "#E8D8B9" }}>
          Contact <span className="text-white">ShopSeller</span>
        </h1>
        <p className="lead mb-5" style={{ color: "#f1f1f1" }}>
          Have questions, feedback, or need support?  
          We’d love to hear from you. Reach out using the form below or contact us directly.
        </p>

        <div className="row justify-content-center">
          {/* Contact Form */}
          <div className="col-md-8 col-lg-6">
            <div
              className="p-4 rounded-4 shadow"
              style={{ backgroundColor: "#E8D8B9", color: "#4B3B35" }}
            >
              <form>
                <div className="mb-3 text-start">
                  <label className="form-label fw-bold">Full Name</label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-3 text-start">
                  <label className="form-label fw-bold">Email Address</label>
                  <input
                    type="email"
                    className="form-control rounded-pill"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-3 text-start">
                  <label className="form-label fw-bold">Message</label>
                  <textarea
                    className="form-control rounded-4"
                    rows="4"
                    placeholder="Type your message..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn w-100 fw-bold rounded-pill shadow-sm"
                  style={{
                    backgroundColor: "#a5947cff",
                    color: "white",
                    border: "none",
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-5">
          <h5 className="fw-bold" style={{ color: "#E8D8B9" }}>
            Get in Touch
          </h5>
          <p className="mt-2" style={{ color: "#f1f1f1" }}>
            📧 Email: support@shopseller.com <br />
            📞 Phone: +91 98765 43210 <br />
            📍 Location: Kochi, Kerala, India
          </p>
        </div>
      </div>
    </div>
  );
}

