import LeftSide from '../LeftSide/LeftSide'
import RightSide from '../RightSide/RightSide'
import Article from './Article/Article'
import style from './articlePage.module.css'

const ArticlePage = () => {
  return (
    <div className={style.mainDiv}>
      <div className={style.bar}>
        <LeftSide />
      </div>
      <div className={style.bar} style={{ width: '100%' }}>
        <RightSide />
        <Article />
      </div>
    </div>
  )
}

export default ArticlePage
