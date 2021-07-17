import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="section page-header">
        {}
        <div className="rd-navbar-wrap">
          <nav
            className="rd-navbar"
            data-layout="rd-navbar-fixed"
            data-sm-layout="rd-navbar-fixed"
            data-md-layout="rd-navbar-fixed"
            data-lg-layout="rd-navbar-fixed"
            data-xl-layout="rd-navbar-static"
            data-xxl-layout="rd-navbar-static"
            data-md-device-layout="rd-navbar-fixed"
            data-lg-device-layout="rd-navbar-fixed"
            data-xl-device-layout="rd-navbar-static"
            data-xxl-device-layout="rd-navbar-static"
            data-lg-stick-up-offset="105px"
            data-xl-stick-up-offset="105px"
            data-xxl-stick-up-offset="105px"
            data-lg-stick-up="true"
            data-xl-stick-up="true"
            data-xxl-stick-up="true"
          >
            <div
              className="rd-navbar-collapse-toggle rd-navbar-fixed-element-1"
              data-rd-navbar-toggle=".rd-navbar-collapse"
            >
              <span />
            </div>
            <div className="rd-navbar-aside-outer bg-gray-700">
              <div className="rd-navbar-aside">
                <ul className="rd-navbar-aside-list list-inline-md rd-navbar-collapse">
                  <li>
                    <time className="rd-navbar-aside-time" dateTime={2019}>
                      <span>Opening hours:</span>
                      <span>6am-4pm PST M-Th;</span>
                      <span>6am-3pm PST Fri</span>
                    </time>
                  </li>
                  <li>
                    <div className="unit unit-spacing-sm align-items-center rd-navbar-aside-phone">
                      <div className="unit-left">
                        <p>Need Help?</p>
                      </div>
                      <div className="unit-body">
                        <a href="tel:#">800-2345-6789</a>
                      </div>
                    </div>
                  </li>
                  <li>
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
                  </li>
                </ul>
                {}
                <div className="rd-navbar-search">
                  <form
                    className="rd-search"
                    action="search-results.html"
                    data-search-live="rd-search-results-live"
                    method="GET"
                  >
                    <div className="form-wrap">
                      <label
                        className="form-label"
                        htmlFor="rd-navbar-search-form-input"
                      >
                        Search
                      </label>
                      <input
                        className="rd-navbar-search-form-input form-input"
                        id="rd-navbar-search-form-input"
                        type="text"
                        name="s"
                        autoComplete="off"
                      />
                      <div
                        className="rd-search-results-live"
                        id="rd-search-results-live"
                      />
                    </div>
                    <button
                      className="rd-search-form-submit fa-search"
                      type="submit"
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="rd-navbar-main-outer">
              <div className="rd-navbar-main">
                {}
                <div className="rd-navbar-panel">
                  {}
                  <button
                    className="rd-navbar-toggle"
                    data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                  >
                    <span />
                  </button>
                  {}
                  <div className="rd-navbar-brand">
                    {}
                    <a className="brand" href="index.html">
                      <img
                        src="images/logo-default-492x160.png"
                        alt
                        width={246}
                        height={80}
                      />
                    </a>
                  </div>
                  <button
                    className="rd-navbar-search-toggle rd-navbar-fixed-element-2"
                    data-rd-navbar-toggle=".rd-navbar-search"
                  >
                    <span />
                  </button>
                </div>
                <div className="rd-navbar-main-element">
                  <div className="rd-navbar-nav-wrap">
                    <ul className="rd-navbar-nav">
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="index.html">
                          Home
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="about.html">
                          About
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="services.html">
                          Services
                        </a>
                        <ul className="rd-menu rd-navbar-dropdown">
                          <li className="rd-dropdown-item">
                            <a className="rd-dropdown-link" href="#">
                              Carpet Installation
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a className="rd-dropdown-link" href="#">
                              Flooring Installation
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a className="rd-dropdown-link" href="#">
                              Tile Removal
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="rd-nav-item active">
                        <a className="rd-nav-link" href="products.html">
                          Products
                        </a>
                        <ul className="rd-menu rd-navbar-dropdown">
                          <li className="rd-dropdown-item active">
                            <a
                              className="rd-dropdown-link"
                              href="single-product.html"
                            >
                              Single Product
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="contacts.html">
                          Contacts
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
