import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'


import {HashRouter as Router, Routes, Route} from 'react-router-dom'

import ContactPage from'./routes/ContactPage'
import ScrollToTop from './components/scrolltotop'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
    
    <Router>
        <ScrollToTop>
        <Routes>
            <Route path='/' element={<App />}/>
            <Route path='/contact' element={<ContactPage />}/>
        </Routes>
        </ScrollToTop>
    </Router>
    

    )