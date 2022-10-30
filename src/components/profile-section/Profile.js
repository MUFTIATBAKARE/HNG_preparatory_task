import React, {Component} from 'react'
import { CiCircleMore } from "react-icons/ci"
import { RiShareForwardLine } from "react-icons/ri"
import Profilepic from '../../assets/profilepic.jpg'
import './Profile.css'

class Profile extends Component {
    render() {
      return (
        <div className='container'>
          <div className='topicon'>
            <CiCircleMore className='moreIcon'/>
            <RiShareForwardLine className='shareIcon'/>
          </div>
          <div className="top">
            <img src={Profilepic} alt="/" id="profile__img"/>
            <h5>Annette Black</h5>
          </div>
            
          <div id="twitter">
            <p>
              <a href="https://twitter.com/MufteeSphere?t=u_Nz-gvjwg8ZobFeMT8m3A&s=09">Twitter Link</a>
            </p>
          </div>
          <div id="slack">
            <p>
              <a href="/">Slack Username - mufteeBakky</a>
            </p>
          </div>
        </div>
      )
    }
  }
export default Profile