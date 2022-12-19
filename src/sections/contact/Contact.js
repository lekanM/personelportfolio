import React from 'react'
import ContactForm from '../../components/ContactForm'
import ContactPersonnalDetail from '../../components/ContactPersonnalDetail'

const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <h2>Contact me</h2>
        <h1>Connect with me with <br/>condidence</h1>
        <section className='form-section'>
        <ContactPersonnalDetail/>
        <ContactForm/>
        </section>
       
    </div>
  )
}

export default Contact