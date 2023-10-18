import React from 'react'
import Layout from '../layout/Layout'
import blog1 from '../assets/images/blog-1.jpg'
import blog2 from '../assets/images/blog-2.jpg'
import blog3 from '../assets/images/blog-3.jpg'
import blog4 from '../assets/images/blog-4.jpg'
import blog5 from '../assets/images/blog-5.jpg'
import blog6 from '../assets/images/blog-6.jpg'
import moment from 'moment/moment'

const Blog = () => {

    const blogData = [
        {
            thumbnail: blog1,
            category: 'design',
            date: new Date('Feb 23, 2022'),
            title: 'Design conferences in 2022',
            descp: 'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.'
        },
        {
            thumbnail: blog2,
            category: 'design',
            date: new Date('Feb 23, 2022'),
            title: 'Best fonts every designer',
            descp: 'Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.'
        },
        {
            thumbnail: blog3,
            category: 'design',
            date: new Date('Feb 23, 2022'),
            title: 'Design digest #80',
            descp: 'Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.'
        },
        {
            thumbnail: blog4,
            category: 'design',
            date: new Date('Fab 22, 2022'),
            title: 'UI interactions of the week',
            descp: 'Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.'
        },
        {
            thumbnail: blog5,
            category: 'design',
            date: new Date('Feb 23, 2022'),
            title: 'The forgotten art of spacing',
            descp: 'Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            thumbnail: blog6,
            category: 'design',
            date: new Date('Feb 23, 2022'),
            title: 'Design digest #79',
            descp: 'Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.'
        }
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
                                                <p className='blog-category'>{item.category.charAt(0).toUpperCase() + item.category.slice(1).toLowerCase()}</p>
                                                <span className='dot'></span>
                                                <time>{moment(item.date).format('YYYY-MM-DD')}</time>
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
