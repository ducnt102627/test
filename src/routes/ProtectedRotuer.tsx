import { AuthContext } from '@/contexts/AuthContext';
import { ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';

type ProtectedRouterType = {
  children: ReactNode;
};
const ProtectedRouter = ({ children }: ProtectedRouterType) => {
  const { isSignIn } = useContext(AuthContext)
  return isSignIn ? children : <Navigate to={"/signin"} />
}

export default ProtectedRouter