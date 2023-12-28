import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../../lib/server";

interface UserProps {
  id: string;
  name: string;
  email: string;
}

interface LoginInputProps {
  email: string;
  password: string;
}

interface RegisterInputProps {
  email: string;
  password: string;
}

interface AuthContextProps {
  isAuthenticated: boolean;
  user: UserProps | null;
  error: null | string;
  login: (data: LoginInputProps) => Promise<void>;
  signup: (data: RegisterInputProps) => Promise<void>;
  logout: () => void;
  isLogged: () => void,
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  user: null,
  error: null,
  signup: async () => {},
  login: async () => {},
  logout: () => {},
  isLogged: () => {},
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(null);

  const signup = async (data: RegisterInputProps) => {
    await api
      .post("/user", data)
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.error("error", error.response.data.message);
        setError(error.response.data.message);
      });
  };

  const login = async (data: any) => {
    await api
      .post("/login", data)
      .then((response) => {
        const token = response.data.access_token;
        Cookies.set("AccessToken", token, {
          expires: 7,
          secure: true,
          sameSite: "Lax",
        });
        const decoded = jwtDecode<UserProps>(token);
        setUser(decoded);
        setIsAuthenticated(true);
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  };

  const logout = async () => {
    try {
      Cookies.remove("AccessToken");
      setUser(null);
      setIsAuthenticated(false);
   
    } catch (error) {
      console.error(error);
    }
  };

  const isLogged = () => {
    const token = Cookies.get("AccessToken");
    if (token) {
      const decoded = jwtDecode<UserProps>(token);
      setUser(decoded);
      setIsAuthenticated(true);
    }
  }

  useEffect(() => {
    isLogged()
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, user, signup, error, isLogged }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
