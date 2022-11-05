import React, { Component } from 'react'
import Profile from './components/profile-section/Profile.js'
import Data from './components/data-section/Data.js'
import Footer from './components/footer-section/Footer.js'
import Scrolltotop from './components/scrolltotop.js'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Profile/>
      <Data/>
      <Footer/>
      <Scrolltotop/>
      </div>
    )
  }
}

export default App
