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
import ProgressBar from '../Progress/ProgressBar'

const Book = ({ book, handleEdit }) => {
  const handleEditInner = (event) => {
    event.stopPropagation()
    handleEdit(book)
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
        <button onClick={handleEditInner}>Edit</button>
      </div>
    </button>
  )
}

const Books = () => {
  const { user } = useAuth()
  const [openForm, setOpenForm] = useState(false)
  const [editButtonValues, setEditButtonValues] = useState(null)
  const handleOpenForm = () => setOpenForm(!openForm)

  const { data: books } = useFirebaseData({
    collectionName: FirebaseDocument.Books,
    queryArray: ['ownerUid', '==', user?.uid],
  })

  const { data: finishedBooks } = useFirebaseData({
    collectionName: FirebaseDocument.Books,
    queryArray: ['ownerUid', '==', user?.uid],
    otherConditions: ['readingStatus', '==', 'finished'],
  })

  const handleEditBook = (book) => {
    setOpenForm(true)
    setEditButtonValues(book)
  }

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <div>
          <ProgressBar
            booksCount={user?.booksCount}
            readBooksCount={finishedBooks.length ?? 1}
          />
        </div>

        <Button onClick={handleOpenForm} styles={styling}>
          Add new book
        </Button>
      </div>

      {openForm && (
        <BooksForm
          providedDefaultValues={editButtonValues}
          openForm={openForm}
          setOpenForm={setOpenForm}
        />
      )}

      <div className={style.booksWrapper}>
        {books.map((book) => (
          <Book handleEdit={handleEditBook} book={book} key={book.id} />
        ))}

        {!books.length && <EmptyState />}
      </div>
    </>
  )
}

export default Books
