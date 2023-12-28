import { Route, Routes } from 'react-router-dom';
import useAuthStore from "../../contexts/auth-context/UseAuthStore";
import { Home } from "../../pages/home";

export const ProtectedRoute = ({
  element,
  ...rest
}: {
  element: JSX.Element;
}) => {
  const { isAuthenticated } = useAuthStore();
  return (
    <Routes {...rest}>
      {isAuthenticated ? (
        <Route path='/*' element={element}  />
      ) : (
        <Route path='/*' element={<Home />} />
      )}
    </Routes>
  )

};
