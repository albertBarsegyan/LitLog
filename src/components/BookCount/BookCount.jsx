import style from './book.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { RouteConstant } from '../../constants/RouteCostant'
import { RegExp } from '../../constants/RegExp'
const BookCount = () => {
  const [number, setNumber] = useState('')

  const handleChange = (e) => {
    const value = e.target.value
    if (RegExp.numberRegExp.test(value) && value <= 365 && value >= 1) {
      setNumber(value)
    }
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
              <span style={{ fontSize: '40px' }}>E</span>nter quantity to read
              books
            </p>
            <input
              className={style.countDivInput}
              placeholder="Book count"
              value={number}
              onChange={handleChange}
            />
            <Link
              to={RouteConstant.ProfilPage}
              className={style.countDivButton}
            >
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BookCount
