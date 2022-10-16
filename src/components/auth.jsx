import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom'

const Auth = () => {
    const navigate = useNavigate()

    const auth = localStorage.getItem('accessToken')

    React.useEffect(() => {
        if (auth === null) {
            navigate('/')
        }
    })
  
    return (
        <Outlet/>
    );
}

export default Auth;
