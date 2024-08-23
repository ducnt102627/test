import { Bg1, Bg2, Bg3, Bg4, Img1, Img2, Img3, Img4 } from '@/common/image';
import { motion } from "framer-motion";


const animationVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      duration: 2,
    },
  },
}

const Features = () => {
  return (
    <>
      <div
        className="mt-12 xl:mt-0">
        <motion.div
          variants={animationVariants}
          initial="hidden"
          whileInView="show"
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-[#212353] text-[40px] font-bold leading-[130%] text-center px-12 pb-4 xl:pb-12">Features</h2>
          <p className='max-w-[580px] mx-auto text-center text-[#4B5D68] text-[18px] font-medium leading-[160%] line-clamp-2'>Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.</p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 pt-10 xl:pt-24">
          {/* 1 */}
          <motion.div
            variants={animationVariants}
            initial="hidden"
            whileInView="show"
            // transition={{ delay: 0.5 }}
            className="w-full mx-auto max-w-[540px]  min-h-[358px] relative flex flex-col md:flex-row  justify-center items-center"
          >

            <div className="absolute top-0 right-0 -z-10 hidden md:block">
              <img src={Bg1} alt="" />
            </div>
            <div className="max-w-[130px] md:max-w-[230px] xl:pr-8"><img src={Img1} alt="" /></div>
            <div className="w-[230px] flex flex-col gap-y-4 md:pr-2  md:mr-8 ">
              <h3 className="text-[#212353] text-lg md:text-2xl font-normal leading-[130%]">Search Data</h3>
              <p className="text-[#4B5D68]">
                Don’t worry if your data is very large, the Data Warehoue provides a search engine,
                which is useful for making it easier to find data effectively saving time.
              </p>
              <p className="flex items-center text-[#212353] text-base font-bold md:font-extrabold leading-[160%] gap-x-5">Learn more
                <span className="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="17" viewBox="0 0 23 17" fill="none">
                    <path d="M15.1864 15.2014L21.0952 8.30774L15.1864 1.41412" stroke="#9C69E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21.0955 8.30774H1.39941" stroke="#9C69E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
              </p>
            </div>
          </motion.div>
          {/* 2*/}
          <motion.div
            variants={animationVariants}
            initial="hidden"
            whileInView="show"
            transition={{ delay: 1 }}
            className="w-full mx-auto max-w-[540px]  min-h-[358px] relative flex flex-col md:flex-row  justify-center items-center"
          >
            <div className="absolute top-0 right-0 -z-10 hidden md:block">
              <img src={Bg2} alt="" />
            </div>
            <div className="max-w-[130px] md:max-w-[230px] xl:pr-8"><img src={Img2} className='w-full h-full' alt="" /></div>
            <div className="w-[230px] flex flex-col gap-y-4 md:pr-2  md:mr-8 ">
              <h3 className="text-[#212353] text-lg md:text-2xl font-normal leading-[130%]">24 Hours Access</h3>
              <p className="text-[#4B5D68]">
                Access is given 24 hours a full morning to night and
                meet again in the morning, giving you comfort when
                you need data when urgent.
              </p>
              <p className="flex items-center text-[#212353] text-base font-bold md:font-extrabold leading-[160%] gap-x-5">Learn more
                <span className="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="17" viewBox="0 0 23 17" fill="none">
                    <path d="M15.1864 15.2014L21.0952 8.30774L15.1864 1.41412" stroke="#9C69E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21.0955 8.30774H1.39941" stroke="#9C69E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
              </p>
            </div>
          </motion.div>
          {/* 3*/}
          <motion.div
            variants={animationVariants}
            initial="hidden"
            whileInView="show"
            transition={{ delay: 2 }}
            className="w-full mx-auto max-w-[540px]  min-h-[358px] relative flex flex-col md:flex-row  justify-center items-center"
          >

            <div className="absolute top-0 right-0 -z-10 hidden md:block">
              <img src={Bg3} alt="" />
            </div>
            <div className="max-w-[130px] md:max-w-[230px] xl:pr-8"><img src={Img3} alt="" /></div>
            <div className="w-[230px] flex flex-col gap-y-4 md:pr-2  md:mr-8 ">
              <h3 className="text-[#212353] text-lg md:text-2xl font-normal leading-[130%]">Print Out</h3>
              <p className="text-[#4B5D68]">
                Print out service gives you convenience if someday
                you need print data, just edit it all and just print it.
              </p>
              <p className="flex items-center text-[#212353] text-base font-bold md:font-extrabold leading-[160%] gap-x-5">Learn more
                <span className="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="17" viewBox="0 0 23 17" fill="none">
                    <path d="M15.1864 15.2014L21.0952 8.30774L15.1864 1.41412" stroke="#9C69E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21.0955 8.30774H1.39941" stroke="#9C69E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
              </p>
            </div>
          </motion.div>
          {/* 4 */}
          <motion.div
            variants={animationVariants}
            initial="hidden"
            whileInView="show"
            transition={{ delay: 3 }}
            className="w-full mx-auto max-w-[540px]  min-h-[358px] relative flex flex-col md:flex-row  justify-center items-center"
          >
            <div className="absolute top-0 right-0 -z-10 hidden md:block">
              <img src={Bg4} alt="" />
            </div>
            <div className="max-w-[130px] md:max-w-[230px] xl:pr-8"><img src={Img4} alt="" /></div>
            <div className="w-[230px] flex flex-col gap-y-4 md:pr-2  md:mr-8 ">
              <h3 className="text-[#212353] text-lg md:text-2xl font-normal leading-[130%]">Security Code</h3>
              <p className="text-[#4B5D68]">
                Data Security is one of our best facilities. Allows for your files
                to be safer. The file can be secured with a code or password that
                you created, so only you can open the file.
              </p>
              <p className="flex items-center text-[#212353] text-base  font-bold md:font-extrabold leading-[160%] gap-x-5">Learn more
                <span className="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="17" viewBox="0 0 23 17" fill="none">
                    <path d="M15.1864 15.2014L21.0952 8.30774L15.1864 1.41412" stroke="#9C69E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21.0955 8.30774H1.39941" stroke="#9C69E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
              </p>
            </div>
          </motion.div>

        </div>
      </div >
    </>
  )
}

export default Features