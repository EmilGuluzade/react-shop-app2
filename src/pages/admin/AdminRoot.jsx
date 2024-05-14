import React from 'react'
import Header from '../../layout/admin/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../../layout/admin/Footer/Footer'

const AdminRoot = () => {
  return (
    <>
       <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default AdminRoot
