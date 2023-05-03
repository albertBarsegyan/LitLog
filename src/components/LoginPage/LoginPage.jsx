import loginUser from '../../assets/images/loginUser.png';
import style from './LoginPage.module.css';
import { useForm } from 'react-hook-form';
import { errorMes, requeridMes } from '../../constants/errorMessage';
import google from '../../assets/images/google.png';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { NavLink, useNavigate } from 'react-router-dom';
import { RouteConstant } from '../../constants/RouteCostant';
import { useAuth } from '../../context/auth.context';

function LoginPage() {
  const navigate = useNavigate();
  const { signIn, error: fireBaseError, googleAuth, user } = useAuth();

  const {
    register,
    formState: { errors, isDirty, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values) => {
    reset();
    signIn(values);
  };

  const onGoogleSubmit = async (e) => {
    e.preventDefault();
    await googleAuth(google);
    navigate(RouteConstant.FirstPage);
  };

  console.log({ user });

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
                  required: requeridMes.reqMes
                })}
                type="password"
                placeholder="Password"
              />
            </label>
            <div className={style.but}>
              {!fireBaseError.code ? (
                <button
                  disabled={isSubmitDisabled}
                  type="submit"
                  style={{ color: 'red' }}
                  className={style.loginButton}
                >
                  Login
                </button>
              ) : (
                <button disabled={true} type="submit" className={style.loginButton}>
                  Login
                </button>
              )}

              {fireBaseError && <p>{fireBaseError.message}</p>}
              <span>OR</span>
              <button onClick={onGoogleSubmit} {...register('google')} className={style.googleBut}>
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
