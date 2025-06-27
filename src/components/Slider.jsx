import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  const slides = [
    {
      src: "https://i.ibb.co/fGdPrsb8/colleagues-talking-learning-during-study-session.jpg",
      title: "Find your place, find your people",
    },
    {
      src: "https://i.ibb.co/XHB0Zv6/Black-and-Blue-Aesthetic-Summer-Vibes-Photo-Collage-Facebook-Cover.png",
      title: "Find first and perfect roommate.",
    },
    {
      src: "https://i.ibb.co/rDTGNKD/at-house-tours-stock-archive-d905d080bb903beaccefecce61980aa4bcab2a5a.jpg",
      title: "Find the perfect roommate today",
    },
  ];

  return (
    <section className="w-full mt-20">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        className="w-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full">
              <img
                src={slide.src}
                alt={`Slide ${idx + 1}`}
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[520px] object-cover brightness-75 dark:brightness-50 transition duration-500"
              />
              <div className="absolute bottom-4 sm:bottom-10 left-4 sm:left-8 bg-white/70 dark:bg-black/60 backdrop-blur-md text-black dark:text-white p-3 sm:p-5 rounded-xl max-w-[90%] sm:max-w-md md:max-w-lg shadow-lg transition-all duration-300">
                <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
                  {slide.title}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
