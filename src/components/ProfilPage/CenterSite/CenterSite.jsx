import { Link } from 'react-router-dom'
import batman from '../../../assets/images/batman.png'
import bookimg2 from '../../../assets/images/bookimg2.png'
import style from '../CenterSite/centerSite.module.css'
import BookShow from '../BookShowProfile/BookShow'
import ProgressBar from '../Progress/ProgressBar'

const CenterSite = () => {
  return (
    <div className={style.centerDiv}>
      <div className={style.imageContainer}>
        <img className={style.bookImg} src={batman} alt="" />
        <div className={style.imageText}>
          <h2 className={style.heading}>Frank Miller</h2>
          <p className={style.paragrath}>
            Batman: <br /> The Dark Knight
          </p>
        </div>
        <div className={style.butRead}>
          <Link className={style.readNow}>Raed Now</Link>
        </div>
      </div>

      <div className={style.readingMain}>
        <h2 className={style.reding}>Continue Reading</h2>
        <div>
          <div className={style.imgParent}>
            <img src={bookimg2} className={style.redingImages} alt="" />
          </div>

          <p className={style.redingBookName}>Kobra Kai: Ultimate</p>
        </div>
        <div>
          <ProgressBar />
        </div>
      </div>
      <BookShow />
    </div>
  )
}

export default CenterSite
