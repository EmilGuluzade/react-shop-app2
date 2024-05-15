import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="site-navbar" role="banner">
      <div className="site-navbar-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
              <form action="" className="site-block-top-search position-relative ">
                <span className="icon icon-search2"><i class="fa-solid fa-magnifying-glass"></i></span>
                <input
                  type="text"
                  className="form-control border-0"
                  placeholder="Search"
                />
              </form>
            </div>
            <div className="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
              <div className="site-logo">
                <Link to="/" className="js-logo-clone">
                  Shoppers
                </Link>
              </div>
            </div>
            <div className="col-6 col-md-4 order-3 order-md-3 text-right">
              <div className="site-top-icons">
                <ul className=" d-flex gap-3 justify-content-end ">
                  <li>
                    <Link to="#">
                      <span className="icon icon-person"><i class="fa-solid fa-user-large"></i></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span className="icon icon-heart-o"><i class="fa-regular fa-heart"></i></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/cart" className="site-cart">
                      <span className="icon icon-shopping_cart"><i class="fa-solid fa-cart-shopping"></i></span>
                      <span className="count">2</span>
                    </Link>
                  </li>
                  <li className="d-inline-block d-md-none ml-md-0">
                    <Link href="#" className="site-menu-toggle js-menu-toggle">
                      <span className="icon-menu"></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="site-navigation text-right text-md-center" role="navigation">
        <div className="container">
          <ul className=" py-4  site-menu  justify-content-center gap-5 js-clone-nav d-flex ">
            <li className="has-children active">
              <a href="/">Home</a>
             
            </li>
            <li className="has-children">
              <Link to="#">About</Link>
             
            </li>
            <li>
              <Link to="#">Shop</Link>
            </li>
            <li>
              <Link to="#">Catalogue</Link>
            </li>
            <li>
              <Link to="#">New Arrivals</Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
