import React, { useState } from 'react'
import avatar1 from './../assets/images/avatar-1.png'
import avatar2 from './../assets/images/avatar-2.png'
import avatar3 from './../assets/images/avatar-3.png'
import avatar4 from './../assets/images/avatar-4.png'
import quoteIcon from './../assets/images/icon-quote.svg'
import { Modal } from 'antd';


const Testimonials = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const showModal = (data) => {
    setIsModalOpen(true);
    setSelectedTestimonial(data)

  };
  const handleOk = () => {
    setIsModalOpen(false);
    setSelectedTestimonial(null)

  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedTestimonial(null)

  };
  const testimonialsData = [
    {
      avatar: avatar1,
      title: 'Daniel lewis',
      text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.'
    },
    {
      avatar: avatar2,
      title: 'Jessica miller',
      text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.'
    },
    {
      avatar: avatar3,
      title: 'Emily evans',
      text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing    elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.'
    },
    {
      avatar: avatar4,
      title: 'Henry william',
      text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.'
    }
  ]
  return (
    <div>
      <section className='testimonials'>
        <h3 className='h3 testimonials-title'>Testimonials</h3>
        <ul className='testimonials-list has-scrollbar'>
          {testimonialsData?.map((testimonial, index) => (
            <li key={index} className='testimonials-item' onClick={() => showModal(testimonial)}>
              <div className='content-card' data-testimonials-item>
                <figure className='testimonials-avatar-box'>
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.title}
                    style={{ width: '60px' }}
                    data-testimonials-avatar
                  />
                </figure>

                <h4 className='h4 testimonials-item-title' data-testimonials-title>
                  {testimonial.title}
                </h4>

                <div className='testimonials-text' data-testimonials-text>
                  <p className='truncate-text'>{testimonial.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

      </section>
      <Modal className='TESTIMONIAL_MODAL' footer={null} centered title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className='modal-content-card' data-testimonials-item>
          <div className='left'>
            <figure className='modal-avatar-box '>
              <img
                className='avatarBox'
                src={selectedTestimonial?.avatar}
                alt={selectedTestimonial?.title}
                style={{ width: '60px' }}
                data-testimonials-avatar
              />
              <img src={quoteIcon} />
            </figure>
          </div>
          <div className='right'>
            <h4 className='h4 modal-item-title' data-testimonials-title>
              {selectedTestimonial?.title}
            </h4>
            <div className='modal-text' data-testimonials-text>
              <p>{selectedTestimonial?.text}</p>
            </div>
          </div>

        </div>
      </Modal>
    </div>
  )
}

export default Testimonials
