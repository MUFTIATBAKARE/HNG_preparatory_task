import React, { Component } from 'react'
import Profile from './components/profile-section/Profile.js'
import Data from './components/data-section/Data.js'
import Footer from './components/footer-section/Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Profile/>
      <Data/>
      <Footer/>
      </div>
    )
  }
}

export default App
