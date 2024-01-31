import React from 'react'
import Layout from '../layout/Layout'
import blog1 from '../assets/images/blog-1.png'
import blog2 from '../assets/images/blog-2.webp'
import blog3 from '../assets/images/blog-3.webp'
import blog4 from '../assets/images/blog-4.webp'
import blog5 from '../assets/images/blog-5.webp'
import blog6 from '../assets/images/blog-6.webp'
// import moment from 'moment/moment'

const Blog = () => {
  const blogData = [
    {
      thumbnail: blog1,
      category: 'web development',
      date: new Date('Feb 23, 2022'),
      title: 'Rethinking Frontend Development',
      descp: 'A philosophic perspective on modern web development',
    },
    {
      thumbnail: blog2,
      category: 'web development',
      date: new Date('Feb 23, 2022'),
      title: 'Building OTP and Password Inputs with Validation in React',
      descp:
        'Learn the Right Way to Build Production-Ready OTP and Password Input Fields with Validation.',
    },
    {
      thumbnail: blog3,
      category: 'MERN development',
      date: new Date('Feb 23, 2022'),
      title: 'Mern Stack RoadMap',
      descp: 'The MERN stack is a popular technology stack for building web applications',
    },
    {
      thumbnail: blog4,
      category: 'Branding',
      date: new Date('Fab 22, 2022'),
      title: 'Crafting Effective Branding and Marketing Strategies',
      descp:
        'In the ever-changing business realm, where competition is intense and consumer attention is fleeting',
    },
    {
      thumbnail: blog5,
      category: 'Branding',
      date: new Date('Feb 23, 2022'),
      title:
        '10 Proven Approaches for Creating Impact and Engagement to Achieve Authentically Powerful Branding',
      descp:
        'The truth is that I think funny. I see the bright side and often laugh at the world and myself. I just didn’t write that way',
    },
    {
      thumbnail: blog6,
      category: 'Self development',
      date: new Date('Feb 23, 2022'),
      title: 'How I Break the Ice During a Conversation',
      descp:
        'Have you ever driven along the highway and saw the large yellow arches in the distance?',
    },
  ]

  return (
    <Layout>
      <div>
        <article className='blog' data-page='blog'>
          <header>
            <h2 className='h2 article-title'>Blog</h2>
          </header>

          <section className='blog-items'>
            <ul className='blog-posts-list'>
              {blogData?.map((item, index) => (
                <li key={index} className='blog-post-item'>
                  <a href='#'>
                    <figure className='blog-banner-box'>
                      <img src={item.thumbnail} alt={item.title} loading='lazy' />
                    </figure>
                    <div className='blog-content'>
                      <div className='blog-meta'>
                        <p className='blog-category'>
                          {item.category.charAt(0).toUpperCase() +
                            item.category.slice(1).toLowerCase()}
                        </p>
                        <span className='dot'></span>
                        {/* <time>{moment(item.date).format('YYYY-MM-DD')}</time> */}
                      </div>
                      <h3 className='h3 blog-item-title'>{item.title}</h3>
                      <p className='blog-text'>{item.descp}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </div>
    </Layout>
  )
}

export default Blog
