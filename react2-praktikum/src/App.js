import React, { Component } from 'react'
import Navbar from './components/layouts/Navbar'
import Router from './components/Router'


export class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <p><Router/></p>
      </div>
    )
  }
}

export default App
