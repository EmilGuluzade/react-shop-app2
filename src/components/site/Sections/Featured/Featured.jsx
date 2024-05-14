import React, { useContext, useEffect, useState } from "react";
import "./Featured.css";
import MainContext from "../../../../context/context";
import Card from "../../Cards/Card/Card";
import axios from "axios";
const Featured = () => {
  const [searched, setSearched] = useState([]);
  const [inpVal, setInpval] = useState("");

 
  useEffect(() => {
    axios.get("http://localhost:3000/products").then(res=>{
        if (inpVal.trim() != "") {
            
            const result = res.data.filter((item) => {
              return item.title.split(" ")
                .join("")
                .toLowerCase()
                .includes(inpVal.trim().toLowerCase());
            });
      
            setSearched([...result]);
          } else {
            setSearched([...res.data]);
          }
    })
   
  }, [inpVal]);

  return (
    <section className="site-section block-3 site-blocks-2 bg-light">
      <div className="container ">
        <div class="row justify-content-center mb-5 ">
          <div class="col-md-7 site-section-heading text-center pt-4">
            <h2>Featured Products</h2>
          </div>
        </div>
        <div className="row  mb-5 ">
          <div className="col-4  ">
            <label className="mx-3" htmlFor="search">
              Search by name
            </label>
            <input
              type="search"
              id="search"
              value={inpVal}
              onChange={(e) => {
                setInpval(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <Card data={searched}></Card>
        </div>
      </div>
    </section>
  );
};

export default Featured;
