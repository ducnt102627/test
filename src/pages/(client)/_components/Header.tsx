import BannerImage from '@/assets/img/image1 .png'
import Logo from '@/assets/img/logo.svg'
import { AuthContext } from '@/contexts/AuthContext'
import ButtonComponent from '@/pages/(admin)/_components/ButtonComponent'
import { motion } from "framer-motion"
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import useLogout from '../auth/Logout'
const Header = () => {
  const { isSignIn } = useContext(AuthContext);
  console.log("isSignIn", isSignIn);
  const handleLogout = useLogout();

  return (
    <>
      <div className="block lg:h-[900px] py-10 ">
        <motion.div
          initial={{ opacity: 0.9, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 3,
            delay: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="flex justify-between items-center">
          <div className="">
            <Link to="/"> <img src={Logo} alt="" /></Link>
          </div>

          <div className="flex">
            <div className="">
              {isSignIn === false ? (<Link to="/signin">
                <ButtonComponent type='button' title='Sing In' className='px-[80px] py-[15px] text-base font-bold' />
              </Link>) : ('')}
              {isSignIn === true ? (
                <div className=" flex flex-col sm:flex-row gap-y-2 sm:gap-x-4 md:gap-x-8">
                  <Link to="/admin">
                    <ButtonComponent type='button' title='Profile' className='px-6 py-2 md:px-[80px] md:py-[15px] font-bold' />
                  </Link>
                  <ButtonComponent type='button' onClick={handleLogout} title='Logout' className='px-6 py-2 md:px-[80px] md:py-[15px] font-bold' />
                  {/* <button onClick={handleLogout} className=" bg-[#9C69E2] px-[80px] py-[15px] border-[#9C69E2] rounded-[50px] text-white text-base ">Logout</button> */}
                </div>
              ) : ('')}
            </div>


          </div>
        </motion.div>

        <div className="pt-28 xl:pb-40 h-full overflow-hidden">
          <div className="flex w-full h-full flex-col xl:flex-row relative">
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.5,
                delay: 0.5,
                // ease: [0, 0.71, 0.2, 1.01],
              }}>
              <div className="text-center xl:w-[700px] xl:text-left xl:absolute xl:top-5">
                <h1 className="text-[#212353] xl:max-w-[700px] text-[40px] xl:text-[80px] font-bold leading-[110%] pb-5 xl:pb-12">Save your data storage here.</h1>
                <p className="text-[#4B5D68] xl:max-w-[380px] text-[18px] font-medium leading-[160%] pb-6 xl:pb-12">Data Warehouse is a data storage area that has been
                  tested for security, so you can store your data here
                  safely but not be afraid of being stolen by others.</p>

                <motion.button
                  whileTap={{ scale: 1.05 }}
                >
                  <ButtonComponent title='Learn more' type='button' className='px-[36px] py-[15px] font-bold mb-8 xl:mb-0' />
                </motion.button>
              </div>
            </motion.div>

            <div className="xl:absolute xl:right-0 xl:bottom-5 max-w-[760px] max-h-[402px] mx-auto">
              <motion.div
                initial={{ y: 100, opacity: 0. }}
                whileInView={{ y: 0, opacity: 1. }}
                transition={{
                  duration: 1.5,
                  delay: 0.5,
                  // ease: [0, 0.71, 0.2, 1.01],
                }}>
                <img src={BannerImage} alt=""
                  className="w-full h-full" />
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Header