import Books from '../Books/Books'
import LeftSide from '../ProfilPage/LeftSide/LeftSide'
import RightSide from '../ProfilPage/RightSide/RightSide'
import style from './book.module.css'
const Book = () => {
  return (
    <div style={{ background: '#151524', display: 'flex' }}>
      <LeftSide />
      <div className={style.divEsim}>
        <RightSide />
        <Books />
      </div>
    </div>
  )
}

export default Book
