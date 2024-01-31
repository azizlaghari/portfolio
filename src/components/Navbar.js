import React, { useEffect } from 'react'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleTheme } from '../redux'

const Navbar = () => {
  const dispatch = useDispatch()
  const theme = useSelector((state) => state.theme.theme)

  // const [activeTab, setActiveTab] = useState('About')
  useEffect(() => {
    localStorage.setItem('activeTab', 'About')
  }, [])

  useEffect(() => {
    console.log('location', window.location.pathname)
  }, [window.location])

  return (
    <div>
      <nav className='navbar'>
        <ul className='navbar-list'>
          <li className='navbar-item'>
            <button
              style={{ cursor: 'pointer' }}
              className={`tablinks ${
                window.location.pathname == '/about' ? 'active' : 'inactive'
              } navbar-link`}
              data-nav-link
            >
              <Link to='/about'>About</Link>
            </button>
          </li>

          <li className='navbar-item'>
            <button
              style={{ cursor: 'pointer' }}
              className={`tablinks ${
                window.location.pathname == '/resume' ? 'active' : 'inactive'
              } navbar-link`}
              data-nav-link
            >
              <Link to='/resume'>Resume</Link>
            </button>
          </li>

          <li className='navbar-item'>
            <button
              style={{ cursor: 'pointer' }}
              className={`tablinks ${
                window.location.pathname == '/portfolio' ? 'active' : 'inactive'
              } navbar-link`}
              data-nav-link
            >
              <Link to='/portfolio'>Portfolio</Link>
            </button>
          </li>

          <li className='navbar-item'>
            <button
              style={{ cursor: 'pointer' }}
              className={`tablinks ${
                window.location.pathname == '/blog' ? 'active' : 'inactive'
              } navbar-link`}
              data-nav-link
            >
              <Link to='/blog'>Blog</Link>
            </button>
          </li>

          <li className='navbar-item'>
            <button
              style={{ cursor: 'pointer' }}
              className={`tablinks ${
                window.location.pathname == '/contact' ? 'active' : 'inactive'
              } navbar-link`}
              data-nav-link
            >
              <Link to='/contact'>Contact</Link>
            </button>
          </li>

          <li>
            <div className='themeBTN'>
              {theme === 'light' ? (
                <span>
                  <MdOutlineDarkMode
                    onClick={() => dispatch(toggleTheme())}
                    style={{ color: 'var(--textColor)', cursor: 'pointer', fontSize: '24px' }}
                  />
                </span>
              ) : (
                <span>
                  <MdOutlineLightMode
                    className='themeIcon'
                    onClick={() => dispatch(toggleTheme())}
                    style={{ color: 'var(--textColor)', cursor: 'pointer', fontSize: '24px' }}
                  />
                </span>
              )}
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
