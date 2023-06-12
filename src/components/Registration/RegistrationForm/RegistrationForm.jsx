import google from '../../../assets/images/google.png'
import { useForm } from 'react-hook-form'
import {
  errorMes,
  minMaxLengtMes,
  requeridMes,
} from '../../../constants/errorMessage'
import style from './registrationForm.module.css'
import { useAuth } from '../../../context/auth.context'
import { RegExp } from '../../../constants/RegExp'
import { useNavigate } from 'react-router-dom'
import { AuthenticatedRoutePath } from '../../../constants/RouteCostant'

const RegistrationForm = () => {
  const { signUp, googleAuth } = useAuth()
  const navigate = useNavigate()

  const {
    register,
    formState: { errors, isValid, isDirty },
    handleSubmit,
    watch,
    reset,
  } = useForm({
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
      repeatPassword: '',
      firstname: '',
      lastname: '',
    },
  })

  const password = watch('password')
  const repeatPassword = watch('repeatPassword')
  const isDisableSubmit = !isValid || !isDirty

  const onSubmit = async (data) => {
    reset()
    await signUp(data)

    navigate(AuthenticatedRoutePath.BooksInfo())
  }

  const handleGoogleSubmit = async () => await googleAuth()

  return (
    <div className={style.bigDiv}>
      <button onClick={handleGoogleSubmit} className={style.googleBtn}>
        <img src={google} alt="" className={style.googleImg} /> Sign up with
        Google
      </button>
      <form onSubmit={handleSubmit(onSubmit)} className={style.formWrapper}>
        <div className={style.border}>
          <div className={style.spBor}></div>
          <span style={{ fontSize: '20px' }}>or</span>
          <div className={style.spBor}></div>
        </div>

        <label>
          <div>
            {errors?.firstname && (
              <p className={style.errormess}>
                {errors?.firstname?.message || 'Error!'}
              </p>
            )}
          </div>

          <input
            className={errors.firstname ? style.erorrInp : style.inp}
            {...register('firstname', {
              required: requeridMes.reqMes,
              minLength: {
                value: 3,
                message: minMaxLengtMes.minName,
              },
              maxLength: {
                value: 15,
                message: minMaxLengtMes.maxName,
              },
            })}
            type="text"
            placeholder="First name"
          />
        </label>

        <label>
          <div>
            {errors?.lastname && (
              <p className={style.errormess}>
                {errors?.lastname?.message || 'Error!'}
              </p>
            )}
          </div>

          <input
            className={errors.lastname ? style.erorrInp : style.inp}
            {...register('lastname', {
              required: requeridMes.reqMes,
              minLength: {
                value: 3,
                message: minMaxLengtMes.minName,
              },
              maxLength: {
                value: 15,
                message: minMaxLengtMes.maxName,
              },
            })}
            type="text"
            placeholder="Last Name"
          />
        </label>

        <label>
          <div>
            {errors?.email && (
              <p className={style.errormess}>
                {errors?.email?.message || 'Error!'}
              </p>
            )}
          </div>

          <input
            className={errors.email ? style.erorrInp : style.inp}
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
        </label>
        <div>
          {errors?.password && (
            <p className={style.errormess}>
              {errors?.password?.message || 'Error!'}
            </p>
          )}
        </div>

        <label>
          <input
            className={errors.password ? style.erorrInp : style.inp}
            {...register('password', {
              required: requeridMes.reqMes,
              pattern: {
                value: RegExp.passwordRegExp,
                message: errorMes.Password,
              },
            })}
            type="password"
            placeholder="Password"
          />
        </label>

        <label>
          <div>
            {errors?.repeatPassword && (
              <p className={style.errormess}>
                {errors?.repeatPassword?.message || 'Error!'}
              </p>
            )}
          </div>

          {password !== repeatPassword && (
            <p className={style.errormess}>{errorMes.passReap}</p>
          )}

          <input
            className={errors.repeatPassword ? style.erorrInp : style.inp}
            {...register('repeatPassword', {
              required: requeridMes.reqMes,
              pattern: {
                value: RegExp.passwordRegExp,
                message: errorMes.Password,
              },
            })}
            type="password"
            placeholder="Repeat password"
          />
        </label>

        <button disabled={isDisableSubmit} className={style.but} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default RegistrationForm
