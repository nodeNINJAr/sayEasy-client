import React from "react";
import PropTypes from "prop-types";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const CategorySlider = (props) => {
  // 
  const navigate = useNavigate();
  // 
  const handleCategory =(cate)=>{
       navigate(cate)
  }
  //
  const slides = [
    {
      language: "english",
      teachers: 5003,
      flag: "https://flagcdn.com/w320/gb.png",
    },
    {
      language: "japanese",
      teachers: 988,
      flag: "https://flagcdn.com/w320/jp.png",
    },
    {
      language: "spanish",
      teachers: 2595,
      flag: "https://flagcdn.com/w320/es.png",
    },
    {
      language: "chinese",
      teachers: 988,
      flag: "https://flagcdn.com/w320/cn.png",
    },
    {
      language: "french",
      teachers: 1064,
      flag: "https://flagcdn.com/w320/fr.png",
    },
    {
      language: "italian",
      teachers: 783,
      flag: "https://flagcdn.com/w320/it.png",
    },
    {
      language: "german",
      teachers: 1200,
      flag: "https://flagcdn.com/w320/de.png",
    },
    {
      language: "korean",
      teachers: 654,
      flag: "https://flagcdn.com/w320/kr.png",
    },
    {
      language: "arabic",
      teachers: 950,
      flag: "https://flagcdn.com/w320/sa.png",
    },
    {
      language: "portuguese",
      teachers: 700,
      flag: "https://flagcdn.com/w320/pt.png",
    },
  ];

  return (
    <div className="swiper-two">
      <Swiper
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        breakpoints={{
          593: { slidesPerView: 2, spaceBetween: 20 },
          980: { slidesPerView: 3, spaceBetween: 40 },
          1190: { slidesPerView: 4, spaceBetween: 50 },
          1293: { slidesPerView: 5, spaceBetween: 50 },
        }}
        modules={[Navigation]}
       
      >
        {slides?.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div onClick={()=>handleCategory(slide?.language)} className="flex overflow-hidden rounded-lg select-none cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-500 transition-all ease-in-out duration-300">
              <div className="flex items-center justify-start gap-2 px-4 sm:w-[100px]">
                <img
                  className="h-10 w-full rounded-lg mx-auto object-cover"
                  src={slide?.flag}
                  alt="flag"
                />
              </div>
              <div className="p-1">
                <p className="text-lg font-semibold dark:text-white text-[#656565] font-figtree capitalize">
                  {slide?.language}
                </p>
                <p className="text-[#a9a9a9] text-sm capitalize font-fira">
                  {slide?.teachers} teachers
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

CategorySlider.propTypes = {};

export default CategorySlider;
