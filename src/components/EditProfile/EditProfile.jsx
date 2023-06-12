import modal from './EditProfile.module.css'

import { useState } from 'react'

import { useAuth } from '../../context/auth.context'
import Button from '../Button/Button1/Button'

export const EditProfile = () => {
  const { user, editUser } = useAuth()
  const [fullName, setFullName] = useState(user?.displayName ?? '')

  const handlePhotoEdit = (e) => {
    const photo = e.target.files[0]
    editUser({ profilePhotoFile: photo })
  }

  const handleChangeName = (e) => {
    setFullName(e.target.value)
  }
  const handleEditFullName = () => {
    editUser({ fullName: fullName })
  }

  return (
    <div>
      <div className={modal.modSpan}>
        <input
          className={modal.nameInput}
          value={fullName}
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

      <Button>Edit Profile Page</Button>
    </div>
  )
}
