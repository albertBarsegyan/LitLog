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
  const { user, editUser, error } = useAuth()
  const { modaleActive, setModaleActive } = usePopUp()

  const {
    register,
    watch,
    formState: { errors },
    // handleSubmit,
  } = useForm({
    mode: 'all',
  })

  const newPassword = watch('newPassword', '')
  const repeatPassword = watch('repeatPassword', '')

  const handlePhotoEdit = (e) => {
    e.preventDefault()
    const photo = e.target.files[0]
    console.log(photo)
    editUser({ profilePhotoFile: photo })
  }

  const fullName = user?.displayName.split(' ') || []

  // console.log('error', error)

  return (
    <Modal active={modaleActive} setActive={setModaleActive}>
      <div className={modal.modSpan}>
        <span className={modal.name}>
          {/* {fullName[0]} */}
          <Icons pen={Icon.pen} />
        </span>
        <span className={modal.name}>
          {/* {fullName[1]} */}
          <Icons pen={Icon.pen} />
        </span>
      </div>

      <form>
        <div className={modal.modDiv}>
          <label className={modal.label} htmlFor="customFileInput">
            Add or edit your picture
            <br />
            <input
              id="customFileInput"
              type="file"
              className={modal.customFileInput}
              onChange={handlePhotoEdit}
            />
          </label>
          <img src={user?.profilePhotoFile?.name} alt="tgfds" />
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
