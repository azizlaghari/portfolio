import React from 'react'
import Layout from '../layout/Layout'
import Service from '../components/Service'
import Testimonials from '../components/Testimonials'
import Clients from '../components/Clients'

const About = () => {
    return (
        <Layout>
            <div >
                <article className='about  active' data-page='about'>
                    <header>
                        <h2 className='h2 article-title'>About me</h2>
                    </header>

                    <section className='about-text'>
                        <p>
                            I&apos;m Creative Director and UI/UX Designer from Sydney, Australia, working in web
                            development and print media. I enjoy turning complex problems into simple, beautiful and
                            intuitive designs.
                        </p>

                        <p>
                            My job is to build your website so that it is functional and user-friendly but at the
                            same time attractive. Moreover, I add personal touch to your product and make sure that
                            is eye-catching and easy to use. My aim is to bring across your message and identity in
                            the most creative way. I created web design for many famous brand companies.
                        </p>
                    </section>
                </article>
                <div className='services'>
                    <Service />
                </div>
                <div className='Testimonials'>
                    <Testimonials />
                </div>
                <div className='Clients'>
                    <Clients />
                </div>
            </div>
        </Layout>
    )
}

export default About