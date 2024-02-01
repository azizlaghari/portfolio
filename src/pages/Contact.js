import React, { useState } from 'react'
import Layout from '../layout/Layout'
import { BsFillSendFill } from 'react-icons/bs'
import axios from 'axios'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const API_ENDPOINT = 'https://backend.trackkrr.com/contact'
      await axios.post(API_ENDPOINT, formData)
      console.log('Form submitted successfully!')
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <Layout>
      <div>
        <article className='contact' data-page='contact'>
          <header>
            <h2 className='h2 article-title'>Contact</h2>
          </header>

          <section className='mapbox' data-mapbox>
            <figure>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d86789.21025295422!2d67.08980023465134!3d24.853504069347714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1697202096889!5m2!1sen!2s'
                width='400'
                height='300'
                allowfullscreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </figure>
          </section>

          <section className='contact-form'>
            <h3 className='h3 form-title'>Contact Form</h3>

            <form onSubmit={handleSubmit} className='form' data-form>
              <div className='input-wrapper'>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  className='form-input'
                  placeholder='Full name'
                  required
                  data-form-input
                  onChange={handleChange}
                />

                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  className='form-input'
                  placeholder='Email address'
                  required
                  data-form-input
                  onChange={handleChange}
                />
              </div>

              <textarea
                name='message'
                type='message'
                value={formData.message}
                className='form-input'
                placeholder='Your Message'
                required
                data-form-input
                onChange={handleChange}
              ></textarea>

              <button className='form-btn' type='submit' data-form-btn>
                <BsFillSendFill />
                <span>Send Message</span>
              </button>
            </form>
          </section>
        </article>
      </div>
    </Layout>
  )
}

export default Contact
