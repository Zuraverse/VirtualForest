import React from 'react'
import './faq.css';
import Faq1 from './Faq1';
import Faq2 from './Faq2';


const Faq = () => {

  return (
    <div>
      <section className="faqs-container py-5 pb-8 bg-[#DEF7E3] md:h-[90vh]">
        <div className="faqs">
          <h1 className="bigHeading pt-5 pl-5 pb-3 font-semibold xl:text-4xl lg:text-3xl md:text-3xl text-2xl text-white lg:leading-[2.5rem] 2xl:leading-[3.7rem]">
            <span className="text-[#3D4917]">
              {" "}
              Frequently Asked Questions{" "}
            </span>
          </h1>

          <div className="accordion">
            <div className='flex lg:flex-row flex-col'>
              <div className='lg:p-5 lg:w-1/2 w-full'>
                <Faq1 />
              </div>
              <div className='lg:p-5 lg:w-1/2 w-full'>
                <Faq2 />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Faq