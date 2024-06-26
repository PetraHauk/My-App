// ProtectedRoute.jsx
import { Navigate, useLocation } from 'react-router-dom';
import { useUserContext } from '../hooks/contextHooks';

const ProtectedRoute = ({ children }) => {
  const { user } = useUserContext();

  const location = useLocation();
  if (!user) {
    // console.log(user);
    // replace and state are used to redirect to origin when page is refreshed
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
