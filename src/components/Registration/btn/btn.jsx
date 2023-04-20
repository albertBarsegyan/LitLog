import React from 'react';
import { useNavigate } from 'react-router';
import style from './btn.module.css';
import { RouterConstant } from '../../../constants/RoutConstant';

const Login = () => {
  const navigation = useNavigate();

  return (
    <button onClick={() => navigation(RouterConstant.LoginPage)} className={style.button}>
      {' '}
      Sign In <i class="fa-solid fa-user"></i>
    </button>
  );
};

export default Login;
