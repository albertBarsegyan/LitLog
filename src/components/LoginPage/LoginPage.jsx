import loginUser from '../../assets/images/loginUser.png';
import style from './LoginPage.module.css';
import { useForm } from 'react-hook-form';
import { errorMes, requeridMes } from '../../constants/errorMessage';
import google from '../../assets/images/google.png';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { RouteConstant } from '../../constants/RouteCostant';
import { useAuth } from '../../context/auth.context';
import { element } from 'prop-types';
import { FirstPage } from '../FirstPage/FirstPage';



function LoginPage() {

  const { signIn, error: fireBaseError, googleAuth } = useAuth()

  const {
    register,
    formState: { errors, isDirty, isValid },
    handleSubmit,
    reset
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit = (value, e) => {
    // e.preventDefault()
    reset()
    if (value) {
      signIn(value)
      console.log(value);

    }
    else if (!value) {

      console.log(fireBaseError);
    }


  };



  const isSubmitDisabled = !isDirty && !isValid;

  return (
    <div>
      <Header />
      <div className={style.main}>
        <div className={style.form}>
          <div className={style.userImg}>
            <img src={loginUser} alt="loginUser" />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              <div>{errors?.email && <p className={style.errormess}>{errors?.email?.message || 'Error!'}</p>}</div>

              <input
                className={errors.email ? style.errorInp : style.formInput}
                {...register('email', {
                  required: requeridMes.reqMes,
                  pattern: {
                    value: /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                    message: errorMes.Email,
                  },
                })}
                type="email"
                placeholder="Email"
              />
              <br />
            </label>
            <label>
              <div>
                {errors?.password && <p className={style.errormess}>{errors?.password?.message || 'Error!'}</p>}
              </div>

              <input
                className={errors.password ? style.errorInp : style.formInput}
                {...register('password', {
                  required: requeridMes.reqMes,
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    message: errorMes.Password,
                  },
                })}
                type="password"
                placeholder="Password"
              />
            </label>
            <div className={style.but}>
              <Link to={RouteConstant.FirstPage}>
                <button disabled={isSubmitDisabled} type="submit" className={style.loginButton}>
                  Login
                </button>
              </Link>
              <span>OR</span>
              <button className={style.googleBut}>
                <span>
                  <img src={google} alt="" />
                </span>
              </button>
            </div>
          </form>
          <div className={style.href}>
            <span className={style.span}>Not registred?</span>
            <NavLink to={RouteConstant.RegPage} className={style.link}>
              Create an account!
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
