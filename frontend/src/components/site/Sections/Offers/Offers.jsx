import React from "react";
import "./Offers.css";
const Offers = () => {
  return (
    <div class="site-section site-section-sm site-blocks-1">
      <div class="container">
        <div class="row">
          <div
            class="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay=""
          >
            <div class="icon mr-4 align-self-start">
              <span class="icon-truck"><i class="fa-solid fa-truck"></i></span>
            </div>
            <div class="text">
              <h2 class="text-uppercase">Free Shipping</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
              </p>
            </div>
          </div>
          <div
            class="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="icon mr-4 align-self-start">
              <span class="icon-refresh2"><i class="fa-solid fa-rotate-right"></i></span>
            </div>
            <div class="text">
              <h2 class="text-uppercase">Free Returns</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
              </p>
            </div>
          </div>
          <div
            class="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="icon mr-4 align-self-start">
              <span class="icon-help"> <i class="fa-solid fa-question"></i></span>
            </div>
            <div class="text">
              <h2 class="text-uppercase">Customer Support</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
