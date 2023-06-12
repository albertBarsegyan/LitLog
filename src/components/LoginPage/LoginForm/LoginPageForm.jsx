import loginUser from '../../../assets/images/loginUser.png'
import style from './LoginPage.module.css'
import google from '../../../assets/images/google.png'
import { errorMes, requeridMes } from '../../../constants/errorMessage'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import { UnauthenticatedRoutePath } from '../../../constants/RouteCostant'
import { useAuth } from '../../../context/auth.context'
import { RegExp } from '../../../constants/RegExp'

function LoginPage() {
  const { signIn, googleAuth } = useAuth()
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
  })

  const onSubmit = (data) => {
    reset()
    signIn(data)
  }

  const isDisableSubmit = !isDirty || !isValid

  return (
    <div style={{ backgroundColor: 'var(--profileColor)' }}>
      <div className={style.main}>
        <div className={style.form}>
          <div style={{ textAlign: 'center' }}>
            <img width="100px" height="100px" src={loginUser} alt="loginUser" />
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              <div>
                {errors?.email && (
                  <p className={style.errormess}>
                    {errors?.email?.message || 'Error!'}
                  </p>
                )}
              </div>

              <input
                className={errors.email ? style.errorInp : style.formInput}
                {...register('email', {
                  required: requeridMes.reqMes,
                  pattern: {
                    value: RegExp.emailRegExp,
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
                {errors?.password && (
                  <p className={style.errormess}>
                    {errors?.password?.message || 'Error!'}
                  </p>
                )}
              </div>

              <input
                className={errors.password ? style.errorInp : style.formInput}
                {...register('password', {
                  required: requeridMes.reqMes,
                })}
                type="password"
                placeholder="Password"
              />
            </label>
            <div className={style.but}>
              <button
                disabled={isDisableSubmit}
                type="submit"
                className={style.loginButton}
              >
                Login
              </button>
              <span className={style.loginOr}>OR</span>
            </div>
          </form>
          <div className={style.googleButtonWrapper}>
            <button onClick={() => googleAuth()} className={style.googleBut}>
              <img src={google} alt="google auth" />
            </button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span className={style.spanbtn} style={{ fontSize: '20px' }}>
              Not registered?
            </span>

            <NavLink
              to={UnauthenticatedRoutePath.Registration()}
              className={style.link}
            >
              Create an account!
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
