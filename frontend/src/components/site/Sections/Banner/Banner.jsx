import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div
      className="site-blocks-cover aos-init aos-animate"
   

      
    >
      <div className="container">
        <div className="row align-items-start     align-items-md-center justify-content-end">
          <div className="col-md-5  text-md-left pt-5 pt-md-0">
            <h1 className="mb-2">Finding Your Perfect Shoes</h1>
            <div className="intro-text  text-md-left">
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.{" "}
              </p>
              <p>
                <a href="#" className="btn btn-sm btn-primary">
                  Shop Now
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
