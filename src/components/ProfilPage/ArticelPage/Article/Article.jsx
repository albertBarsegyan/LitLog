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

const ArticleRenderer = ({ article, handleEdit }) => {
  const handleEditInner = (event) => {
    event.stopPropagation()
    handleEdit(article)
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
        <button onClick={handleEditInner}>Edit</button>
      </div>
    </button>
  )
}

const Article = () => {
  const { user } = useAuth()
  const [editArticleValue, setEditArticleValue] = useState(null)
  const { data: articles } = useFirebaseData({
    collectionName: FirebaseDocument.Articles,
    queryArray: ['ownerUid', '==', user.uid],
  })
  const [openForm, setOpenForm] = useState(false)
  const handleOpenForm = () => setOpenForm(!openForm)

  const handleEditArticle = (article) => {
    setEditArticleValue(article)
    setOpenForm(true)
  }

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <Button onClick={handleOpenForm} styles={styling}>
          Add new article
        </Button>
      </div>
      {openForm && (
        <ArticleForm
          providedDefaultValue={editArticleValue}
          openForm={openForm}
          setOpenForm={setOpenForm}
        />
      )}

      <div className={style.articlesWrapper}>
        {articles.map((article) => (
          <ArticleRenderer
            handleEdit={handleEditArticle}
            key={article?.id}
            article={article}
          />
        ))}

        {!articles.length && <EmptyState />}
      </div>
    </>
  )
}

export default Article
