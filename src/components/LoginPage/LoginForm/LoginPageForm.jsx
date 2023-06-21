import loginUser from '../../../assets/images/login.png'
import style from './LoginPage.module.css'
import { errorMes, requeridMes } from '../../../constants/errorMessage'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
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
    <div className={style.loginPageForm}>
      <div className={style.formDiv}>
        <form onSubmit={handleSubmit(onSubmit)} className={style.loginForm}>
          <p className={style.signin}>Sign In</p>
          <div>
            <div>
              {errors?.email && (
                <p style={{ paddingBottom: 30 }} className={style.errormess}>
                  {errors?.email?.message || 'Error!'}
                </p>
              )}
            </div>
            <input
              {...register('email', {
                required: requeridMes.reqMes,
                pattern: {
                  value: RegExp.emailRegExp,
                  message: errorMes.Email,
                },
              })}
              className={style.input}
              type="email"
              placeholder="Email adress"
            />
          </div>
          <div>
            <div>
              {errors?.password && (
                <p className={style.errormess}>
                  {errors?.password?.message || 'Error!'}
                </p>
              )}
            </div>
            <input
              {...register('password', {
                required: requeridMes.reqMes,
              })}
              className={style.input}
              type="password"
              placeholder="Passowrd"
            />
          </div>
          <p className={style.createAccount}>
            Don't have an account?
            <Link
              to={UnauthenticatedRoutePath.Registration()}
              className={style.openRegisterPage}
            >
              Create An account here
            </Link>
          </p>
          <img
            className={
              errors?.email || errors?.password
                ? `${style.loginImg2}`
                : `${style.loginImg}`
            }
            src={loginUser}
            alt=""
          />
          <div className={style.divBtn}>
            <button disabled={isDisableSubmit} className={style.loginBtn}>
              Login
            </button>
          </div>
        </form>
        <div className={style.borderOR}>
          <div className={style.border}></div>
          <p style={{ margin: 10 }}>OR</p>
          <div className={style.border}></div>
        </div>
        <button
          style={{ marginTop: 25 }}
          onClick={() => googleAuth()}
          className={style.loginBtn}
        >
          Login with Google
        </button>
      </div>
    </div>
  )
}

export default LoginPage
