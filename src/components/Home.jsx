import React from 'react';
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate()
    const handlLogout = () => {
        localStorage.removeItem('accessToken')
        navigate('/')
    }
    return (
        <div>
            <h1>Home</h1>
            <button onClick={handlLogout}>Logout</button>
        </div>
    );
}

export default Home;
