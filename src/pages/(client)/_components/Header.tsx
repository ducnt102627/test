import BannerImage from '@/assets/img/image1 .png'
import Logo from '@/assets/img/logo.svg'
import { AuthContext } from '@/contexts/AuthContext'
import { motion } from "framer-motion"
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import useLogout from '../auth/Logout'
import { IoMdMenu } from 'react-icons/io'
const Header = () => {
  const { isSignIn } = useContext(AuthContext);
  console.log("isSignIn", isSignIn);
  const handleLogout = useLogout();
  return (
    <>
      <div className="block lg:h-[900px] py-12 ">
        <motion.div
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          transition={{
            duration: 2,
            delay: 1.25,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="flex justify-between items-center">
          <div className="">
            <Link to="/"> <img src={Logo} alt="" /></Link>
          </div>
          <div className="flex">
            <div className="hidden md:block">
              {isSignIn === false ? (<Link to="/signin">
                <button className="bg-[#9C69E2] px-[80px] py-[15px] border-[#9C69E2] rounded-[50px] text-white text-base font-bold">Signin</button>
              </Link>) : ('')}
              {isSignIn === true ? (
                <div className=" flex gap-x-8">
                  <button className=" bg-[#9C69E2] px-[80px] py-[15px] border-[#9C69E2] rounded-[50px] text-white text-base font-bold">Profile</button>
                  <button onClick={handleLogout} className=" bg-[#9C69E2] px-[80px] py-[15px] border-[#9C69E2] rounded-[50px] text-white text-base font-bold">Logout</button>
                </div>
              ) : ('')}
            </div>
            <div className="md:hidden">
              <span className=""><IoMdMenu size={48} /></span>
            </div>
          </div>
        </motion.div>

        <div className="pt-28 xl:py-32 h-full overflow-hidden">
          <div className="flex h-full flex-col xl:flex-row relative">
            <motion.div
              initial={{ y: -500 }}
              animate={{ y: 0 }}
              transition={{
                duration: 1.5,
                delay: 0.5,
                // ease: [0, 0.71, 0.2, 1.01],
              }}>
              <div className="text-center xl:text-left xl:absolute xl:bottom-10">
                <h1 className="text-[#212353] xl:max-w-[700px] text-[40px] xl:text-[80px] font-bold leading-[110%] pb-5 xl:pb-12">Save your data storage here.</h1>
                <p className="text-[#4B5D68] xl:max-w-[380px] text-[18px] font-medium leading-[160%] pb-6 xl:pb-12">Data Warehouse is a data storage area that has been
                  tested for security, so you can store your data here
                  safely but not be afraid of being stolen by others.</p>
                <button className="bg-[#9C69E2] px-[36px] py-[18px] border-[#9C69E2] rounded-[50px] text-white text-base font-bold  mb-8">Learn more</button>
              </div>
            </motion.div>
            <motion.div initial={{ y: 500 }}
              animate={{ y: 0 }}
              transition={{
                duration: 1.5,
                delay: 0.5,
                // ease: [0, 0.71, 0.2, 1.01],
              }}>
              <div className="xl:absolute xl:right-0 xl:bottom-0 max-w-[760px] max-h-[402px] mx-auto">
                <img src={BannerImage} alt=""
                  className="w-full h-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header