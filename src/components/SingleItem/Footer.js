import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="section footer-classic border-top-1">
        <div className="container">
          <p className="rights">
            <span>Cozy Flooring</span>
            <span> © </span>
            <span className="copyright-year" />
            <span>. </span>
            <a href="privacy-policy.html">Privacy Policy</a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
