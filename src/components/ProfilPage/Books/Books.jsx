import { styling } from '../../../constants/style'
import { useState } from 'react'

import style from './book.module.css'
import BooksForm from './BooksForm/BooksForm'
import Button from '../../Button/Button1/Button'
import { useFirebaseData } from '../../../context/use-firebase-data'
import { FirebaseDocument } from '../../../constants/firebase.constants'
import { useAuth } from '../../../context/auth.context'
import { BookIcon } from '../../icons/Book.icon'
import { EmptyState } from '../../icons/EmptyState'

const Book = ({ book }) => {
  const handleEdit = (event) => {
    event.stopPropagation()
  }

  const handleNavigate = () => {
    window.open(book.url, '_blank')
  }

  return (
    <button onClick={handleNavigate} className={style.bookWrapper}>
      <div className={style.bookIconWrapper}>
        <BookIcon />
      </div>

      <div className={style.name}>
        <span style={{ color: '#fffacd' }}> Headline </span> - {book.headline}
      </div>

      <p className={style.paragrap}>
        <span style={{ color: '#fffacd' }}> Author </span> - {book.author}
      </p>
      <p className={style.paragrap}>
        <span style={{ color: '#fffacd' }}> Genre </span> - {book.genre}
      </p>

      <div className={style.editButtonWrapper}>
        <button onClick={handleEdit}>Edit</button>
      </div>
    </button>
  )
}

const Books = () => {
  const { user } = useAuth()
  const [openForm, setOpenForm] = useState(false)
  const handleOpenForm = () => setOpenForm(!openForm)

  const { data: books } = useFirebaseData({
    collectionName: FirebaseDocument.Books,
    queryArray: ['ownerUid', '==', user?.uid],
  })

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <Button onClick={handleOpenForm} styles={styling}>
          Add new book
        </Button>
      </div>

      {openForm && <BooksForm openForm={openForm} setOpenForm={setOpenForm} />}
      <div className={style.booksWrapper}>
        {books.map((book) => (
          <Book book={book} key={book.id} />
        ))}

        {!books.length && <EmptyState />}
      </div>
    </>
  )
}

export default Books
