import React, { Component } from 'react'
import './Data.css'
import {Link} from 'react-router-dom'

class Data extends Component {
    render() {
      return (
        <div className="container">
            <div id="btn__zuri">
                <p>
                    <a href="https://training.zuri.team/">Zuri Team</a>
                </p>
            </div>
            <div id="books">
                <p>
                    <a href="http://books.zuri.team">Zuri Books</a>
                </p>
            </div>
            <div id="book__python">
                <p>
                    <a href="https://books.zuri.team/python-for-beginners?ref_id=<mufteeBakky>">Python Books</a>
                </p>
            </div>
            <div id="pitch">
                <p>
                    <a href="https://background.zuri.team">Background Check for Coders</a>
                </p>
            </div>
            <div id="book__design">
                <p>
                    <a href="https://books.zuri.team/design-rules">Design Books</a>
                </p>
            </div>
            <div id="contact">
                <p>
                    <Link  to='/contact'>Contact Me</Link>
                </p>
            </div>
        </div>
      )
    }
  }
export default Data
