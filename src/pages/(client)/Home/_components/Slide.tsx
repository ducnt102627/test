import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import { Swiper as SwiperType } from "swiper/types";
import { Pagination, Navigation } from 'swiper/modules';
import instance from '@/configs/axios';
import { IGalleries } from '@/interface';
const Slide = () => {
  const swiperRef = useRef<SwiperType>();
  const [galleries, setGalleries] = useState<IGalleries[]>([]);
  const handleGalleries = async () => {
    try {
      const { data } = await instance.get('/galleries');
      console.log(data)
      setGalleries(data);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    handleGalleries()
  }, []);
  // console.log(galleries)
  return (
    <>
      <div className="">
        <div className="bg-[#9C69E2] w-full h-[710px] border-[#9C69E2] rounded-[50px] mt-20 xl:mt-28 py-24 xl:px-[94px]">
          <div className="">
            <h3 className='text-[40px] font-bold text-white leading-[130%] pb-[88px]'>Testimonials</h3>
            <div className="relative w-full">
              {/* 1 */}

              <Swiper
                pagination={{
                  dynamicBullets: true,
                  type: 'fraction',
                }}
                loop={true}
                grabCursor={true}
                modules={[Pagination]}
                className="mySwiper "
                spaceBetween={30}
                slidesPerView={1}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
              >
                {galleries?.map((item: IGalleries) => (
                  <SwiperSlide className='px-8 xl:px-0' key={item?.id} >
                    <div className="bg-white max-w-[932px] h-[330px] border border-[#9C69E2] rounded-[20px] flex  pt-[60px] pb-[50px] px-[100px]">
                      <div className="w-[130px] h-[91px] ">
                        <img className='w-full h-full border-white rounded-[100%] object-cover overflow-hidden'
                          src={item?.imageUrl} alt="" />
                      </div>
                      <div className="flex flex-1 flex-col px-[43px]">
                        <h3 className="text-[#212353] text-[18px] font-bold leading-[160%] tracking-[0.09px] pt-4 ">John Fang</h3>
                        <p className="text-[rgba(156,105,226,1)] text-sm font-medium leading-[160%] tracking-[0.14px]">wordfaang.com</p>
                        <p className="text-[#4B5D68] text-[18px] leading-[180%] pt-[20px] pr-20">
                          {item?.description}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

              </Swiper>
              <span className="absolute top-1/2 -left-16 cursor-pointer z-10"
                onClick={() => swiperRef?.current?.slidePrev()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="17" viewBox="0 0 43 17" fill="none">
                  <path d="M7.06347 1.70128L1.05274 8.7138L7.06347 15.7263" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M1.05247 8.71374L41.124 8.71375" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
              <span className="absolute top-1/2 -right-16  cursor-pointer z-10"
                onClick={() => swiperRef?.current?.slideNext()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="17" viewBox="0 0 43 17" fill="none">
                  <path d="M35.9268 1.12874L41.9375 8.14127L35.9268 15.1538" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M41.9378 8.14124L1.86621 8.14124" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
              {/* <div className="swiper-pagination absolute -bottom-10 w-full mx-auto swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                <span className='swiper-pagination-bullet swiper-pagination-bullet-active'></span>
                <span className='swiper-pagination-bullet'></span>
                <span className='swiper-pagination-bullet'></span>
              </div> */}
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Slide