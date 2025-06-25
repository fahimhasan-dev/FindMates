import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  const slides = [
    {
      src: "https://i.ibb.co/ch8XPryh/roommate-finder-Listings-Project.png",
      title: "Find your place, find your people",
    },
    {
      src: "https://i.ibb.co/TMk6D8Kq/potential-roommate.jpg",
      title: "Questions to ask your potential roommate",
    },
    {
      src: "https://i.ibb.co/WNpZ6djc/how-to-find-a-roommate-bpm-blog-banner-640w.webp",
      title: "Find the perfect roommate today",
    },
  ];

  return (
    <section className="w-full h-[300px] sm:h-[400px] md:h-[550px] xl:h-[700px] 2xl:h-[800px] relative">
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
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-full">
              <img
                src={slide.src}
                alt={`Slide ${idx + 1}`}
                className="w-full h-full object-cover brightness-75 dark:brightness-50 transition duration-500"
              />
              <div className="absolute bottom-4 sm:bottom-8 md:bottom-10 left-4 sm:left-6 md:left-10 bg-white/60 dark:bg-black/60 backdrop-blur-md text-black dark:text-white p-3 sm:p-4 md:p-6 rounded-xl max-w-[90%] sm:max-w-md md:max-w-lg shadow-lg transition-all duration-300">
                <h2 className="text-base sm:text-xl md:text-3xl xl:text-4xl font-extrabold tracking-tight leading-snug">
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
