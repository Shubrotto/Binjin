import React from "react";
import "./testimonials.css";
import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";
import AVATAR3 from "../../assets/avatar3.jpg";
import AVATAR4 from "../../assets/avatar4.jpg";
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const data = [
  {
    avatar: AVATAR1,
    name: "Tina Snow",
    // review: ''
  },

  {
    avatar: AVATAR2,
    name: "Kwame Despite",
    // review: ''
  },

  {
    avatar: AVATAR3,
    name: "Snatta Wale",
    // review: ''
  },

  {
    avatar: AVATAR4,
    name: "Nana Ama McBrown",
    // review: ''
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name /* review*/ }, index) => {
          return (
            <SwiperSlide className="testimonial" key={index}>
              <div className="client__avatar">
                <img src={avatar} alt="Avatar one" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                labore rerum itaque quam, officiis vitae odit distinctio odio
                veniam enim dolor maiores, magnam sapiente! Non autem eum
                explicabo in voluptas?
              </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
