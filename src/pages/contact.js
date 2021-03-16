import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    
      <Layout>
        <Head title="Contact"/>
      <h1>This is my Contact Page</h1>
      <h2>
        The best way to reach me is via{" "}
        <a href="https://twitter.com/wxmolly" rel="noreferrer" target="_blank">
          @wxmolly
        </a>{" "}
        on Twitter.
      </h2>
      </Layout>
    
  )
}

export default ContactPage
