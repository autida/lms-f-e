import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Cookies from "js-cookie";

const Layout = () => {
  Cookies.remove("cookiesAndCream");
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Layout;
