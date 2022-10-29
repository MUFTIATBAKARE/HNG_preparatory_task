import React, { Component } from 'react'
import Slack from '../../assets/slack.svg'
import Icon from '../../assets/Icon.svg'
import VEC from '../../assets/VEC.svg'
import Vector from '../../assets/Vector.svg'
import I4G from '../../assets/i4g.png'
import './Footer.css'

class Footer extends Component {
    render() {
      return (
        <div className="container">
            <div className="logo">
              <img src={Slack} alt="/"/>
              <img src={Icon} alt="/" id="git"/>
            </div>
            <div className="zuri_hng">
              <div className="zuri">
                <img src={VEC} alt="/" id="above"/>
                <img src={Vector} alt="/"/>
              </div>
                <p>HNG Internship 9 Frontend Task</p>
                <img src={I4G} alt="/" id="i4g"/>
            </div>
        </div>
      )
    }
  }
  
  export default Footer
  