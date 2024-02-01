import React, { useState, useEffect } from 'react'
import { Image } from 'antd'
import Layout from '../layout/Layout'
import project1 from '../assets/images/project-1.png'
import project2 from '../assets/images/project-2.png'
import project3 from '../assets/images/project-3.png'
import project4 from '../assets/images/project-4.png'
import project5 from '../assets/images/project-5.png'
import project6 from '../assets/images/project-6.png'
import project7 from '../assets/images/project-7.png'
import project8 from '../assets/images/project-8.jpg'
import project9 from '../assets/images/project-9.png'
import project10 from '../assets/images/project-10.png'
import { AiOutlineEye } from 'react-icons/ai'
import { useParams, useNavigate } from 'react-router-dom'

const Portfolio = () => {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState('All')

  const params = useParams()
  const { id } = params
  console.log('id :', id)

  const portfolioData = [
    {
      id: 'project1',
      image: project1,
      title: 'Mobile and Web Banners',
      category: 'Graphic Design',
    },
    {
      id: 'project2',
      image: project2,
      title: 'Business Cards Desings',
      category: 'Graphic Design',
    },
    {
      id: 'project3',
      image: project3,
      title: 'Marketing Materials',
      category: 'Graphic Design',
    },
    {
      id: 'project4',
      image: project4,
      title: 'Brawlhalla',
      category: 'Applications',
    },
    {
      id: 'project5',
      image: project5,
      title: 'DSM',
      category: 'Web design',
    },
    {
      id: 'project6',
      image: project6,
      title: 'MetaSpark',
      category: 'Web design',
    },
    {
      id: 'project7',
      image: project7,
      title: '99 Logos',
      category: 'Web development',
      link: 'https://logos-cd879.web.app/',
      // link: <a href='https://logos-cd879.web.app/'></a>
    },
    {
      id: 'project8',
      image: project8,
      title: 'Task Manager',
      category: 'Applications',
    },
    {
      id: 'project9',
      image: project9,
      title: 'Competitor Yeti',
      category: 'Web development',
      link: 'https://competitor-yeti-1.web.app/',
    },
    {
      id: 'project10',
      image: project10,
      title: 'Fitness Trainer',
      category: 'Web development',
      link: 'https://fitness-trainer-1.web.app/',
    },
  ]

  useEffect(() => {
    const localPath = window.location.pathname
    if (localPath.includes('all')) {
      setSelectedCategory('All')
    } else if (localPath.includes('web-design')) {
      setSelectedCategory('Web design')
    } else if (localPath.includes('web-development')) {
      setSelectedCategory('Web development')
    } else if (localPath.includes('graphic-design')) {
      setSelectedCategory('Graphic Design')
    } else if (localPath.includes('applications')) {
      setSelectedCategory('Applications')
    }
  }, [])

  const handleFilterChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  const filteredProjects =
    selectedCategory === 'All'
      ? portfolioData
      : portfolioData.filter((project) => project.category === selectedCategory)

  return (
    <Layout>
      <div>
        <article className='portfolio' data-page='portfolio'>
          <header>
            <h2 className='h2 article-title'>Portfolio</h2>
          </header>

          <section className='projects'>
            <ul className='filter-list'>
              <li className='filter-item'>
                <button
                  className={selectedCategory === 'All' ? 'active' : ''}
                  data-filter-btn
                  // onClick={() => handleFilterClick('All')}
                  onClick={() => {
                    navigate('/portfolio/all')
                    setSelectedCategory('All')
                  }}
                >
                  All
                </button>
              </li>
              <li className='filter-item'>
                <button
                  className={selectedCategory === 'Web design' ? 'active' : ''}
                  data-filter-btn
                  // onClick={() => handleFilterClick('Web design')}
                  onClick={() => {
                    navigate('/portfolio/web-design')
                    setSelectedCategory('Web design')
                  }}
                >
                  Web design
                </button>
              </li>
              <li className='filter-item'>
                <button
                  className={selectedCategory === 'Applications' ? 'active' : ''}
                  data-filter-btn
                  onClick={() => {
                    navigate('/portfolio/applications')
                    setSelectedCategory('Applications')
                  }}
                >
                  Applications
                </button>
              </li>
              <li className='filter-item'>
                <button
                  className={selectedCategory === 'Web development' ? 'active' : ''}
                  data-filter-btn
                  onClick={() => {
                    navigate('/portfolio/web-development')
                    setSelectedCategory('Web development')
                  }}
                >
                  Web development
                </button>
              </li>
              <li className='filter-item'>
                <button
                  className={selectedCategory === 'Graphic Design' ? 'active' : ''}
                  data-filter-btn
                  onClick={() => {
                    navigate('/portfolio/graphic-design')
                    setSelectedCategory('Graphic Design')
                  }}
                >
                  Graphic Design
                </button>
              </li>
            </ul>
            <div className='selector'>
              <select value={selectedCategory} onChange={handleFilterChange}>
                <option value='All'>All</option>
                <option value='Web development'>Web development</option>
                <option value='Web design'>Web Design</option>
                <option value='Applications'>Applications</option>
                <option value='Graphic Design'>Graphic Design</option>
              </select>
            </div>

            <div className='filter-select-box'>
              <button className='filter-select' data-select>
                <div className='select-value' data-selecct-value>
                  Select category
                </div>

                <div className='select-icon'>
                  <AiOutlineEye />
                </div>
              </button>
            </div>

            <ul className='project-list'>
              {filteredProjects.map((project, index) => (
                <li
                  key={index} // Use a unique key for each list item
                  className={`project-item active`}
                  data-filter-item
                  data-category={project.category}
                >
                  {/* <a href='#'> */}
                  <span className='project-img'>
                    {/* <div className='project-item-icon-box'>
                                                <AiOutlineEye />
                                            </div> */}
                    <Image
                      width={'100%'}
                      height={'300px'}
                      src={project.image}
                      alt={project.title}
                      loading='lazy'
                      style={{ borderRadius: '20px', objectFit: 'fill' }}
                    />
                  </span>
                  <h3 className='project-title'>{project.title}</h3>
                  <p className='project-category'>{project.category}</p>
                  <p className='project-link'>
                    <a target='_blank' rel='noreferrer' href={project?.link}>
                      {project.link}
                    </a>
                  </p>
                  {/* </a> */}
                </li>
              ))}
            </ul>
          </section>
        </article>
      </div>
    </Layout>
  )
}

export default Portfolio
