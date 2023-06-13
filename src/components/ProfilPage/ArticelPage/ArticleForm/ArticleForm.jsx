import Icons from '../../../../assets/images/icons/Icons'
import Button from '../../../Button/Button1/Button'
import style from './articleform.module.css'
import { useForm } from 'react-hook-form'
import { minMaxLengtMes, requeridMes } from '../../../../constants/errorMessage'
import { Icon } from '../../../../constants/PropsIcon'
import { styling } from '../../../../constants/style'
import { useAuth } from '../../../../context/auth.context'
import { addArticle } from '../../../../services/article.services'

const defaultValues = {
  headline: '',
  author: '',
  url: '',
}

const ArticleForm = ({ openForm, setOpenForm }) => {
  const { user } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm({
    mode: 'all',
    defaultValues,
  })

  const isButtonDisable = !isDirty && !isValid

  const handleAddArticleSubmit = async (data) => {
    const { errorCode } = await addArticle(data, user.uid)
    console.log('[handleAddArticleSubmit]', { errorCode })
    if (!errorCode) setOpenForm(false)

    reset()
  }

  return (
    <div className={style.bookFormDiv}>
      <form
        onSubmit={handleSubmit(handleAddArticleSubmit)}
        className={style.bookForm}
      >
        <p onClick={() => setOpenForm(!openForm)} className={style.xMark}>
          <Icons xmark={Icon.xmark} />
        </p>

        <div>
          <input
            {...register('headline', {
              required: requeridMes.reqMes,
              maxLength: {
                value: 15,
                message: minMaxLengtMes.maxName,
              },
              minLength: {
                value: 3,
                message: minMaxLengtMes.minName,
              },
            })}
            className={style.inputBook}
            type="text"
            placeholder="Headline"
          />
          <p>{errors?.headline && <span>{errors?.headline?.message}</span>}</p>
        </div>
        <div>
          <input
            {...register('author', {
              required: requeridMes.reqMes,
              maxLength: {
                value: 15,
                message: minMaxLengtMes.maxName,
              },
              minLength: {
                value: 3,
                message: minMaxLengtMes.minName,
              },
            })}
            className={style.inputBook}
            type="text"
            placeholder="Author Name"
          />
          <p>{errors?.author && <span>{errors?.author?.message}</span>}</p>
        </div>

        <div>
          <input
            {...register('url', {
              required: requeridMes.reqMes,
            })}
            className={style.inputBook}
            type="text"
            placeholder="Add url"
          />
          <p>{errors?.url && <span>{errors?.url?.message}</span>}</p>
        </div>

        <Button type="submit" disable={isButtonDisable} styles={styling}>
          Add article
        </Button>
      </form>
    </div>
  )
}

export default ArticleForm
