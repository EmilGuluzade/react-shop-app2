import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer  border-top">
      <footer className="site-footer footer__box">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="row">
                <div className="col-md-12">
                  <h3 className="footer-heading mb-4">Navigations</h3>
                </div>
                <div className="col-md-6 col-lg-4">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#!">Sell online</a>
                    </li>
                    <li>
                      <a href="#!">Features</a>
                    </li>
                    <li>
                      <a href="#!">Shopping cart</a>
                    </li>
                    <li>
                      <a href="#!">Store builder</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 col-lg-4">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#!">Mobile commerce</a>
                    </li>
                    <li>
                      <a href="#!">Dropshipping</a>
                    </li>
                    <li>
                      <a href="#!">Website development</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 col-lg-4">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#!">Point of sale</a>
                    </li>
                    <li>
                      <a href="#!!">Hardware</a>
                    </li>
                    <li>
                      <a href="#!">Software</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
              <h3 className="footer-heading mb-4" >
                Promo
              </h3>
              <a href="#!!" className="block-6">
                <img
                  src="https://preview.colorlib.com/theme/shoppers/images/hero_1.jpg.webp"
                  alt="Image placeholder"
                  className="img-fluid rounded mb-4"
                />
                <h3 className="font-weight-light  mb-0 h3__light">
                  Finding Your Perfect Shoes
                </h3>
                <p>Promo from nuary 15 — 25, 2019</p>
              </a>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="block-5 mb-5">
                <h3 className="footer-heading mb-4">Contact Info</h3>
                <ul className="list-unstyled">
                  <li className="address list__box_top">
                    <div className="list__box__icon">
                      <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <a href="#!">
                      203 Fake St. Mountain View, San Francisco, California, USA
                    </a>
                  </li>
                  <li className="phone list__box">
                    <div className="list__box__icon">
                      <i class="fa-solid fa-phone"></i>
                    </div>
                    <a href="tel://23923929210">+2 392 3929 210</a>
                  </li>
                  <li className="email list__box">
                    <div className="list__box__icon">
                      <i class="fa-solid fa-envelope"></i>
                    </div>
                    <a href="emailaddress@domain.com">
                      {" "}
                      emailaddress@domain.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className="block-7">
                <form action="#!" method="post">
                  <label htmlFor="email_subscribe" className="footer-heading footer__heading">
                    Subscribe
                  </label>
                  <div className="form-group inp__from">
                    <input
                      type="text"
                      className="form-control py-0 inp__txt"
                      id="email_subscribe"
                      placeholder="Email"
                    />
                    <input
                      type="submit"
                      className="btn btn-sm btn-primary inp__sumbit"
                      value="SEND"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row pt-5 mt-5 text-center">
            <div className="col-md-12">
              <p className="footer__p">
                Copyright ©
                <script
                  type="text/javascript"
                  async=""
                  src="https://www.google-analytics.com/analytics.js"
                ></script>
                <script>document.write(new Date().getFullYear());</script>2024
                All rights reserved | This template is made with{" "}
                <i className="icon-heart" aria-hidden="true"></i> by{" "}
                <a
                  href="https://colorlib.com"
                  target="_blank"
                  className="text-primary"
                >
                  Colorlib
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
