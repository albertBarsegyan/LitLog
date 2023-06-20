import registerUser from '../../../assets/images/register.png'
import { useForm } from 'react-hook-form'
import {
  errorMes,
  minMaxLengtMes,
  requeridMes,
} from '../../../constants/errorMessage'
import style from './registrationForm.module.css'
import { useAuth } from '../../../context/auth.context'
import { RegExp } from '../../../constants/RegExp'

const RegistrationForm = () => {
  const { signUp } = useAuth()

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
  const errorInput =
    errors?.name ||
    errors?.surname ||
    errors?.email ||
    errors?.password ||
    errors?.repeatPassword

  const isDisableSubmit = !isValid || !isDirty

  const onSubmit = async (data) => {
    reset()
    await signUp(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.registerForm}>
      <p className={style.signup}>Sign Up</p>
      <div>
        {errors?.name && (
          <p className={style.errormess}>{errors?.name?.message || 'Error!'}</p>
        )}
      </div>
      <div>
        <input
          {...register('name', {
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
          className={style.regiterInput}
          type="text"
          placeholder="Name"
        />
      </div>
      <div>
        {errors?.surname && (
          <p className={style.errormess}>
            {errors?.surname?.message || 'Error!'}
          </p>
        )}
      </div>
      <div>
        <input
          {...register('surname', {
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
          className={style.regiterInput}
          type="text"
          placeholder="Surname"
        />
      </div>
      <div>
        {errors?.email && (
          <p className={style.errormess}>
            {errors?.email?.message || 'Error!'}
          </p>
        )}
      </div>
      <div>
        <input
          {...register('email', {
            required: requeridMes.reqMes,
            pattern: {
              value: RegExp.emailRegExp,
              message: errorMes.Email,
            },
          })}
          className={style.regiterInput}
          type="text"
          placeholder="Email adress"
        />
      </div>
      <div>
        {errors?.password && (
          <p className={style.errormess}>
            {errors?.password?.message || 'Error!'}
          </p>
        )}
      </div>

      <div>
        <input
          {...register('password', {
            required: requeridMes.reqMes,
            pattern: {
              value: RegExp.passwordRegExp,
              message: errorMes.Password,
            },
          })}
          className={style.regiterInput}
          type="password"
          placeholder="Password"
        />
      </div>
      {password !== repeatPassword && (
        <p className={style.errormess}>{errorMes.passReap}</p>
      )}
      <div>
        {errors?.repeatPassword && (
          <p className={style.errormess}>
            {errors?.repeatPassword?.message || 'Error!'}
          </p>
        )}
      </div>
      <div>
        <input
          {...register('repeatPassword', {
            required: requeridMes.reqMes,
            pattern: {
              value: RegExp.passwordRegExp,
              message: errorMes.Password,
            },
          })}
          className={style.regiterInput}
          type="password"
          placeholder="Reapet password"
        />
      </div>
      <img
        className={errorInput ? `${style.displayImg}` : `${style.registerImg}`}
        src={registerUser}
        alt=""
      />
      <button
        disabled={isDisableSubmit}
        type="submit"
        className={style.regiterBtn}
      >
        Sign in
      </button>
    </form>
  )
}

export default RegistrationForm
