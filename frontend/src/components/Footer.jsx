import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          {/* Contact Information */}
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <p>Phone: (+91) 123-4567</p>
            <p>Email: info@tastehaven.com</p>
          </div>

          {/* Copyright */}
          <div className="col-md-6 text-md-right">
            <p>&copy; {new Date().getFullYear()} Taste Haven. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
