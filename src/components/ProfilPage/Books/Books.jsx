import { Link } from 'react-router-dom'
import books from '../../../constants/books'
import style from './book.module.css'
import BooksFrom from './BooksForm/BooksFrom'
import { useState } from 'react'
import Button from '../../Button/Button1/Button'
import { styling } from '../../../constants/style'

const Books = () => {
  const [openForm, setOpenForm] = useState(false)
  const handleOpenForm = () => setOpenForm(!openForm)
  return (
    <div>
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
      <div style={{ marginLeft: 20 }}>
        <Button onClick={handleOpenForm} styles={styling}>
          Add new book
        </Button>
      </div>
      {openForm && <BooksFrom />}
    </div>
  )
}

export default Books
