import React, { useContext } from 'react';
import { AuthContext } from '../Providers/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext);

    const location = useLocation();
    console.log(location);

    if(loading){
        return <div className="flex justify-center items-center ">
        <progress className="progress w-56"></progress>
      </div>
      
    }

    if(user?.email){
        return children;
    }
    return <Navigate state={{from: location}} to='/login' replace></Navigate> // or  return <Navigate state={location.pathname} to='/login' replace></Navigate>

    return (
        <div>
            
        </div>
    );
};

export default PrivateRoutes;