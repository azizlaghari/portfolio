import React from 'react'
import avatar from '../assets/images/avatar-1.png'
import { HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi'
import { MdOutlineSmartphone } from 'react-icons/md'
import { SlCalender } from 'react-icons/sl'
import { BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs'

const SideBar = () => {
  return (

      <aside className='sidebar' data-sidebar style={{width: '300px', position: 'fixed'}}>
        <div className='sidebar-info'>
          <figure className='avatar-box'>
            <img src={avatar} alt='Richard hanrick' style={{ width: '80%' }} />
          </figure>

          <div className='info-content'>
            <h1 className='name' title='Richard hanrick'>Richard hanrick</h1>
            <p className='title'>Web developer</p>
          </div>

          {/* <button className='info_more-btn' data-sidebar-btn>
                        <span>Show Contacts</span>

                        <ion-icon name='chevron-down'></ion-icon>
                    </button> */}
        </div>

        <div className='sidebar-info_more'>
          <div className='separator' style={{border: '.5px solid var(--borderColor)', margin: '1rem 0'}}></div>

          <ul className='contacts-list'>
            <li className='contact-item'>
              <div className='icon-box'>
                <HiOutlineMail />
              </div>

              <div className='contact-info'>
                <p className='contact-title'>Email</p>

                <a href='mailto:richard@example.com' className='contact-link'>
                  richard@example.com
                </a>
              </div>
            </li>

            <li className='contact-item'>
              <div className='icon-box'>
                <MdOutlineSmartphone />
              </div>

              <div className='contact-info'>
                <p className='contact-title'>Phone</p>

                <a href='tel:+12133522795' className='contact-link'>
                  +1 (213) 352-2795
                </a>
              </div>
            </li>

            <li className='contact-item'>
              <div className='icon-box'>
                <SlCalender />
              </div>
              <div className='contact-info'>
                <p className='contact-title'>Birthday</p>
                <time dateTime='1982-06-23'>June 23, 1982</time>
              </div>
            </li>

            <li className='contact-item'>
              <div className='icon-box'>
                <HiOutlineLocationMarker/>
              </div>
              <div className='contact-info'>
                <p className='contact-title'>Location</p>
                <address>Sacramento, California, USA</address>
              </div>
            </li>
          </ul>

          <div className='separator'></div>

          <ul className='social-list'>
            <li className='social-item'>
              <a href='#' className='social-link'>
                <BsFacebook />
              </a>
            </li>

            <li className='social-item'>
              <a href='#' className='social-link'>
                <BsTwitter />
              </a>
            </li>

            <li className='social-item'>
              <a href='#' className='social-link'>
                <BsInstagram />
              </a>
            </li>
          </ul>
        </div>
      </aside>
  )
}

export default SideBar
