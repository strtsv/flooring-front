import React from "react";

import Header from "../components/Header";

import Breadcrumbs from "../components/SingleItem/Breadcrumbs";
import SingleProduct from "../components/SingleItem/SingleProduct";
import Posts from "../components/SingleItem/Posts";
import Welcome from "../components/SingleItem/Welcome";

import Footer from "../components/Footer";

const SingleItem = () => {
  return (
    <div className="page animated">
      <Header />
      <Breadcrumbs />
      <SingleProduct />
      <Posts />
      <Welcome />
      <Footer />
    </div>
  );
};

export default SingleItem;
