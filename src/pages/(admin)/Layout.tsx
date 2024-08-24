import Logo from '@/assets/img/logo.svg'
import { Link, Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <>
      <div className="flex w-full min-h-[100vh]">
        <div className="w-[280px] bg-[#D9D9D9] px-6 py-8 hidden md:block">
          <div className="w-full flex justify-center pb-8">
            <Link to="/"> <img src={Logo} alt="" /></Link>
          </div>
          <div className="flex flex-col gap-y-4">
            <Link to="/admin">
              <span className="border-b-2 border-[#D9D9D9] hover:border-b-2 hover:border-b-[#000000] transition-all duration-300">Post</span>
            </Link>
            <Link to="/">
              <span className="">Logout</span>
            </Link>

          </div>
        </div>
        <div className="maw-w-full  flex flex-1 w-full py-8 lg:py-16 px-10 lg:px-20">
          <Outlet />

        </div>
      </div>
    </>
  )
}

export default Admin