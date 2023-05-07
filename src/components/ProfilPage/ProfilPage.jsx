import style from './profil.module.css'
import LeftSide from './LeftSide/LeftSide'
import RightSide from './RightSide/RightSide'
import Books from '../Books/Books'
import { useAuth } from '../../context/auth.context'

const ProfilPage = () => {
  const { editUser, user } = useAuth()

  const handleFile = (e) => {
    const uploadFile = e.target.files[0]
    editUser({ profilePhotoFile: uploadFile, fullName: 'fiki grace' })
  }

  return (
    <div className={style.side}>
      <div>
        <LeftSide />
      </div>
      <div>
        <input type="file" onChange={handleFile} />
        <pre style={{ color: 'white' }}>{JSON.stringify(user, null, 2)}</pre>
        <img src={user.photoURL} />
      </div>

      {/*<div>
                <RightSide />
                <CenterSite />
                </div>
            <PopUp /> */}
      <div>
        <RightSide />
        <Books />
      </div>
    </div>
  )
}

export default ProfilPage
