import React from "react";
import "./CardItem.css";
import { Link } from "react-router-dom";
const CardItem = ({item}) => {
  return (
    <div style={{boxShadow: "0 0 30px -10px rgba(0, 0, 0, 0.1)"}} class="item col-lg-3 col-md-6 shadow m-3  ">
      <div  class="block-4 text-center">
        <figure class="block-4-image">
          <img style={{height:"200px",width:"100%"}} 
            src={item.image}
            alt="Image placeholder"
            class="img-fluid"
            />
        </figure>
        <div class="block-4-text p-4">
          <h3>
            <Link to={`detail/${item.id}`}>{item.title}</Link>
          </h3>
          <p class="mb-0">Finding perfect products</p>
          <p class="text-primary font-weight-bold">${item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
