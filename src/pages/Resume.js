import React from 'react'
import Layout from '../layout/Layout'
import { FiBookOpen } from 'react-icons/fi'

const Resume = () => {
  return (
    <Layout>
      <div>
        <article className='resume' data-page='resume'>
          <header>
            <h2 className='h2 article-title'>Resume</h2>
          </header>

          <section className='timeline'>
            <div className='title-wrapper'>
              <div className='icon-box'>
                <FiBookOpen />
              </div>

              <h3 className='h3'>Education</h3>
            </div>

            <ol className='timeline-list'>
              <li className='timeline-item'>
                <h3 className='h4 timeline-item-title'>Academy of Art University</h3>
                <h5>Master of Arts (MA), Visual Design</h5>

                <span>2015 - 2017</span>

                <p className='timeline-text'>
                  <ul>
                    <li>
                      Advanced expertise in visual design, honed through a comprehensive master&s
                      program.
                    </li>
                    <li>
                      Developed a deep understanding of design principles and trends, with a focus
                      on translating concepts into visually compelling solutions.
                    </li>
                  </ul>
                </p>
              </li>

              <li className='timeline-item'>
                <h4 className='h4 timeline-item-title'>Academy of Art University</h4>
                <h5>Bachelors of Arts (MA), Visual Design</h5>

                <span>2011 - 2014</span>

                <p className='timeline-text'>
                  <ul>
                    <li>
                      Applied creative thinking and design principles to various projects, fostering
                      a solid base for a career in visual design.
                    </li>
                    <li>
                      Established a strong foundation in visual design, encompassing both
                      theoretical knowledge and practical skills.
                    </li>
                  </ul>
                </p>
              </li>

              {/* <li className='timeline-item'>
                <h4 className='h4 timeline-item-title'>High school of art and design</h4>

                <span>2002 — 2004</span>

                <p className='timeline-text'>
                  Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut
                  fugit, sed consequuntur magni dolores eos.
                </p>
              </li> */}
            </ol>
          </section>

          <section className='timeline'>
            <div className='title-wrapper'>
              <div className='icon-box'>
                <FiBookOpen />
              </div>

              <h3 className='h3'>Experience</h3>
            </div>

            <ol className='timeline-list'>
              <li className='timeline-item'>
                <h4 className='h4 timeline-item-title'>Senior Fullstack Developer: Xceed Media</h4>

                <span>2019 — Present</span>

                <p className='timeline-text'>
                  <ul>
                    <li>
                      Lead and mentor development teams, providing technical guidance and fostering
                      a collaborative environment.
                    </li>
                    <li>
                      Architect, design, and implement scalable and high-performance web
                      applications using a variety of frontend and backend technologies.
                    </li>
                    <li>
                      Drive innovation by staying informed about industry trends, evaluating new
                      tools, and incorporating best practices into development processes.
                    </li>
                    <li>
                      Collaborate with cross-functional teams and stakeholders to understand
                      business requirements and translate them into technical solutions.
                    </li>
                  </ul>
                </p>
              </li>

              <li className='timeline-item'>
                <h4 className='h4 timeline-item-title'>Full Stack Developer: Xceed Media</h4>

                <span>2017 — 2019</span>

                <p className='timeline-text'>
                  <ul>
                    <li>
                      Develop and maintain web applications by proficiently utilizing frontend and
                      backend technologies.
                    </li>
                    <li>
                      Collaborate with team members to analyze, design, and implement features that
                      meet business and user requirements.
                    </li>
                    <li>
                      Troubleshoot and debug issues to ensure the functionality, security, and
                      performance of web applications.
                    </li>
                    <li>
                      Stay current with emerging technologies and frameworks, continuously enhancing
                      skills to adapt to evolving development practices.
                    </li>
                  </ul>
                </p>
              </li>

              <li className='timeline-item'>
                <h4 className='h4 timeline-item-title'>Junior Full Stack Developer: Xceed Media</h4>

                <span>2016 — 2017</span>

                <p className='timeline-text'>
                  <ul>
                    <li>
                      Contribute to the development of web applications through coding, testing, and
                      debugging tasks.
                    </li>
                    <li>
                      Collaborate with team members to understand project requirements and assist in
                      the implementation of features.
                    </li>
                    <li>
                      Demonstrate a strong understanding of web development principles and a
                      willingness to learn and adapt to new technologies.
                    </li>
                    <li>
                      Actively participate in code reviews, providing and receiving constructive
                      feedback to improve code quality and collaboration skills.
                    </li>
                  </ul>
                </p>
              </li>
            </ol>
          </section>

          <section className='skill'>
            <h3 className='h3 skills-title'>My skills</h3>

            <ul className='skills-list content-card'>
              <li className='skills-item'>
                <div className='title-wrapper'>
                  <h5 className='h5'>Full Stack development</h5>
                  <data value='90'>90+</data>
                </div>

                <div className='skill-progress-bg'>
                  <div className='skill-progress-fill' style={{ width: '90%' }}></div>
                </div>
              </li>

              <li className='skills-item'>
                <div className='title-wrapper'>
                  <h5 className='h5'>Wordpress</h5>
                  <data value='85'>85+</data>
                </div>

                <div className='skill-progress-bg'>
                  <div className='skill-progress-fill' style={{ width: '85%' }}></div>
                </div>
              </li>

              <li className='skills-item'>
                <div className='title-wrapper'>
                  <h5 className='h5'>Graphic design</h5>
                  <data value='95'>95+</data>
                </div>

                <div className='skill-progress-bg'>
                  <div className='skill-progress-fill' style={{ width: '95%' }}></div>
                </div>
              </li>

              <li className='skills-item'>
                <div className='title-wrapper'>
                  <h5 className='h5'>Web design</h5>
                  <data value='85'>85+</data>
                </div>

                <div className='skill-progress-bg'>
                  <div className='skill-progress-fill' style={{ width: '85%' }}></div>
                </div>
              </li>

              <li className='skills-item'>
                <div className='title-wrapper'>
                  <h5 className='h5'>Branding</h5>
                  <data value='90'>90+</data>
                </div>

                <div className='skill-progress-bg'>
                  <div className='skill-progress-fill' style={{ width: '90%' }}></div>
                </div>
              </li>
            </ul>
          </section>
        </article>
      </div>
    </Layout>
  )
}

export default Resume
