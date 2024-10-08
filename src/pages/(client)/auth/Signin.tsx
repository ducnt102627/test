import Logo from '@/assets/img/logo.svg'
import instance from '@/configs/axios'

import { AuthContext } from '@/contexts/AuthContext'
import ButtonComponent from '@/pages/(admin)/_components/ButtonComponent'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'



type IUser = {
  username: string;
}
const userSchema = Joi.object({
  username: Joi.string().required(),
})
const Signin = () => {
  const navigate = useNavigate();
  const { setIsSignIn } = useContext(AuthContext);
  console.log("123", setIsSignIn)
  const { register, handleSubmit, formState: { errors } } = useForm<IUser>({
    resolver: joiResolver(userSchema)
  });

  const handleSignIn = async (username: string) => {
    try {
      const { data } = await instance.post('/auth/login', {
        username,
      });
      console.log("data")
      const { accessToken, refreshToken } = data;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      instance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
      return { accessToken, refreshToken };
    } catch (error) {
      console.log(error)
    }
  }
  const onSubmit = (data: IUser) => {
    console.log(data)
    handleSignIn(data.username);
    setIsSignIn?.(true);
    toast.success("Sign in successfully");
    navigate('/');
  }
  return (
    <>
      <div className="container-custom padding py-12">
        <div className="">
          <Link to="/">
            <img src={Logo} alt="" /></Link>
        </div>
        <div className="pt-36 max-w-[407px]  mx-auto w-full ">
          <h3 className="text-center text-[48px] font-semibold pb-6">Sign In</h3>
          <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
            <div className="w-full flex flex-col  ">
              <div className="mb-9">
                <label htmlFor="" className='text-lg text-[#00000] leading-[160%] tracking-[0.08px]  '>Username</label>
                <input type="text" className='w-full h-[50px] px-3 border border-[#000000] rounded-md ' {...register("username")} />
                {errors.username && <div className="text-red-500 pt-2">{errors.username.message}</div>}
              </div>
              <ButtonComponent
                title='Sign In'
                type='submit'
                className='px-[80px] py-[15px] font-bold'
              />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signin