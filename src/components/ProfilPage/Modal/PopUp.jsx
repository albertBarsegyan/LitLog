import modal from '../../EditProfile/EditProfile.module.css'
import Modal from './Modal'
import { usePopUp } from '../../../context/popup'
import { useAuth } from '../../../context/auth.context'
import { useState } from 'react'
import Button from '../../Button/Button1/Button'

const PopUp = () => {
  const { user, editUser } = useAuth()
  const { modaleActive, setModaleActive } = usePopUp()
  const [fullNameEdit, setFullNameEdit] = useState(user?.displayName)

  const handlePhotoEdit = (e) => {
    const photo = e.target.files[0]
    editUser({ profilePhotoFile: photo })
  }

  // console.log(user?.photoURL)

  const handleChangeName = (e) => {
    setFullNameEdit(e.target.value)
  }
  const handleEditFullName = async () => {
    const { error } = await editUser({ fullName: fullNameEdit })
    console.log({ error })
  }

  return (
    <Modal active={modaleActive} setActive={setModaleActive}>
      <div className={modal.modSpan}>
        <input
          className={modal.nameInput}
          value={fullNameEdit}
          onChange={handleChangeName}
        />
        <Button onClick={handleEditFullName}>Edit</Button>
      </div>

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
        <img src={user?.photoURL} alt="tgfds" />
      </div>
      <Button>Edit Profil Page</Button>
    </Modal>
  )
}

export default PopUp
