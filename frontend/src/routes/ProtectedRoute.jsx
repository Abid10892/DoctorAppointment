import { useContext } from 'react';
import { Navigate } from 'react-router-dom'
import { authContext } from '../../context/AuthContext.jsx';

export default function ProtectedRoute({children, allowedRoles}) {

    const {state}= useContext(authContext);
    const isAllowed = allowedRoles.includes(state.role);
    const accessibleRoute = state.token && isAllowed ? children : <Navigate to='/login' replace={true} />
  return accessibleRoute;
}
