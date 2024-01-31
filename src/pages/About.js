import React from 'react'
import Layout from '../layout/Layout'
import Service from '../components/Service'
import Testimonials from '../components/Testimonials'
import Clients from '../components/Clients'

const About = () => {
  return (
    <Layout>
      <div>
        <article className='about  active' data-page='about'>
          <header>
            <h2 className='h2 article-title'>About me</h2>
          </header>

          <section className='about-text'>
            <p>
              Greetings! With over 5 years of hands-on experience, I am a versatile professional
              dedicated to transforming concepts into reality. My expertise spans a wide range of
              domains, from software development to graphics and UI/UX design. I bring a perfect
              blend of technical prowess and creative innovation to every project. Let&#39;s
              collaborate to bring your ideas to life and make an impact!
            </p>
            <h2>Why Choose Me:</h2>
            <p>
              Proven track record of delivering pixel-perfect UI/UX designs and seamless frontend
              experiences. Extensive experience working with a variety of frontend frameworks and
              backend technologies. Expertise in e-commerce platforms, content management systems,
              and database management. Strong communication skills and ability to collaborate
              seamlessly in agile methodologies like Scrum and Kanban.
            </p>
            <p>Detail-oriented and committed to delivering high-quality work on time.</p>
            <h2>Let&#39;s Collaborate:</h2>
            <p>
              If you&#39;re looking for a Senior Graphics Design and Frontend Developer who can
              bring your vision to life, let&#39;s connect! I&#39;m ready to contribute my skills
              and expertise to your project, ensuring it stands out in terms of both design and
              functionality.
            </p>
            <p>
              Feel free to reach out, and let&#39;s discuss how we can create something amazing
              together!
            </p>
          </section>
        </article>
        <div className='services'>
          <Service />
        </div>
        <div className='skills'>
          <h2>Skills:</h2>
          <h4>Frontend Development:</h4>
          <p>React, Next.js, Gatsby.js, Angular, Vue.js HTML5, CSS3, SASS/LESS, Tailwind CSS</p>
          <h2>API Integration:</h2>
          <p>RESTful, GraphQL</p>
          <h2>Version Control:</h2>
          <p>Git</p>
          <h2>Testing:</h2>
          <p>Jest, Mocha, Chai</p>
          <h2>Deployment:</h2>
          <p>Heroku, AWS, Netlify</p>
          <h2>Backend Development:</h2>
          <p>Node.js, Express.js, Nest.js, Laravel, Django</p>
          <h2>Content Management Systems (CMS):</h2>
          <p>WordPress, Webflow</p>
          <h2>E-commerce:</h2>
          <p>Shopify</p>
          <h3 className='fontLarge margenTop'>Database:</h3>
          <p>
            MongoDB, MySQL, PostgreSQL, Firebase Database, AWS DynamoDB UI/UX Design and Graphics
            Design:
          </p>
          <h3 className='fontLarge'>UI tools</h3>
          <p>
            Adobe Creative Suite (Photoshop, Illustrator, InDesign) Figma, Adobe XD, and related
            design tools
          </p>
        </div>
        <div className='Testimonials margenTop'>
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
