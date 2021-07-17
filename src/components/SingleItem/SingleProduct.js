import React from "react";
import $ from "jquery";
import Slider from "react-slick";

import i1 from "../../assets/images/single-product-01-540x540.jpg";
import i2 from "../../assets/images/single-product-02-540x540.jpg";
import i3 from "../../assets/images/single-product-03-540x540.jpg";
import i4 from "../../assets/images/single-product-04-540x540.jpg";
import i5 from "../../assets/images/single-product-thumb-01-120x123.jpg";
import i6 from "../../assets/images/single-product-thumb-02-120x123.jpg";
import i7 from "../../assets/images/single-product-thumb-03-120x123.jpg";
import i8 from "../../assets/images/single-product-thumb-04-120x123.jpg";

class SingleProduct extends React.Component {
  render() {
    var settings = {
      slidesToShow: 3,
      slidesToScroll:
        parseInt($(".slick-slider").attr("data-slide-to-scroll"), 10) || 1,
      asNavFor: $(".slick-slider").attr("data-for") || false,
      dots: $(".slick-slider").attr("data-dots") === "true",
      infinite: false ? false : $(".slick-slider").attr("data-loop") === "true",
      focusOnSelect: true,
      arrows: $(".slick-slider").attr("data-arrows") === "true",
      swipe: $(".slick-slider").attr("data-swipe") === "true",
      autoplay: $(".slick-slider").attr("data-autoplay") === "true",
      vertical: $(".slick-slider").attr("data-vertical") === "true",
      centerMode: $(".slick-slider").attr("data-center-mode") === "true",
      variableWidth: $(".slick-slider").attr("data-auto-width") === "true",
      centerPadding: $(".slick-slider").attr("data-center-padding")
        ? $(".slick-slider").attr("data-center-padding")
        : "0.50",
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 0,
          settings: {
            slidesToShow:
              parseInt($(".slick-slider").attr("data-items"), 10) || 1,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow:
              parseInt($(".slick-slider").attr("data-sm-items"), 10) || 1,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow:
              parseInt($(".slick-slider").attr("data-md-items"), 10) || 1,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow:
              parseInt($(".slick-slider").attr("data-lg-items"), 10) || 1,
          },
        },
        {
          breakpoint: 1199,
          settings: {
            slidesToShow:
              parseInt($(".slick-slider").attr("data-xl-items"), 10) || 1,
          },
        },
      ],
    };
    return (
      <section className="section section-sm bg-default section-posts">
        <div className="container">
          <div className="row row-50">
            <div className="col-md-6">
              <div className="slick-slider-wrap row-20">
                {}
                <div
                  className="slick-slider carousel-parent"
                  data-swipe="true"
                  data-items={1}
                  data-child="#child-carousel"
                  data-for="#child-carousel"
                >
                  <Slider {...settings}>
                    <div className="item">
                      <img src={i1} alt width={540} height={540} />
                    </div>
                    <div className="item">
                      <img src={i2} alt width={540} height={540} />
                    </div>
                    <div className="item">
                      <img src={i3} alt width={540} height={540} />
                    </div>
                    <div className="item">
                      <img src={i4} alt width={540} height={540} />
                    </div>
                  </Slider>
                </div>
                <div
                  className="slick-slider slick-slider-child"
                  id="child-carousel"
                  data-for=".carousel-parent"
                  data-items={4}
                  data-sm-items={4}
                  data-md-items={4}
                  data-lg-items={4}
                  data-xl-items={4}
                >
                  <div className="item">
                    <div className="item-inner">
                      <img src={i5} alt width={120} height={123} />
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-inner">
                      <img src={i6} alt width={120} height={123} />
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-inner">
                      <img src={i7} alt width={120} height={123} />
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-inner">
                      <img src={i8} alt width={120} height={123} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="single-product">
                <h2>Knight Tile</h2>
                <h3>KP90 Honey Maple</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum a dolor nunc. Duis quis volutpat tortor. Aliquam
                  quis lectus eu neque interdum cursus. Pellentesque nec dui in
                  odio dignissim tempor. Orci varius natoque penatibus et magnis
                  dis parturient montes, nascetur ridiculus mus. Praesent
                  pulvinar laoreet nibh et gravida. Fusce vel gravida est.
                </p>
                <ul className="list-description">
                  <li>
                    <div className="list-description-title">Categories</div>
                    <div className="list-description-text">Tile</div>
                  </li>
                  <li>
                    <div className="list-description-title">
                      Product Information
                    </div>
                    <div className="list-description-text">
                      Slim wood planks 36" x 4" (915mm x 102mm)
                    </div>
                  </li>
                  <li>
                    <div className="list-description-title">Tags</div>
                    <ul className="list-tags list-description-text">
                      <li>
                        <a href="#">Residential & Commercial Flooring</a>
                      </li>
                      <li>
                        <a href="#">Renew Your Floor</a>
                      </li>
                      <li>
                        <a href="#">Premium Floors</a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="group group-md">
                  <a
                    className="button button-icon button-icon-right button-primary button-wide"
                    href="#"
                  >
                    <span className="icon fa fa-plus" />
                    Get a free sample
                  </a>
                  <a
                    className="button button-icon button-icon-right button-primary button-wide"
                    href="#"
                  >
                    <span className="icon fa fa-search" />
                    Find a retailer
                  </a>
                  <a
                    className="button button-icon button-icon-right button-primary button-wide"
                    href="#"
                  >
                    <span className="icon fa fa-angle-right" />
                    View more details
                  </a>
                </div>
                <div className="group-md group-middle list-social">
                  <span className="list-social-title">Share:</span>
                  <div>
                    <ul className="list-social">
                      <li>
                        <a className="icon icon-md fa fa-facebook-f" href="#" />
                      </li>
                      <li>
                        <a className="icon icon-md fa fa-twitter" href="#" />
                      </li>
                      <li>
                        <a
                          className="icon icon-md fa fa-google-plus"
                          href="#"
                        />
                      </li>
                      <li>
                        <a
                          className="icon icon-md fa fa-pinterest-p"
                          href="#"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SingleProduct;
