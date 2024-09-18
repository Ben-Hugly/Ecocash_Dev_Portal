import React from 'react'
import TestimonialsCard from './Cards/Testimonials/TestimonialsCard';
import { testimonyData } from '../constants/data';
import { ImQuotesRight } from "react-icons/im";
import style from '../styles';

function Testimonials() {
  return (

    <div className={`${style.testimonialsWrapper}`}>
      <ImQuotesRight color="#EC2125" size={45} />
      <span className={`${style.headings2}`}>Customer Success Stories</span>
      <div className={`${style.testimonialsText}`}>
        See what other companies have built using EcoCash&apos s APIs
      </div>
      <div className={`${style.testimonialsCardWrapper}`}>
        {testimonyData.map((feature, index) => (
          <TestimonialsCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Testimonials