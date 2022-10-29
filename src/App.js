import React, { Component } from 'react'
import Profile from './components/profile-section/Profile.js'
import Links from './components/links-section/Links.js'
import Footer from './components/footer-section/Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Profile/>
      <Links/>
      <Footer/>
      </div>
    )
  }
}

export default App
