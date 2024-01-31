import React, { useState } from 'react'
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
import { AiOutlineEye } from 'react-icons/ai'

const Portfolio = () => {
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
      title: 'Summary',
      category: 'Web development',
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
      title: 'Arrival',
      category: 'Web development',
    },
  ]

  const [selectedCategory, setSelectedCategory] = useState('All')

  const handleFilterClick = (category) => {
    setSelectedCategory(category)
  }

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
                  onClick={() => handleFilterClick('All')}
                >
                  All
                </button>
              </li>
              <li className='filter-item'>
                <button
                  className={selectedCategory === 'Web design' ? 'active' : ''}
                  data-filter-btn
                  onClick={() => handleFilterClick('Web design')}
                >
                  Web design
                </button>
              </li>
              <li className='filter-item'>
                <button
                  className={selectedCategory === 'Applications' ? 'active' : ''}
                  data-filter-btn
                  onClick={() => handleFilterClick('Applications')}
                >
                  Applications
                </button>
              </li>
              <li className='filter-item'>
                <button
                  className={selectedCategory === 'Web development' ? 'active' : ''}
                  data-filter-btn
                  onClick={() => handleFilterClick('Web development')}
                >
                  Web development
                </button>
              </li>
              <li className='filter-item'>
                <button
                  className={selectedCategory === 'Graphic Design' ? 'active' : ''}
                  data-filter-btn
                  onClick={() => handleFilterClick('Graphic Design')}
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
                      width={'400px'}
                      height={'300px'}
                      src={project.image}
                      alt={project.title}
                      loading='lazy'
                    />
                  </span>
                  <h3 className='project-title'>{project.title}</h3>
                  <p className='project-category'>{project.category}</p>
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
