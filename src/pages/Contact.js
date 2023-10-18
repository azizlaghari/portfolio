import React from 'react'
import Layout from '../layout/Layout'
import { BsFillSendFill } from 'react-icons/bs'

const Contact = () => {
    return (
        <Layout>
            <div >
                <article className="contact" data-page="contact">

                    <header>
                        <h2 className="h2 article-title">Contact</h2>
                    </header>

                    <section className="mapbox" data-mapbox>
                        <figure>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d86789.21025295422!2d67.08980023465134!3d24.853504069347714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1697202096889!5m2!1sen!2s" width="400" height="300" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </figure>
                    </section>

                    <section className="contact-form">

                        <h3 className="h3 form-title">Contact Form</h3>

                        <form action="#" className="form" data-form>

                            <div className="input-wrapper">
                                <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input />

                                <input type="email" name="email" className="form-input" placeholder="Email address" required data-form-input />
                            </div>

                            <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>

                            <button className="form-btn" type="submit" disabled data-form-btn>
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
