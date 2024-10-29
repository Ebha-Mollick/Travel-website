import {Swiper, SwiperSlide} from "swiper/react"; 
import "swiper/css";
import "swiper/css/pagination";
import "./Slider.css";
import { useRef } from "react";
import { Pagination } from "swiper/modules";
import { useContext, useEffect } from "react";
import { MyContext } from "../../context/Appcontext";
import imgage1 from "../../assets/Goa/imgage1.avif";
import image2 from "../../assets/Himachal/image2.avif";
import img3 from "../../assets/Kerala/img3.avif";

const Slider = () => {
const swiperRef = useRef(null);
const {activeSlideIndex, setActiveSlideIndex} = useContext(MyContext);

const handleSlideChange = (swiper)=>{
  const currentIndex = swiper.activeIndex;
  setActiveSlideIndex(currentIndex);
};

  useEffect(()=>{
    if(swiperRef.current){
      const swiper = swiperRef.current.swiper;
      swiper.on("slideChange", ()=> handleSlideChange(swiper))
    }
  })

  const places = [
    {
      name: "Goa",
      img: imgage1,
    },
    {
      name: "Himachal",
      img: image2,
    },
    {
      name: "Kerala",
      img: img3,
    },

  ]


  return (
    <div className="mr-1 shadow-xl">

      <Swiper
        slidesPerView={1} 
        keyboards={true}
        spaceBetween={-250}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        ref={swiperRef}
        initialSlide={activeSlideIndex}
        className="pl-[90px] pt-6"
      >
        {
          places.map((item, i)=>(
            <SwiperSlide key={i}>
              <div className="relative">
                <img src={item.img} alt={item.name}  className="object-cover shadow-xl"/>
                {/* <div>sample text......</div> */}
              </div>

            </SwiperSlide>
          ))
        }
      </Swiper>

    </div>
  )
}

export default Slider;