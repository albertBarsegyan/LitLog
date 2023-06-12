import { Link } from 'react-router-dom'
import { styling } from '../../../constants/style'
import { useState } from 'react'
import books from '../../../constants/books'
import style from './book.module.css'
import BooksFrom from './BooksForm/BooksFrom'
import Button from '../../Button/Button1/Button'

const Books = () => {
  const [openForm, setOpenForm] = useState(false)
  const handleOpenForm = () => setOpenForm(!openForm)

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <Button onClick={handleOpenForm} styles={styling}>
          Add new book
        </Button>
      </div>
      {openForm && <BooksFrom openForm={openForm} setOpenForm={setOpenForm} />}
      <div className={style.mainDin}>
        {books.map((item) => {
          return (
            <div style={{ padding: '0 20px' }} key={item.id}>
              <img className={style.img} src={item.img} alt="img" />
              <Link className={style.name}>{item.name}</Link>
              <p className={style.paragrap}>{item.desc}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Books
