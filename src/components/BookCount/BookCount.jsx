import style from './book.module.css'
import { useState } from 'react'
import { RegExp } from '../../constants/RegExp'
import { useAuth } from '../../context/auth.context'
import { useNavigate } from 'react-router-dom'

export const BookCount = () => {
  const [number, setNumber] = useState('')
  const { editUser } = useAuth()
  const navigate = useNavigate()

  const currentYear = new Date().getFullYear()

  const handleChange = (e) => {
    const value = e.target.value

    if (value === '') {
      setNumber('')
      return
    }

    if (RegExp.numberRegExp.test(value) && value <= 365 && value >= 1) {
      setNumber(value)
    }
  }

  const handleClick = () => {
    editUser({ booksCount: number })
  }

  return (
    <div className={style.countDiv}>
      <div className={style.countDiv2}>
        <h1 className={style.countHeadDiv}>Welcome LitLog</h1>
        <div className={style.container}>
          <p className={style.countDivContent}>
            Welcome to LitLog, the online platform for all things literature!
            Here, you'll find a wealth of resources to help you deepen your
            understanding and appreciation of books, authors, and literary works
            from around the world. Whether you're a student, a researcher, or
            simply a lover of literature, LitLog is the perfect place for you to
            explore and engage with the world of words.
          </p>
          <div className={style.countDivLabel}>
            <p className={style.countDivContent2}>
              <span className={style.countDivContent2Span}>E</span>
              nter quantity to read books in {currentYear}
            </p>
            <div className={style.countBigDivInput}>
              <input
                className={style.countDivInput}
                placeholder="BooksPage count"
                value={number}
                onChange={handleChange}
                required
              />
              <div>
                <button
                  onClick={handleClick}
                  type="button"
                  className={style.countDivButton}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
