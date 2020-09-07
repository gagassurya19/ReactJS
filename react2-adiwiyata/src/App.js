import React, { Component } from 'react'
import 'assets/css/style.css'
import 'materialize-css/dist/css/materialize.min.css'

import Router from 'Router'
import Navbar from 'parts/Navbar'
import Footer from 'parts/Footer'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Router/>
        <Footer/>
      </div>
    )
  }
}
