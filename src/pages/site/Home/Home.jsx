import React, { useContext } from 'react'
import Banner from '../../../components/site/Sections/Banner/Banner'
import Offers from '../../../components/site/Sections/Offers/Offers'
import Categories from '../../../components/site/Sections/Categories/Categories'
import BigSale from '../../../components/site/Sections/BigSale/BigSale'
import Featured from '../../../components/site/Sections/Featured/Featured'


const Home = () => {

  return (
    <>
      <Banner></Banner>
  <Offers></Offers>
  <Categories></Categories>
  <Featured ></Featured>
  <BigSale></BigSale>
    </>
  )
}

export default Home
