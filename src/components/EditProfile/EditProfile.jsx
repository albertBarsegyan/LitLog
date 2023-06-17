import style from './EditProfile.module.css'

import { useId, useState } from 'react'

import { useAuth } from '../../context/auth.context'
import Button from '../Button/Button1/Button'
import LeftSide from '../ProfilPage/LeftSide/LeftSide'
import RightSide from '../ProfilPage/RightSide/RightSide'
import { RegExp } from '../../constants/RegExp'

export const EditProfile = () => {
  const id = useId()
  const { user, editUser, isLoading, error } = useAuth()
  const [fullName, setFullName] = useState(user?.displayName ?? '')
  const [uploadedImage, setUploadedImage] = useState(null)
  const [booksCount, setBooksCount] = useState(user.booksCount ?? 0)

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) setUploadedImage(file)
  }

  const handleSaveImage = async (e) => {
    if (uploadedImage) {
      await editUser({ profilePhotoFile: uploadedImage })
      setUploadedImage(null)
    }
  }

  const handleChangeName = (e) => {
    setFullName(e.target.value)
  }

  const handleEditFullName = () => {
    editUser({ fullName })
  }

  const handleEditBooksCount = (e) => {
    const { value } = e.target
    if (value === '') {
      setBooksCount('')
      return
    }

    if (RegExp.numberRegExp.test(value) && value <= 365 && value >= 1) {
      setBooksCount(value)
    }
  }

  const handleBooksCount = () => {
    editUser({ booksCount })
  }

  return (
    <div className={style.mainDiv}>
      <div className={style.bar}>
        <LeftSide />
      </div>

      <div className={style.rightSideWrapper}>
        <RightSide />

        <div className={style.contentWrapper}>
          <div>
            <label
              style={{ display: 'block', margin: '10px 0', maxWidth: '200px' }}
              className={style.imageUploadButton}
              htmlFor={id}
            >
              Add or edit your picture
            </label>

            <input
              id={id}
              type="file"
              accept="image/*"
              className={style.customFileInput}
              onChange={handleImageUpload}
            />

            <div className={style.uploadedImageWrapper}>
              <img
                className={style.uploadedImage}
                src={
                  uploadedImage
                    ? URL.createObjectURL(uploadedImage)
                    : user?.photoURL
                }
                alt="uploaded image"
              />
            </div>

            <button
              className={style.imageUploadButton}
              type="button"
              onClick={handleSaveImage}
            >
              {isLoading ? 'Loading...' : 'Save profile picture'}
            </button>
          </div>

          <div style={{ margin: '20px 0' }}>
            <div className={style.modSpan}>
              <input
                className={style.nameInput}
                value={fullName}
                onChange={handleChangeName}
              />

              <Button
                className={style.imageUploadButton}
                onClick={handleEditFullName}
              >
                Edit name
              </Button>
            </div>
          </div>

          <div style={{ margin: '20px 0' }}>
            <div className={style.modSpan}>
              <input
                className={style.nameInput}
                value={booksCount}
                onChange={handleEditBooksCount}
              />

              <Button
                className={style.imageUploadButton}
                onClick={handleBooksCount}
              >
                Edit books count
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
