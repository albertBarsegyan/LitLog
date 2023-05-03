import google from '../../../assets/images/google.png';
import { useForm } from 'react-hook-form';
import { errorMes, minMaxLengtMes, requeridMes } from '../../../constants/errorMessage';
import style from './registrationForm.module.css';
import { useAuth } from '../../../context/auth.context';
import { useNavigate } from 'react-router-dom';
import { RouteConstant } from '../../../constants/RouteCostant';

const RegistrationForm = () => {
  const { signUp, error: firebaseError, googleAuth } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors, isDirty, isValid },
    handleSubmit,
    watch,
    reset,
  } = useForm({
    mode: 'all',
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    },
  });

  const password = watch('password', ' ');
  const repeatPassword = watch('repeatPassword', ' ');

  const onSubmit = (values) => {
    reset();
    try {
      const res = signUp(values);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleSubmit = async (e) => {
    e.preventDefault();
    await googleAuth(google);
    navigate(RouteConstant.FirstPage);
  };

  const isSubmitDisabled = !isValid && !isDirty;

  return (
    <div className={style.bigDiv}>
      <button onClick={handleGoogleSubmit} {...register('google')} className={style.googleBtn}>
        <img src={google} alt="" className={style.googleImg} /> Sign up with Google
      </button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.border}>
          <div className={style.spBor}></div>
          <span>or</span>
          <div className={style.spBor}></div>
        </div>

        <label htmlFor="">
          <div>{errors?.firstname && <p className={style.errormess}>{errors?.firstname?.message || 'Error!'}</p>}</div>
          <input
            className={errors.firstname ? style.erorrInp : style.inp}
            {...register('firstname', {
              required: requeridMes.reqMes,
              minLength: {
                value: 3,
                message: minMaxLengtMes.minName,
              },
              maxLength: {
                value: 10,
                message: minMaxLengtMes.maxName,
              },
            })}
            type="text"
            placeholder="First name"
          />
        </label>

        <label htmlFor="">
          <div>{errors?.lastname && <p className={style.errormess}>{errors?.lastname?.message || 'Error!'}</p>}</div>
          <input
            className={errors.lastname ? style.erorrInp : style.inp}
            {...register('lastname', {
              required: requeridMes.reqMes,
              minLength: {
                value: 3,
                message: minMaxLengtMes.minName,
              },
              maxLength: {
                value: 10,
                message: minMaxLengtMes.maxName,
              },
            })}
            type="text"
            placeholder="Last Name"
          />
        </label>

        <label htmlFor="">
          <div>{errors?.email && <p className={style.errormess}>{errors?.email?.message || 'Error!'}</p>}</div>
          <input
            className={errors.email ? style.erorrInp : style.inp}
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
        </label>

        <div>{errors?.password && <p className={style.errormess}>{errors?.password?.message || 'Error!'}</p>}</div>
        <label htmlFor="">
          <input
            className={errors.password ? style.erorrInp : style.inp}
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

        <label htmlFor="">
          <div>
            {errors?.repeatPassword && <p className={style.errormess}>{errors?.repeatPassword?.message || 'Error!'}</p>}
          </div>
          {password !== repeatPassword && <p className={style.errormess}>{errorMes.passReap}</p>}
          <input
            className={errors.repeatPassword ? style.erorrInp : style.inp}
            {...register('repeatPassword', {
              required: requeridMes.reqMes,
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message: errorMes.Password,
              },
            })}
            type="password"
            placeholder="Repeat password"
          />
        </label>

        <button disabled={isSubmitDisabled} className={style.but} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
