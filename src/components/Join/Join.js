import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {
    const form=useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_xdsy4n2', 'template_quvy9mb', form.current, 'tvnLdm2JNXUO8nnOI')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className='join' id='join-us'>
        <div className='left-join'>
            <hr/>
            <div>
                <span className='stroke-text'>READY TO</span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>
        <div className='rigth-join'>
            <form ref={form} action='' className='email-container' onSubmit={sendEmail}>
                <input type='email' name='user_email' placeholder='Enter Your Email Address'/>
                <button className='btn btn-join'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join