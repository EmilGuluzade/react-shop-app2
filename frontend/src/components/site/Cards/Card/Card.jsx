import React from 'react'
import "./Card.css"
import CardItem from '../CardItem/CardItem'
const Card = ({data}) => {
  return (
    <>
      {
        data.map((item,index)=>(
            <CardItem key={index} item={item}></CardItem>
        ))
      }
    </>
  )
}

export default Card
