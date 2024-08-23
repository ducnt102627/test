import Logo from "@/assets/img/logo.svg"
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <>
      <div className="my-20 pt-24   border-t-2 border-[#9C69E2]/20 ">
        <div className="pb-20">
          <motion.div
            initial={{ y: 50, opacity: 0. }}
            whileInView={{ y: 0, opacity: 1. }}
            transition={{
              duration: 1.5,
              delay: 0.5,
              // ease: [0, 0.71, 0.2, 1.01],
            }} className="flex flex-col xl:flex-row gap-y-8 justify-center items-center">
            <div className="w-[45%] flex text-center xl:text-left flex-col">
              <div className="flex justify-center xl:justify-start items-center gap-x-5 pb-16">
                <img src={Logo} alt="" />
                <h3 className="text-[#212353] text-xl font-bold leading-[160%]">DataWarehouse</h3>
              </div>
              <div className="text-[#212353] text-base font-medium leading-[180%] tracking-[0.16px] pb-3">
                <p className=''>Warehouse Society, 234</p>
                <p className="">Bahagia Ave Street PRBW 29281 </p>
              </div>
              <div className="text-[#212353] text-base  leading-[180%] tracking-[0.16px]">
                <p className="">info@warehouse.project </p>
                <p className="">1-232-3434 (Main)</p>
              </div>
            </div>
            <div className="flex flex-1 flex-col xl:flex-row xl:gap-36 text-center xl:text-left ">
              <div className="">
                <h3 className="text-[#212353] text-base font-bold leading-[160%] pb-8">About</h3>
                <p className="text-[#212353] text-base leading-[250%]">Profile
                </p>
                <p className="text-[#212353] text-base leading-[250%]">Features</p>
                <p className="text-[#212353] text-base leading-[250%]">
                  Careers</p>
                <p className="text-[#212353] text-base leading-[250%]">
                  DW News</p>
              </div>
              <div className="">
                <h3 className="text-[#212353] text-base font-bold leading-[160%] pb-8">Help</h3>
                <p className="text-[#212353] text-base leading-[250%]">Support
                </p>
                <p className="text-[#212353] text-base leading-[250%]">Sign up
                </p>
                <p className="text-[#212353] text-base leading-[250%]">Guide
                </p>
                <p className="text-[#212353] text-base leading-[250%]">
                  Reports</p>
                <p className="text-[#212353] text-base leading-[250%]">
                  Q&A</p>
              </div>
              <div className="">
                <h3 className="text-[#212353] text-base font-bold leading-[160%] pb-8"> Social Media</h3>
                <div className=" flex gap-x-3">
                  <span className="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="51" height="52" viewBox="0 0 51 52" fill="none">
                      <circle opacity="0.1" cx="25.6765" cy="25.9612" r="25.0671" fill="#212353" />
                    </svg>
                  </span>
                  <span className="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="51" height="52" viewBox="0 0 51 52" fill="none">
                      <circle opacity="0.1" cx="25.6765" cy="25.9612" r="25.0671" fill="#212353" />
                    </svg>
                  </span>
                  <span className="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="51" height="52" viewBox="0 0 51 52" fill="none">
                      <circle opacity="0.1" cx="25.6765" cy="25.9612" r="25.0671" fill="#212353" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
          {/*  */}
        </div>
        {/*  */}
        <motion.div
          initial={{ y: 50, opacity: 0. }}
          whileInView={{ y: 0, opacity: 1. }}
          transition={{
            duration: 1.5,
            delay: 0.5,
            // ease: [0, 0.71, 0.2, 1.01],
          }} className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="">
            <p className="">© Datawarehouse™, 2020. All rights reserved.</p>
            <p className="">Company Registration Number: 21479524.</p>
          </div>
          <div className="">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" fill="none">
                <circle opacity="0.2" cx="30.9194" cy="30.7212" r="30.0806" fill="#9C69E2" />
                <path d="M15.8789 26.6836C15.8789 21.1607 20.3561 16.6836 25.8789 16.6836H35.9595C41.4823 16.6836 45.9595 21.1607 45.9595 26.6836V30.7481C45.9595 36.2709 41.4823 40.7481 35.9595 40.7481H15.8789V26.6836Z" fill="#9C69E2" />
                <circle cx="24.9038" cy="28.7158" r="2.00537" fill="white" />
                <circle cx="30.9204" cy="28.7158" r="2.00537" fill="white" />
                <circle cx="36.936" cy="28.7158" r="2.00537" fill="white" />
                <path d="M25.9058 39.7454H15.8789V42.2291C15.8789 43.7837 17.5748 44.7439 18.9079 43.9441L25.9058 39.7454Z" fill="#9C69E2" />
              </svg>
            </span>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Footer