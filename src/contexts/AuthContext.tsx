import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react"

type IUser = {
  username: string,
}
interface AuthContextType {
  authUser?: IUser | undefined;
  setAuthUser?: Dispatch<SetStateAction<IUser | undefined>>;
  isSignIn?: boolean;
  setIsSignIn?: Dispatch<SetStateAction<boolean>>;
}
const AuthContext = createContext<AuthContextType>({});

interface AuthProviderProps {
  children: ReactNode;
}
const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authUser, setAuthUser] = useState<IUser | undefined>(undefined);
  const [isSignIn, setIsSignIn] = useState(Boolean(localStorage.getItem('accessToken') && localStorage.getItem('accessToken')));
  // console.log("Sinin", isSignIn)
  // useEffect(() => {
  //   const token = localStorage.getItem('accessToken');
  //   console.log(token);
  //   if (token) {
  //     setIsSignIn(true);
  //     // setAuthUser({ username: 'John Doe' });
  //   }
  // });
  return <AuthContext.Provider value={{ authUser, setAuthUser, isSignIn, setIsSignIn }}>{children}</AuthContext.Provider>;
}
export { AuthContext, AuthProvider }