import Books from '../Books/Books'
import LeftSide from '../../ProfilPage/LeftSide/LeftSide'
import PopUp from '../../ProfilPage/Modal/PopUp'
import RightSide from '../../ProfilPage/RightSide/RightSide'
import { useAuth } from '../../../context/auth.context'
import { BookCount } from '../../BookCount/BookCount'

const BooksPage = () => {
  const { user } = useAuth()

  if (user && Number(user.booksCount) < 1) {
    return <BookCount />
  }

  return (
    <div
      style={{
        display: 'flex',
        backgroundColor: 'var(--profileColor)',
        backgroundSize: 'cover',
        minHeight: '100vh',
      }}
    >
      <div>
        <LeftSide />
      </div>
      <div
        style={{ borderLeft: '1px solid var(--borderColor)', width: '100%' }}
      >
        <RightSide />
        <Books />
      </div>
      <PopUp />
    </div>
  )
}

export default BooksPage
