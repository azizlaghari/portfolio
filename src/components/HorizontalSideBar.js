import React, { useState } from 'react'
import avatar from '../assets/images/avatar-1.png'
import { HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi'
import { MdOutlineSmartphone } from 'react-icons/md'
import { SlCalender } from 'react-icons/sl'
import { BiChevronDown } from 'react-icons/bi'
import { BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs'



const HorizontalSideBar = () => {
    const [isContentVisible, setIsContentVisible] = useState(false);

    const toggleContent = () => {
        setIsContentVisible(!isContentVisible);
    };
    return (
        <div>
            <aside className='sidebar HorizontalSideBar' data-sidebar>
                <div className='sidebar-info'>
                    <figure className='avatar-box'>
                        <img src={avatar} alt='Richard hanrick' />
                    </figure>

                    <div className='info-content'>
                        <h1 className='name' title='Richard hanrick'>Richard hanrick</h1>
                        <p className='title'>Web developer</p>
                    </div>
                    <button className="info_more-btn" onClick={toggleContent} data-sidebar-btn>
                        <span className='textBTN'>Show Contacts</span>
                        <span className='iconBTN'>
                            <BiChevronDown />
                        </span>
                    </button>

                </div>
                {isContentVisible && (
                    < div className='sidebar-info_more'>
                        <div className='separator' style={{ border: '.5px solid var(--borderColor)', margin: '1rem 0' }}></div>

                        <ul className='contacts-list'>
                            <div>
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
                            </div>
                            <div>

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
                                        <HiOutlineLocationMarker />
                                    </div>
                                    <div className='contact-info'>
                                        <p className='contact-title'>Location</p>
                                        <address>Sacramento, California, USA</address>
                                    </div>
                                </li>
                            </div>
                        </ul>

                        <div className='separator' style={{ border: '.5px solid var(--borderColor)', margin: '1rem 0' }}></div>

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
                )}

            </aside >
        </div >
    )
}

export default HorizontalSideBar
