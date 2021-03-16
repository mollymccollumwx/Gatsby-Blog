import React from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import "./layout.scss"
import "../styles/index.scss"

const Layout = props => {
  return (
    <div className="container">
      <div className="content"> 
        <Navbar />
        {props.children}
      </div>

      <Footer />
    </div>
  )
}

export default Layout
