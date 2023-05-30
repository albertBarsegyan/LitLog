import Books from '../Books/Books'
import LeftSide from '../../ProfilPage/LeftSide/LeftSide'
import PopUp from '../../ProfilPage/Modal/PopUp'
import RightSide from '../../ProfilPage/RightSide/RightSide'

const Book = () => {
  return (
    <div style={{ display: 'flex', backgroundColor: 'var(--profileColor)' }}>
      <div>
        <LeftSide />
      </div>
      <div style={{ borderLeft: '1px solid var(--borderColor)' }}>
        <RightSide />
        <Books />
      </div>
      <PopUp />
    </div>
  )
}

export default Book
