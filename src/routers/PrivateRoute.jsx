import React, { use } from 'react';

import { Navigate, useLocation } from 'react-router';

import { AuthContext } from '../context/AuthContext';
import Loading from '../components/Loading';

const PrivateRout = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation();
  
    if (loading) {
        return <Loading></Loading>;
    }
    if (user) {
       return children;
    }
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
       
   
};

export default PrivateRout;