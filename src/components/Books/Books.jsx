import { Link } from 'react-router-dom'
import books from '../../constants/books'
import style from './book.module.css'
const Books = () => {
  return (
    <div className={style.mainDin}>
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
