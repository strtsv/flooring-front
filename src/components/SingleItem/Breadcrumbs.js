import React from "react";

import i1 from "../../assets/images/breadcrumbs-01-1920x600.jpg";

class Breadcrumbs extends React.Component {
  render() {
    return (
      <section
        className="parallax-container breadcrumbs-custom"
        data-parallax-img={i1}
        style={{
          backgroundImage: "url(" + i1 + ")",
        }}
      >
        <div className="parallax-content">
          <div className="container">
            <h2 className="breadcrumbs-custom-title">Single Product</h2>
          </div>
          <ul className="breadcrumbs-custom-path">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="products.html">Products</a>
            </li>
            <li className="active">Single Product</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Breadcrumbs;
