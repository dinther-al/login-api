import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [userName, setUserName] = React.useState("")
    const [password, setPassword] = React.useState("")
    const navigate = useNavigate()

    const handleLogin = async () => {
        let item = { userName, password }
        await axios.post('https://localhost:7250/api/Auth/Login', item).then(res => localStorage.setItem('accessToken',res.data.accessToken)).catch(err => console(err))
        navigate('/home')
    }
    return (
        <div>
            <input type='text' placeholder='Enter' onChange={(e) => setUserName(e.target.value)} required />
            <input type='password' placeholder='Enter' onChange={(e) => setPassword(e.target.value)} required />
            <button onClick={() => handleLogin()}>login</button>
        </div>
    );
}

export default Login;
