import EditModal from '../../Button/EditModal'
import modal from './modal.module.css'
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
    console.log(photo)
    editUser({ profilePhotoFile: photo })
  }

  const handleChangeName = (e) => {
    setFullNameEdit(e.target.value)
  }
  const handleEditFullName = () => {
    try {
      editUser({ fullName: fullNameEdit })
      console.log('Edit yes ' + fullNameEdit)
    } catch (error) {
      console.error('rtew ' + error)
    }
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
        {/* <button onClick={handleEditFullName}>Edit</button> */}
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
          <img src={user?.photoURL} alt="tgfds" />
        </div>
      </form>
      <Button>Edit Profil Page</Button>
    </Modal>
  )
}

export default PopUp
