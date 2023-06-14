import style from './bookshow.module.css'
import book from '../../../constants/books'
import { Link } from 'react-router-dom'

const BookShow = () => {
  const bookFour = book.slice(0, 4)

  return (
    <div className={style.bookShowMain}>
      <h2 className={style.bookShow}>My Books</h2>

      <div className={style.books}>
        {bookFour.map((item) => {
          return (
            <div key={item.id}>
              <img className={style.img} src={item.img} alt="img" />
              <Link className={style.name}>{item.name}</Link>
              <p className={style.paragrap}>{item.desc}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BookShow
