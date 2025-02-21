import React from 'react'
import Header from ".//Header.jsx"
import Footer from "./Footer.jsx"
import { Outlet, useNavigation } from 'react-router-dom'
import Loading from './Loading.jsx'

const AppLayout = () => {

  const navigation = useNavigation();

  if (navigation.state === "loading")
    return <Loading />

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default AppLayout
