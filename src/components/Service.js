import React from 'react'
import iconDev from '../assets/images/icon-dev.svg'
import iconDesign from '../assets/images/icon-design.svg'
import iconApp from '../assets/images/icon-app.svg'
// import iconPhoto from '../assets/images/icon-photo.svg'
import { TbPhotoStar } from 'react-icons/tb'

import { Col, Row } from 'antd'

const Service = () => {
  return (
    <div>
      <section className='service'>
        <h2 className='service-title'>What i&apos;m doing</h2>
        <ul className='service-list'>
          <Row gutter={[20, 20]}>
            <Col xl={12} lg={12} sm={24} xs={24}>
              <li className='service-item'>
                <div className='service-icon-box'>
                  <img src={iconDesign} alt='design icon' width='40px' />
                </div>

                <div className='service-content-box'>
                  <h4 className='h4 service-item-title'>Web design</h4>

                  <p className='service-item-text'>
                    The most modern and high-quality design made at a professional level.
                  </p>
                </div>
              </li>
            </Col>
            <Col xl={12} lg={12} sm={24} xs={24}>
              <li className='service-item'>
                <div className='service-icon-box' style={{ width: '40px' }}>
                  <img src={iconDev} alt='Web development icon' />
                </div>

                <div className='service-content-box'>
                  <h4 className='h4 service-item-title'>Web development</h4>

                  <p className='service-item-text'>
                    High-quality development of sites at the professional level.
                  </p>
                </div>
              </li>
            </Col>
            <Col xl={12} lg={12} sm={24} xs={24}>
              <li className='service-item'>
                <div className='service-icon-box'>
                  <img src={iconApp} alt='mobile app icon' width='40' />
                </div>

                <div className='service-content-box'>
                  <h4 className='h4 service-item-title'>Mobile apps</h4>

                  <p className='service-item-text'>
                    Professional development of applications for iOS and Android.
                  </p>
                </div>
              </li>
            </Col>
            <Col xl={12} lg={12} md={24} sm={24} xs={24}>
              <li className='service-item'>
                <div className='service-icon-box'>
                  <TbPhotoStar style={{ fontSize: '30px' }} color='#ceb15a' />

                  {/* <img src={iconPhoto} alt='camera icon' width='40' /> */}
                </div>

                <div className='service-content-box'>
                  <h4 className='h4 service-item-title'>Graphic Design</h4>

                  <p className='service-item-text'>
                    I make high-quality Graphics of any category at any level.
                  </p>
                </div>
              </li>
            </Col>
          </Row>
        </ul>
      </section>
    </div>
  )
}

export default Service
