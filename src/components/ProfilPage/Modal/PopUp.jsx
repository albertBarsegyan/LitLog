import EditModal from '../../Button/EditModal'
import modal from './modal.module.css'
import Modal from './Modal'
import { usePopUp } from '../../../context/popup'
import { useAuth } from '../../../context/auth.context'
import { useState } from 'react'

const PopUp = () => {
  const { user, editUser } = useAuth()
  const { modaleActive, setModaleActive } = usePopUp()
  const [fullName, setFullName] = useState(user?.displayName)

  const handlePhotoEdit = (e) => {
    // e.preventDefault()
    const photo = e.target.files[0]
    console.log(photo)
    editUser({ profilePhotoFile: photo })
  }
  console.log(user)
  // const fullName = user?.displayName.split(' ') || []

  // const handleChangeName = (e) => {
  //   setFullName(e.target.value)
  // }

  // const handleEditFullName = async () => {
  //   try {
  //     await editUser({ fullName: fullName.displayName })
  //     user.displayName = fullName
  //     console.log('Edit yes ' + user?.displayName)
  //   } catch (error) {
  //     console.error('rtew ' + error)
  //   }
  // }

  return (
    <Modal active={modaleActive} setActive={setModaleActive}>
      <div className={modal.modSpan}>
        <input />
        {/* // value={fullName} onChange={handleChangeName} */}
        <button>
          {/* // onClick={handleEditFullName} */}
          Edit
        </button>
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
          <img src={user?.photoURL?.uploadedFileUrl} alt="tgfds" />
        </div>
      </form>
      <EditModal />
    </Modal>
  )
}

export default PopUp
