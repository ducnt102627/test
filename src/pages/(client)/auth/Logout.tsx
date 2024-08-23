import instance from '@/configs/axios';
import { AuthContext } from '@/contexts/AuthContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const useLogout = () => {
  const { isSignIn, setIsSignIn } = useContext(AuthContext);
  console.log("logout", isSignIn)
  const navigate = useNavigate()
  const logout = async () => {
    await instance.delete('/auth/logout',)
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    delete instance.defaults.headers.common["Authorization"];
    setIsSignIn?.(false);
    navigate('/signin')
  }
  return logout;
}

export default useLogout

