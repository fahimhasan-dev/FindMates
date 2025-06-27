// TestimonialSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Fade } from "react-awesome-reveal";

const testimonials = [
  {
    name: "Awlad Hossin",
    title: "Senior Product Designer",
    message:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    image: "https://i.ibb.co/HDtWqBSd/360-F-431647519-usrb-Q8-Z983h-TYe8zg-A7t1-XVc5f-Etqcpa.jpg",
  },
  {
    name: "Rasel Ahamed",
    title: "CTO",
    message:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    image: "https://i.ibb.co/pv8JvPHX/imranur-rahman-0.jpg",
  },
  {
    name: "Nasir Uddin",
    title: "CEO",
    message:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    image: "https://i.ibb.co/5hY8SsDy/professional-profile-pictures-2880-x-1920-7jvygpai7v9zkg2j.jpg",
  },
  {
    name: "Lila Tabassum",
    title: "CEO",
    message:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    image: "https://i.ibb.co/CpxtbySj/1630109696144.jpg",
  },
];

const TestimonialSlider = () => {
  
  return (
    <div className="w-full  py-16 mx-auto overflow-hidden">
      <Fade duration={300} direction="up" triggerOnce>
      <h1 className=" text-center mb-6 mt-25 font-semibold text-2xl md:text-5xl text-blue-400">What our customers are sayings</h1></Fade>
      <p className="text-sm text-center mb-20 max-w-[600px] mx-auto text-gray-500">Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
      <div className="max-w-5xl mx-auto px-4 ">
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#213049] rounded-xl shadow-md p-6  h-full ">
                <div><img src="https://i.ibb.co/35g0cqhb/review-Quote.png" alt="" /></div>
                <p className=" text-sm border-dashed border-b-2 text-gray-300 pb-3 ">{item.message}</p>
                <div className="flex items-center justify-center mt-4 gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="text-left">
                    <h4 className="text-md font-bold text-gray-400">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-300">{item.title}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSlider;
