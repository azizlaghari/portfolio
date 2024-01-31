import React from 'react'
import logo1 from '../assets/images/logo-1-color.png'
import logo2 from '../assets/images/logo-2-color.png'
import logo3 from '../assets/images/logo-3-color.png'
import logo4 from '../assets/images/logo-4-color.png'
import logo5 from '../assets/images/logo-5-color.png'
import logo6 from '../assets/images/logo-6-color.png'

const Clients = () => {
  return (
    <div>
      <section className='clients'>
        <h3 className='h3 clients-title'>Clients</h3>

        <ul className='clients-list has-scrollbar'>
          <li className='clients-item'>
            <a href='#'>
              <img src={logo1} alt='client logo' />
            </a>
          </li>

          <li className='clients-item'>
            <a href='#'>
              <img src={logo2} alt='client logo' />
            </a>
          </li>

          <li className='clients-item'>
            <a href='#'>
              <img src={logo3} alt='client logo' />
            </a>
          </li>

          <li className='clients-item'>
            <a href='#'>
              <img src={logo4} alt='client logo' />
            </a>
          </li>

          <li className='clients-item'>
            <a href='#'>
              <img src={logo5} alt='client logo' />
            </a>
          </li>

          <li className='clients-item'>
            <a href='#'>
              <img src={logo6} alt='client logo' />
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Clients
