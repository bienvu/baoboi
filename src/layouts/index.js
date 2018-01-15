import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Header from '../components/SiteWide/Header'
import Footer from '../components/SiteWide/Footer'
import '../../scss/styles.scss'

class DefaultLayout extends React.Component {
  render() {
    return (
      <div className="page">
        <Helmet
          title="FFW Sites by Gatsby Js"
          meta={[
            { name: 'description', content: 'FFW Sites' },
            { name: 'keywords', content: 'FFW Sites, something' },
          ]}
        />
        <Header />
        <main>
           {this.props.children()}
        </main>
        <Footer />
      </div>
    )
  }
}

module.exports = DefaultLayout
