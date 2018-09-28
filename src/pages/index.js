import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi, I'm Drew</h1>
    <p>*Software Engineer @ Limelight Health</p>
    <p>*Solo musical artist who regularly performed at the Ritz Carlton Kyoto, Japan</p>
    <p>*Speaks Japanese (Holds N3 certification, studying for N2)</p>
    <Link to="/page-2/">Codepen Todo App in Vanilla Javascript</Link>
  </Layout>
)

export default IndexPage
