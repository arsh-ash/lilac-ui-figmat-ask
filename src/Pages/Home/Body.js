import React from "react";
// import Carousel from "react-material-ui-carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Classifieds from "../../components/Classifieds";
import Recommended from "./Recommended";
import HotSale from "./HotSale";
import Explore from "./Explore";
import FlashSale from "./FlashSale";
import I1 from "../../assets/p1.png";
import I2 from "../../assets/p2.png";
import I3 from "../../assets/p3.png";
import I4 from "../../assets/p4.png";
import HeroSlides from "./HeroSlides";
import BestDeals from "./BestDeals";
import RecentlyViewed from "./RecentlyViewed";
import NewsLetter from "./NewsLetter";
// var items = [
//   {
//     name: "Random Name #1",
//     description: "Probably the most random thing you have ever seen!",
//   },
//   {
//     name: "Random Name #2",
//     description: "Hello World!",
//   },
// ];
const bannerImages = [
  {
    id: 1,
    image: I1,
  },
  {
    id: 2,
    image: I2,
  },
  {
    id: 3,
    image: I3,
  },
  {
    id: 4,
    image: I4,
  },
];
const Body = () => {
  return (
    // <Carousel>
    //   {items.map((item, i) => (
    //     <>
    //       <h1>{item.name}</h1>
    //       <h2>{item.description}</h2>
    //     </>
    //   ))}
    // </Carousel>
    <>
      <Swiper
        slidesPerView={1.5}
        loop={true}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {bannerImages.map((item) => (
          <SwiperSlide>
            <HeroSlides item={item} />
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
        {" "}
        <HeroSlides />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <HeroSlides />
      </SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
      <BestDeals />
      <Classifieds />
      <Recommended />
      <FlashSale />
      <HotSale />
      <Explore />
      <RecentlyViewed />
      <NewsLetter />
    </>
  );
};

export default Body;
