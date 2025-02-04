import React from "react";
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "./swiper.css";
import { Slide } from "react-awesome-reveal";
import { IoMdArrowForward } from "react-icons/io";
import {motion} from "framer-motion"

//
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sophia Martinez",
      role: "Language Tutor",
      text: "SayEasy transformed my teaching experience, helping students achieve fluency faster than ever.",
    },
    {
      name: "James Carter",
      role: "Travel Blogger",
      text: "Learning multiple languages has made my travels more enriching and authentic thanks to SayEasy.",
    },
    {
      name: "Ava Wilson",
      role: "Entrepreneur",
      text: "SayEasy helped me connect with international clients more effectively by mastering key business languages.",
    },
    {
      name: "Liam Nguyen",
      role: "Software Engineer",
      text: "The flexibility of SayEasy allowed me to learn Japanese while managing my busy work schedule.",
    },
    {
      name: "Emma Patel",
      role: "College Student",
      text: "As a student, I loved the engaging lessons that made learning French both easy and fun!",
    },
    {
      name: "Noah Smith",
      role: "Photographer",
      text: "Thanks to SayEasy, I can now comfortably interact with locals during my international photography projects.",
    },
    {
      name: "Isabella Brown",
      role: "Translator",
      text: "SayEasy enhanced my language skills, enabling me to deliver accurate and nuanced translations for clients.",
    },
    {
      name: "Ethan Johnson",
      role: "Digital Nomad",
      text: "Being a global traveler, SayEasy has been my go-to for learning practical, conversational languages.",
    },
    {
      name: "Mia Gonzalez",
      role: "Parent",
      text: "SayEasy made it possible for our family to learn Spanish together in a fun, interactive way.",
    },
  ];

  return (
    <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-8 font-figtree">
      {/* Header */}
      <div className="mb-8 text-left w-full sm:w-1/2 md:w-7/12 lg:w-8/12 mx-auto lg:pr-16">
        <Slide direction="up">
          <p className="text-lg capitalize font-figtree font-normal text-gray-500 mb-3 md:mb-2">
            testimonial
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-snug ">
            What Our Students Have To Say
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
            Discover inspiring testimonials from our students, sharing their
            success
            <br /> stories and language-learning journeys with SayEasy.
          </p>
          <button className="flex justify-center items-center gap-2 mt-4 bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg shadow">
            <span>View All</span> <motion.span initial={{x:-10}} animate={{x:0}} transition={{ type: 'spring', duration:4, repeat: Infinity, repeatType: "loop",ease: "easeInOut",   }}><IoMdArrowForward className="text-xl"/></motion.span>
          </button>
        </Slide>
      </div>

      {/* Testimonial Cards */}

      <div className="swiper-2 w-full sm:w-1/2 md:w-5/12 lg:w-4/12 ">
        <Slide direction="down">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            loop={true}
            modules={[EffectCards, Autoplay]}
            className="mySwiper"
            autoplay={{
              delay: 3000, // Time between slide changes (in milliseconds)
              disableOnInteraction: false, // Keeps autoplay running after user interaction
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                {" "}
                <TestimonialCard {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Slide>
      </div>
    </div>
  );
};

export default TestimonialsSection;
