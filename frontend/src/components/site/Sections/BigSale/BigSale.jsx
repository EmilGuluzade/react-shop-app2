import React from "react";
import "./BigSale.css"

const BigSale = () => {
  return (
    <div className="bigsale">
      <div className="site-section block-8">
        <div className="container">
          <div className="row justify-content-center  mb-5">
            <div className="col-md-7 site-section-heading text-center pt-4 pos__rel">
              <h2>Big Sale!</h2>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-12 col-lg-7 mb-5">
              <a href="#!">
                <img
                  src="https://preview.colorlib.com/theme/shoppers/images/blog_1.jpg.webp"
                  alt="Image placeholder"
                  className="img-fluid rounded"
                />
              </a>
            </div>
            <div className="col-md-12 col-lg-5 text-center pl-md-5 big_sale__tittle">
              <h2>
                <a href="#!">50% less in all items</a>
              </h2>
              <p className="post-meta mb-4">
                By <a href="#!">Carl Smith</a>{" "}
                <span className="block-8-sep">•</span> September 3, 2018
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisquam iste dolor accusantium facere corporis ipsum animi
                deleniti fugiat. Ex, veniam?
              </p>
              <p>
                <a href="#!" className="btn btn-primary btn-sm big_sale__btn">
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

export default BigSale;
