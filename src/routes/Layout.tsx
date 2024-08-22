import Footer from '@/pages/(client)/_components/Footer'
import Header from '@/pages/(client)/_components/Header'
import React from 'react'

import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <>
      <div className="container-custom padding">
        <Header />
        <main className="">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout