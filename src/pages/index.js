// Step 1: Import React
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react'
import Layout from '../components/layout';
import { img } from '../components/layout.module.css';


// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>um blog dedicado ao aprendizado contínuo no mundo da tecnologia...</p>
      <StaticImage
        alt="Ilustração do aprendizado contínuo"
        src="../images/aprendizado.jpg"
        className={ img }
      />
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage