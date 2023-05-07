import EditModal from '../../Button/EditModal'
import { useForm } from 'react-hook-form'
import { errorMes, requeridMes } from '../../../constants/errorMessage'
import modal from './modal.module.css'
import Modal from './Modal'
import { usePopUp } from '../../../context/popup'
import { useAuth } from '../../../context/auth.context'
import { Icon } from '../../../constants/PropsIcon'
import Icons from '../../../assets/images/icons/Icons'

const PopUp = () => {
  const { user } = useAuth()
  const { modaleActive, setModaleActive } = usePopUp()

  const {
    register,
    watch,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({
    mode: 'all',
    defaultValues: {
      photo: '',
    },
  })
  const newPassword = watch('newPassword', '')
  const repeatPassword = watch('repeatPassword', '')

  const onSubmit = (e) => {
    reset()
  }

  const fullName = user.displayName.split(' ')

  return (
    <Modal active={modaleActive} setActive={setModaleActive}>
      {/* <form action="" className={modal.modSpan}>
                <label htmlFor="firstName" className={modal.name}>
                    <input type="text" id="firstName" placeholder="Change your name" />
                    <Icons pen={Icon.pen} />
                </label>
                <label htmlFor="lastName" className={modal.name}>
                    <input type="text" id="lastName" placeholder="Change your last name" />
                    <Icons className={modal.pen} pen={Icon.pen} />
                </label>
            </form> */}

      <div className={modal.modSpan}>
        {/* <label htmlFor="displayName">
                    <span className={modal.name}>Change your name</span>
                    <br />
                    <input
                        id="displayName"
                        className={modal.modInp1}
                        type="text"
                        placeholder={user.displayName}
                    />
                    <Icons pen={Icon.pen} />
                </label> */}
        <span className={modal.name}>
          {fullName[0]}
          <Icons pen={Icon.pen} />
        </span>
        <span className={modal.name}>
          {fullName[1]}
          <Icons pen={Icon.pen} />
        </span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={modal.modDiv}>
          <label className={modal.label} htmlFor="customFileInput">
            Add or edit your picture
            <br />
            <input
              {...register('photo')}
              id="customFileInput"
              className={modal.customFileInput}
              type="file"
            />
          </label>
        </div>

        <div className={modal.modDiv}>
          <div>
            {errors?.currentPassword && (
              <p className={modal.errorMod}>
                {errors?.currentPassword?.message || 'Error!'}
              </p>
            )}
          </div>
          <input
            className={
              errors.currentPassword ? modal.errorModInp : modal.modInp
            }
            {...register('currentPassword', {
              required: requeridMes.reqMes,
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message: errorMes.Password,
              },
            })}
            type="password"
            placeholder="Current password"
          />
        </div>
        <div className={modal.modDiv}>
          <div>
            {errors?.newPassword && (
              <p className={modal.errorMod}>
                {errors?.newPassword?.message || 'Error!'}
              </p>
            )}
          </div>
          <input
            className={errors.newPassword ? modal.errorModInp : modal.modInp}
            {...register('newPassword', {
              required: requeridMes.reqMes,
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message: errorMes.Password,
              },
            })}
            type="password"
            placeholder="Edit password"
          />
        </div>
        <div>
          <div>
            {errors?.repeatPassword && (
              <p className={modal.errorMod}>
                {errors?.repeatPassword?.message || 'Error!'}
              </p>
            )}
          </div>
          {newPassword !== repeatPassword && (
            <p className={modal.errorMod}>{errorMes.passReap}</p>
          )}
          <input
            {...register('repeatPassword', {
              required: requeridMes.reqMes,
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message: errorMes.Password,
              },
            })}
            className={errors.repeatPassword ? modal.errorModInp : modal.modInp}
            type="password"
            placeholder="Repeat password"
          />
        </div>
      </form>
      <EditModal />
    </Modal>
  )
}

export default PopUp
