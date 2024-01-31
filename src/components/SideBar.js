import React from 'react'
import avatar from '../assets/images/profilephoto.webp'
import { HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi'
// import { MdOutlineSmartphone } from 'react-icons/md'
// import { SlCalender } from 'react-icons/sl'
// import { BsInstagram } from 'react-icons/bs'
import { AiFillBehanceCircle } from 'react-icons/ai'
import { SiUpwork } from 'react-icons/si'

const SideBar = () => {
  return (
    <aside className='sidebar' data-sidebar style={{ width: '300px', position: 'fixed' }}>
      <div className='sidebar-info'>
        <figure className='avatar-box'>
          <img src={avatar} alt='Richard hanrick' style={{ width: '60%', borderRadius: '20%' }} />
        </figure>

        <div className='info-content'>
          <h1 className='name' title='Richard hanrick'>
            Shahir Aslam
          </h1>
          <p className='title' style={{ textAlign: 'center' }}>
            Senior Web developer & Graphi Designer Enthusiast
          </p>
        </div>

        {/* <button className='info_more-btn' data-sidebar-btn>
                        <span>Show Contacts</span>

                        <ion-icon name='chevron-down'></ion-icon>
                    </button> */}
      </div>

      <div className='sidebar-info_more'>
        <div
          className='separator'
          style={{ border: '.5px solid var(--borderColor)', margin: '1rem 0' }}
        ></div>

        <ul className='contacts-list'>
          <li className='contact-item'>
            <div className='icon-box'>
              <HiOutlineMail />
            </div>

            <div className='contact-info'>
              <p className='contact-title'>Email</p>

              <a href='mailto:shahiraslam121@gmail.com' className='contact-link'>
                shahiraslam121@gmail.com
              </a>
            </div>
          </li>

          {/* <li className='contact-item'>
              <div className='icon-box'>
                <MdOutlineSmartphone />
              </div>

              <div className='contact-info'>
                <p className='contact-title'>Phone</p>

                <a href='tel:+12133522795' className='contact-link'>
                  +1 (213) 352-2795
                </a>
              </div>
            </li> */}
          {/* 
            <li className='contact-item'>
              <div className='icon-box'>
                <SlCalender />
              </div>
              <div className='contact-info'>
                <p className='contact-title'>Birthday</p>
                <time dateTime='1982-06-23'>June 23, 1982</time>
              </div>
            </li> */}

          <li className='contact-item'>
            <div className='icon-box'>
              <HiOutlineLocationMarker />
            </div>
            <div className='contact-info'>
              <p className='contact-title'>Location</p>
              <address>Sugar Land, USA</address>
            </div>
          </li>
        </ul>

        <div className='separator'></div>

        <ul className='social-list'>
          <li className='social-item'>
            <a href='https://www.behance.net/shahiraslaam' className='social-link'>
              <AiFillBehanceCircle />
            </a>
          </li>

          <li className='social-item'>
            <a
              href='https://www.upwork.com/freelancers/~01ffa05c41e7be982f'
              className='social-link'
            >
              <SiUpwork />
            </a>
          </li>

          {/* <li className='social-item'>
            <a href='#' className='social-link'>
              <BsInstagram />
            </a>
          </li> */}
        </ul>
      </div>
    </aside>
  )
}

export default SideBar
