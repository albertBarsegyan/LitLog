import { useState } from 'react'
import style from './book.module.css'
import { Link } from 'react-router-dom'
import { RouteConstant } from '../../constants/RouteCostant'
import { numberRegEx } from '../../constants/RegExp'

const BookCount = () => {
  const [number, setNumber] = useState('')

  const handleChange = (e) => {
    const value = e.target.value
    if (numberRegEx.test(value) && value <= 365 && value >= 1) {
      setNumber(value)
    }
  }

  return (
    <div className={style.countDiv}>
      <h1 className={style.countHeadDiv}> Welcome LitLog</h1>
      <div className={style.countDiv2}>
        <p className={style.countDivContent}>
          Welcome to LitLog, the online platform for all things literature!
          Here, you'll find a wealth of resources to help you deepen your
          understanding and appreciation of books, authors, and literary works
          from around the world. Whether you're a student, a researcher, or
          simply a lover of literature, LitLog is the perfect place for you to
          explore and engage with the world of words.
        </p>
        <label>
          <p className={style.countDivContent2}>
            <span>E</span>nter quantity to read books
          </p>
          <input
            className={style.countDivInput}
            placeholder="Book count"
            value={number}
            onChange={handleChange}
          />
        </label>
        <Link to={RouteConstant.ProfilPage} className={style.countDivButton}>
          Next
        </Link>
      </div>
    </div>
  )
}
export default BookCount
