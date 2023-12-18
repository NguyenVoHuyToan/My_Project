

// import React from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import './CarouseItem.css';
// // import required modules
// import { Navigation } from 'swiper/modules';
// import { Image } from 'antd';

// export default function CarouselItemHome(props) {
//   const dataBase = props.data;
//   return (
//     <>
      // <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      //   {dataBase.map((item, index) => {
      //     return (
      //       <SwiperSlide key={index}>
      //         <Image src={item.images[0]} alt="" preview={false} width="100%" ></Image>
      //       </SwiperSlide>
      //     );
      //   })}
      // </Swiper>
//     </>
//   );
// }
import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Image } from 'antd';

export default function CarouselItemHome(props) {
  const dataBase = props.data;
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {dataBase.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Image src={item.images[0]} alt="" preview={false} width="100%" ></Image>
            </SwiperSlide>
          );
        })}
      </Swiper>
        <div className="autoplay-progress" slot="container-end" style={{display:"none"}}>
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
