import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import "./Detail.css"
import axios from 'axios'
import MainContext from '../../../context/context'

const Detail = () => {
    const {id}=useParams()
    const [itemData,setItemData]=useState([])
    
    useEffect(() => {
        axios
          .get(`http://localhost:3000/products/${id}`)
          .then((res) => {
            setItemData(res.data);
            
    
          })
         
      }, []);
     
   const {basket,setBasket,addToBasket,data,setData}=useContext(MainContext)
  return (
    <div className="container d-flex  mt-5 py-5 ">
      <div className="col-6 d-flex justify-content-center  ">
        <img width="400px" height="400px" src={itemData.image} alt=""/>
      </div>
      <div className="col-6 d-flex flex-column justify-content-center ">
        <h3>{itemData.title}</h3>
        <h4>{itemData.price}$</h4>
        <p>{itemData.description}</p>
        <div>
          <button className="btn btn-success "
            onClick={()=>{
                addToBasket(itemData.id)
               
            }}
          >Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Detail
