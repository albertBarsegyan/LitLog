import { useState } from 'react'
import { styling } from '../../../../constants/style'
import Button from '../../../Button/Button1/Button'
import ArticleForm from '../ArticleForm/ArticleForm'
import { useFirebaseData } from '../../../../context/use-firebase-data'
import { FirebaseDocument } from '../../../../constants/firebase.constants'
import { useAuth } from '../../../../context/auth.context'
// import style from '../../Books/book.module.css'
import style from './article.module.css'
import { EmptyState } from '../../../icons/EmptyState'
import { ArticleIcon } from '../../../icons/Article.icon'

const ArticleRenderer = ({ article }) => {
  const handleEdit = (event) => {
    event.stopPropagation()
  }

  const handleNavigate = () => {
    window.open(article.url, '_blank')
  }

  return (
    <button
      onClick={handleNavigate}
      className={style.bookWrapper}
      rel="noreferrer"
    >
      <div className={style.articleIconWrapper}>
        <ArticleIcon />
      </div>

      <div className={style.name}>
        <span style={{ color: '#fffacd' }}> Headline </span> -{' '}
        {article.headline}
      </div>

      <p className={style.paragrap}>
        <span style={{ color: '#fffacd' }}> Author </span> - {article.author}
      </p>

      <div className={style.editButtonWrapper}>
        <button onClick={handleEdit}>Edit</button>
      </div>
    </button>
  )
}

const Article = () => {
  const { user } = useAuth()
  const { data: articles } = useFirebaseData({
    collectionName: FirebaseDocument.Articles,
    queryArray: ['ownerUid', '==', user.uid],
  })
  const [openForm, setOpenForm] = useState(false)
  const handleOpenForm = () => setOpenForm(!openForm)

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <Button onClick={handleOpenForm} styles={styling}>
          Add new article
        </Button>
      </div>
      {openForm && (
        <ArticleForm openForm={openForm} setOpenForm={setOpenForm} />
      )}

      <div className={style.articlesWrapper}>
        {articles.map((article) => (
          <ArticleRenderer key={article?.id} article={article} />
        ))}

        {!articles.length && <EmptyState />}
      </div>
    </>
  )
}

export default Article
