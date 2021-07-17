import React from "react";

import i1 from "../../assets/images/home-post-04-370x370.jpg";
import i2 from "../../assets/images/home-post-05-370x370.jpg";
import i3 from "../../assets/images/home-post-06-370x370.jpg";

class Posts extends React.Component {
  render() {
    return (
      <section className="section section-sm bg-gray-100 section-posts">
        <div className="container">
          <h2>Flooring Manufacturers</h2>
          <div className="row row-30">
            <div className="col-lg-4 col-md-6">
              <article className="post-classic post-classic-mod-4">
                <figure className="post-classic-figure">
                  <a href="single-product.html">
                    <img src={i1} alt width={370} height={370} />
                  </a>
                </figure>
                <div className="post-classic-figcaption">
                  <h3 className="post-classic-title">
                    <a href="single-product.html">Shaw</a>
                  </h3>
                  <p className="post-classic-text">
                    Lorem ipsum dolor sit amet conse ctetur adipisicing elit,
                    sed do eiusmod.
                  </p>
                  <a className="link-arrow" href="single-product.html">
                    <div className="icon novi-icon icon-lg fa fa-angle-right" />
                  </a>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-md-6">
              <article className="post-classic post-classic-mod-4">
                <figure className="post-classic-figure">
                  <a href="single-product.html">
                    <img src={i2} alt width={370} height={370} />
                  </a>
                </figure>
                <div className="post-classic-figcaption">
                  <h3 className="post-classic-title">
                    <a href="single-product.html">Teragren</a>
                  </h3>
                  <p className="post-classic-text">
                    Lorem ipsum dolor sit amet conse ctetur adipisicing elit,
                    sed do eiusmod.
                  </p>
                  <a className="link-arrow" href="single-product.html">
                    <div className="icon novi-icon icon-lg fa fa-angle-right" />
                  </a>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-md-6">
              <article className="post-classic post-classic-mod-4">
                <figure className="post-classic-figure">
                  <a href="single-product.html">
                    <img src={i3} alt width={370} height={370} />
                  </a>
                </figure>
                <div className="post-classic-figcaption">
                  <h3 className="post-classic-title">
                    <a href="single-product.html">Pergo</a>
                  </h3>
                  <p className="post-classic-text">
                    Lorem ipsum dolor sit amet conse ctetur adipisicing elit,
                    sed do eiusmod.
                  </p>
                  <a className="link-arrow" href="single-product.html">
                    <div className="icon novi-icon icon-lg fa fa-angle-right" />
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Posts;
