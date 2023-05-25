import { Link } from 'react-router-dom'
import books from '../../constants/books'
import style from './book.module.css'
import LeftSide from '../ProfilPage/LeftSide/LeftSide'
import RightSide from '../ProfilPage/RightSide/RightSide'
const Books = () => {
  return (
    <div className={style.mainDin}>
      <div className={style.bar}>
        <LeftSide />
        <RightSide />
      </div>

      <form>
        <input type="text" placeholder="Book Name" />
        <input type="text" placeholder="Author Name" />
        <input type="file" />
      </form>
      {books.map((item) => {
        return (
          <div className={style.booksDiv} key={item.id}>
            <img className={style.img} src={item.img} alt="img" />
            <Link className={style.name}>{item.name}</Link>
            <p className={style.paragrap}>{item.desc}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Books
