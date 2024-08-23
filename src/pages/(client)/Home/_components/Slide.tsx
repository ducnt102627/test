import React, { useEffect, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion"
import 'swiper/css';
import 'swiper/css/pagination';

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
      console.log("data")
      setGalleries(data);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    handleGalleries()
  }, []);
  console.log("galleries", galleries)
  return (
    <>
      <div className="relative">
        <motion.div
          initial={{ y: 100, opacity: 0. }}
          whileInView={{ y: 0, opacity: 1. }}
          transition={{
            duration: 1.5,
            delay: 0.5,
            // ease: [0, 0.71, 0.2, 1.01],
          }} className="bg-[#9C69E2] w-full md:h-[710px] border-[#9C69E2] rounded-[50px] mt-20 xl:mt-28 py-20  ">
          <div
            className="">
            <h3 className='px-10 xl:px-24 text-[40px] font-bold text-white leading-[130%] pb-[88px] '>Testimonials</h3>
            <div className="relative w-full  ">
              {/* 1 */}

              <Swiper
                pagination={{
                  dynamicBullets: true,
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
                  <SwiperSlide className='px-10 xl:px-24' key={item?.id} >
                    <div className="bg-white max-w-[932px] mx-auto h-[330px] border border-[#9C69E2] rounded-[20px] flex  pt-[60px] pb-[50px] px-4 md:px-10 lg:px-[80px]">
                      <div className="w-16 h-16 md:w-[130px] md:h-[91px]">
                        <img className='w-full h-full border-white rounded-[100%] object-cover overflow-hidden'
                          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww" alt="" />
                      </div>
                      <div className="flex flex-1 flex-col pl-4 md:px-10 xl:px-[55px]">
                        <h3 className="text-[#212353] text-[18px] font-bold leading-[160%] tracking-[0.09px md:pt-4 ">John Fang</h3>
                        <p className="text-[rgba(156,105,226,1)] text-sm font-medium leading-[160%] tracking-[0.14px]">wordfaang.com</p>
                        <p className="text-[#4B5D68] text-[18px] leading-[180%] pt-[20px] pr-0 line-clamp-4 lg:pr-20">
                          {item?.desctiption}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

              </Swiper>
              <motion.span whileTap={{ scale: 1.25 }} className="absolute -top-10 right-32 xl:top-1/2 cursor-pointer z-10 xl:left-8"
                onClick={() => swiperRef?.current?.slidePrev()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="17" viewBox="0 0 43 17" fill="none">
                  <path d="M7.06347 1.70128L1.05274 8.7138L7.06347 15.7263" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M1.05247 8.71374L41.124 8.71375" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </motion.span>
              <motion.span whileTap={{ scale: 1.25 }} className="absolute -top-10 right-16 xl:top-1/2 xl:right-8 cursor-pointer z-10"
                onClick={() => swiperRef?.current?.slideNext()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="17" viewBox="0 0 43 17" fill="none">
                  <path d="M35.9268 1.12874L41.9375 8.14127L35.9268 15.1538" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M41.9378 8.14124L1.86621 8.14124" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </motion.span>

            </div>

          </div>
        </motion.div>
      </div >
    </>
  )
}

export default Slide