import React from 'react';
import { useNavigate } from 'react-router';
import style from './btn.module.css'

const Login = () => {
    const navigation = useNavigate()
    return (
        <button className={style.button}> Sign In <i class="fa-solid fa-user"></i></button>
    );
};

export default Login;