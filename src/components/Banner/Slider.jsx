
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Slide from './Slide';
const Slider = () => {
  return (
    <div className="swiper-one">
      <Swiper
        cssMode={true}
        loop={true}
        navigation={true}
        pagination={{clickable:true}}
        spaceBetween={30}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mx-auto"
        style={{
          '--swiper-pagination-color': '#9A59C9',
          '--swiper-navigation-color': '#9A59C9',
        }}
      >
        <SwiperSlide>
           <Slide title={'SayEasy: Hello Fluency!'} subTitle={'Master new languages effortlessly! SayEasy combines expert tutors, interactive lessons, and real-world practice to help you connect globally and achieve fluency with ease.'} img={'https://i.ibb.co.com/VLzMYXW/rb-2147867764-removebg-preview-2-1.png'} btnText={'Explore Our Tutors'} link={'/tutors'}/>
        </SwiperSlide>
        <SwiperSlide>
          <Slide title={'Community of Learners'} subTitle={'Join a vibrant community where learners from around the world enhance their language skills and share experiences daily for faster, better learning.'} img={'https://i.ibb.co.com/FbMvSf8/electronic-queuing-flat-style-il-removebg-preview-2.png'} btnText={'Explore Our community'} link={'/community'}/>
        </SwiperSlide>
        <SwiperSlide>
           <Slide title={'Languages You’ll Love'} subTitle={'SayEasy offers over 50 languages, including Spanish and Japanese, allowing you to explore and learn languages you will love.'} img={'https://i.ibb.co.com/7KbHS8y/little-schoolboy-pointing-countr-removebg-preview-1-1.png'} link={'/tutors'}/>
        </SwiperSlide>
        <SwiperSlide>
            <Slide title={'Become a Tutor with SayEasy'} subTitle={'Share your expertise and guide others toward fluency with SayEasy, empowering learners to master languages while enhancing your teaching skills and making a global impact.'} img={'https://i.ibb.co.com/rMVxJC8/video-conferece-02-removebg-preview-2.png'} btnText={'Become a Tutors'} link={'/add-tutorial'}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
