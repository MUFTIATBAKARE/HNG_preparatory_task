import React, { useState, useEffect } from 'react'
import './contact.css'

function Contact() {
    
    const [formvalue, setFormvalue] = useState({ message:''})
    const [formerror, setFormerror] = useState({})
    const [issubmit, setSubmit] = useState(false)
    
    const handlevalidation =(e) =>{
      const{name, value} = e.target
      setFormvalue({...formvalue, [name] : value})
    }
    const handlesubmit =(e) =>{
      e.preventDefault()
      setFormerror(validationform (formvalue))
      setSubmit(true)
    }
    const validationform = (value) =>{
      const errors= {}
      

    if(!value.message){
        errors.message="Please enter a message";
    }
    
    return errors
}

useEffect( ()=>{
    if(Object.keys(formerror).length===0 && issubmit)
    {
        console.log(formvalue)
    }
},[formerror, formvalue, issubmit])


return (
    <div className="content">
        <div className="head">
            <h2>Contact Me</h2>
            <p>Hi there, contact me to ask about anything you have in mind.</p>
        </div>
        <div className="form-container">
        
            <form onSubmit={ handlesubmit} >
                <div className="name">
                    <div className="first" >
                        <label>First name</label>
                        <div>
                        <input type="text" id="first_name" placeholder="Enter your first name" name="name"  />
                        </div>
                    </div>

                    <div className="last" >
                        <label>Last name</label>
                        <div>
                        <input type="text" id="last_name" placeholder="Enter your last name" name="name"  />
                        </div>
                    </div>
                </div>
                <div >
                    <label>Email</label>
                    <div>
                    <input type="text" id="email" placeholder="bakaremuftiat@gmail.com" name="email"  />
                    </div>
                </div>
    
                <div>
                    <label>Message</label>
                    <div>
                        <textarea id="message" placeholder="Send me a message and I'll reply as soon as possible" name="message" value={ formvalue.message} onChange={ handlevalidation}   />
                        <span className="text-danger">{ formerror.message}  </span>
                    </div>
                </div>
    
                <div>
                    <div className="divide">
                    <span id="check">
                    <input type="checkbox" id="check" /> 
                    </span>
                    <label className="check" type="text">You agree to providing your data to Muftiat Bakare Abdullahi who may contact you</label>
                    </div>
                    <div>
                        <button id="btn__submit" >Send message</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}
    
export default Contact