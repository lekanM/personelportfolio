import React from 'react'

const ContactForm = () => {
  return (
    <div className='form'>
      <section >
        <input placeholder='Name'/>
        <input placeholder='Email'/>
        <textarea placeholder='Your message here'/>
      </section>
    </div>
  )
}

export default ContactForm