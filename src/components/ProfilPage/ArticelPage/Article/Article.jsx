import { useState } from 'react'
import { styling } from '../../../../constants/style'
import Button from '../../../Button/Button1/Button'
import ArticleForm from '../ArticleForm/ArticleForm'

const Article = () => {
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
    </>
  )
}

export default Article
